//const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const csso = require("csso");
const eleventyPluginRSS = require("@11ty/eleventy-plugin-rss");
const esbuild = require("esbuild");
const fs = require("node:fs/promises");
const { existsSync } = require("node:fs");
const { setTimeout } = require("node:timers/promises");
const hasha = require("hasha");
const htmlmin = require("html-minifier-terser");
const MarkdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const { PurgeCSS } = require("purgecss");
const posthtml = require("posthtml");
const urls = require("posthtml-urls");
const bySport = require("./src/util/bySport");
const sportSpecificURL = require("./src/util/sportSpecificURL");

// These are the same options as default for eleventy, just need to define it again so I can use it in filters.
const mdRender = new MarkdownIt({
	html: true,
}).use(markdownItAttrs);

const purgeCSS = new PurgeCSS();

const addHash = async path => {
	const fullPath = `_site${path}`;

	// idk why this shit started being necessary lol. I guess addPassthroughCopy is not guaranteed to complete before templates are processed.
	while (!existsSync(fullPath)) {
		console.log(`Waiting for ${path}...`);
		await setTimeout(1000);
	}

	if (path.includes("?")) {
		throw new Error(
			"Careful about using addHash when there is already a query string",
		);
	}

	const hash = hasha.fromFileSync(fullPath);

	return `${path}?v=${hash.substr(0, 10)}`;
};

module.exports = function (eleventyConfig) {
	//eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(eleventyPluginRSS);

	eleventyConfig.addPassthroughCopy("src/.htaccess");
	eleventyConfig.addPassthroughCopy("src/basketball/.htaccess");
	eleventyConfig.addPassthroughCopy("src/football/.htaccess");
	eleventyConfig.addPassthroughCopy("src/files");
	eleventyConfig.addPassthroughCopy(
		"src/universal-draft-lottery-simulator/assets",
	);
	eleventyConfig.addPassthroughCopy("src/css/*.css");
	eleventyConfig.addPassthroughCopy("src/js/*.js");
	eleventyConfig.addPassthroughCopy("src/facesjs/assets");

	eleventyConfig.addWatchTarget("src/files");
	eleventyConfig.addWatchTarget("src/css");
	eleventyConfig.addWatchTarget("src/js");
	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.addFilter("blogPostDateURL", function (date) {
		const year = date.getUTCFullYear();
		const month = String(date.getUTCMonth() + 1).padStart(2, "0");
		return `${year}/${month}`;
	});

	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		excerpt_separator: "<!--more-->",
	});

	eleventyConfig.setLibrary("md", mdRender);

	// Similar to https://github.com/google/eleventy-high-performance-blog/blob/eb1f9c11763022719b44ba2715b1e5f60f73baa1/.eleventy.js#L78-L92
	eleventyConfig.addAsyncFilter("addHash", addHash);

	const dateFormatter = new Intl.DateTimeFormat("en-us", {
		dateStyle: "long",
		timeZone: "UTC",
	});
	eleventyConfig.addFilter("blogPostDate", date => {
		return dateFormatter.format(date);
	});

	eleventyConfig.addFilter("isInPageTrail", (currentIndex, urls, activeURL) => {
		const NUM_LINKS = 5;

		const activeIndex = urls.indexOf(activeURL);
		let minIndex = Math.max(0, activeIndex - 2);
		let maxIndex = Math.min(minIndex + (NUM_LINKS - 1), urls.length - 1);
		minIndex = Math.max(0, maxIndex - (NUM_LINKS - 1));

		return currentIndex >= minIndex && currentIndex <= maxIndex;
	});

	eleventyConfig.addFilter("parentTitle", parent => {
		const titles = {
			blog: "Blog",
			customization: "Customization",
			debugging: "Debugging",
			manual: "Manual",
		};
		if (!titles[parent]) {
			throw new Error("Unknown parent in parentTitle");
		}
		return titles[parent];
	});

	eleventyConfig.addFilter("parentURL", (parent, sport) => {
		const urls = {
			blog: "/blog/",
			customization: `/${sport}/manual/customization/`,
			debugging: `/${sport}/manual/debugging/`,
			manual: `/${sport}/manual/`,
		};
		if (!urls[parent]) {
			throw new Error("Unknown parent in parentURL");
		}
		return urls[parent];
	});

	eleventyConfig.addFilter("renderMarkdown", function (rawString) {
		return mdRender.render(rawString);
	});

	eleventyConfig.addFilter("renderMarkdownInline", function (rawString) {
		return mdRender.renderInline(rawString);
	});

	// Replaces htmlToAbsoluteUrls from eleventy-plugin-rss, and handles /basketball/ and /football/ URLs.
	// See also tools/fix-links.js
	eleventyConfig.addNunjucksAsyncFilter(
		"myHTMLToAbsoluteUrls",
		async (html, callback) => {
			try {
				const options = {
					eachURL: url => {
						// We only care about relative links to the root (no http://, no mailto:, no #whatever, etc)
						if (!url.startsWith("/")) {
							// console.log("Leave alone", url);
							return url;
						}

						// Leave URL alone if it's a link to the same domain as the current file. Otherwise, prefix with domain.
						let urlSite;
						let prefix;
						if (url.startsWith("/basketball/")) {
							urlSite = "https://basketball-gm.com";
							prefix = "/basketball";
						} else if (url.startsWith("/football/")) {
							urlSite = "https://football-gm.com";
							prefix = "/football";
						} else {
							urlSite = "https://zengm.com";
							prefix = "";
						}

						// console.log("Rewrite", url, "=>", `${urlSite}${url.replace(prefix, "")}`);
						return `${urlSite}${url.replace(prefix, "")}`;
					},
				};

				const result = await posthtml().use(urls(options)).process(html);
				callback(null, result.html);
			} catch (error) {
				callback(error);
			}
		},
	);

	eleventyConfig.addShortcode(
		"bySport",
		(baseball, basketball, football, hockey, sport) => {
			return String(
				bySport(
					{
						baseball,
						basketball,
						football,
						hockey,
					},
					sport,
				),
			);
		},
	);

	eleventyConfig.addShortcode("favicon", websitePlay => {
		let favicon;
		let appleTouchIcon;
		if (websitePlay) {
			favicon = `${websitePlay}ico/icon.svg`;
			appleTouchIcon = `${websitePlay}ico/apple-touch-icon.png`;
		} else {
			favicon = "/files/logo-small.svg";
			appleTouchIcon = "/files/apple-touch-icon.png";
		}

		return `<link rel="icon" href="${favicon}">
<link rel="apple-touch-icon" href="${appleTouchIcon}">`;
	});

	eleventyConfig.addShortcode("sportTitle", sport => {
		if (!sport) {
			return "ZenGM";
		}

		return bySport(
			{
				baseball: "ZenGM Baseball",
				basketball: "Basketball GM",
				football: "Football GM",
				hockey: "ZenGM Hockey",
			},
			sport,
		);
	});

	eleventyConfig.addShortcode("sportSpecificURL", sportSpecificURL);

	eleventyConfig.addShortcode("sportPicker", async function (sport) {
		if (!sport) {
			return "";
		}

		const prefix = `/${sport}/`;
		if (!this.page.url.startsWith(`/${sport}/`)) {
			throw new Error(`URL not starting with ${prefix}: ${this.page.url}`);
		}
		const afterPrefix = this.page.url.replace(prefix, "");
		const urls = {
			baseball: `/baseball/${afterPrefix}`,
			basketball: `/basketball/${afterPrefix}`,
			football: `/football/${afterPrefix}`,
			hockey: `/hockey/${afterPrefix}`,
		};

		// For current sport, link to main page
		urls[sport] = prefix;

		return `<script async src="${await addHash("/js/dropdown.js")}"></script>
<div class="dropdown top-nav-item">
    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        ${bySport(
					{
						baseball:
							'<img src="https://baseball.zengm.com/ico/logo.png" width="18" height="18"><span class="d-none d-sm-inline ms-1">Baseball</span>',
						basketball:
							'<img src="https://play.basketball-gm.com/ico/logo.png" width="18" height="18"><span class="d-none d-sm-inline ms-1">Basketball GM</span>',
						football:
							'<img src="https://play.football-gm.com/ico/logo.png" width="18" height="18"><span class="d-none d-sm-inline ms-1">Football GM</span>',
						hockey:
							'<img src="https://hockey.zengm.com/ico/logo.png" width="18" height="18"><span class="d-none d-sm-inline ms-1">Hockey</span>',
					},
					sport,
				)}
    </button>
    <div class="dropdown-menu">
    	<a class="dropdown-item" href="${
				urls.basketball
			}"><img src="https://play.basketball-gm.com/ico/logo.png" width="18" height="18" class="me-1">Basketball GM</a>
    	<a class="dropdown-item" href="${
				urls.football
			}"><img src="https://play.football-gm.com/ico/logo.png" width="18" height="18" class="me-1">Football GM</a>
		<a class="dropdown-item" href="${
			urls.baseball
		}"><img src="https://baseball.zengm.com/ico/logo.png" width="18" height="18" class="me-1">Baseball</a>
		<a class="dropdown-item" href="${
			urls.hockey
		}"><img src="https://hockey.zengm.com/ico/logo.png" width="18" height="18" class="me-1">Hockey</a>
	</div>
</div>`;
	});

	// Estimate of events lost by GA, compared to my new SQL tracker
	const seasonsSimmedGAFactor = 1.25;

	// See ~/Documents/ZenGM/Annual Traffic, from GA.ods
	const trafficData = [
		{
			// Take data from Non-Bounce Sessions!!!
			title: "Sessions",
			data: [
				["Year", "Basketball", "Football", "Hockey", "Baseball"],
				["2013", 121094, null, null, null],
				["2014", 424209, null, null, null],
				["2015", 887680, null, null, null],
				["2016", 965031, null, null, null],
				["2017", 1243975, null, null, null],
				["2018", 1662975, null, null, null],
				["2019", 2265825, 225262, null, null],
				["2020", 3233971, 532886, null, null],
				["2021", 4209234, 835771, 179351, null],
				["2022", 4804554, 1136121, 219768, 181754],
				["2023", 4873255, 1214634, 237702, 282542],
				["2024", 4605106, 1338584, 265473, 333059],
				["2025", 5025784, 1458028, 273943, 379289],
			],
		},
		/*{
			title: "Pageviews",
			data: [
				["Year", "Basketball", "Football", "Hockey", "Baseball"],
				["2013", 13661063, null, null, null],
				["2014", 39662532, null, null, null],
				["2015", 76650999, null, null, null],
				["2016", 86009829, null, null, null],
				["2017", 144489273, null, null, null],
				["2018", 184571462, null, null, null],
				["2019", 222568917, 21498972, null, null],
				["2020", 299207611, 47256207, null, null],
				["2021", 354828366, 61465730, 12222619, null],
				["2022", 420082784, 85928529, 15757811, 11813891],
				["2023", 512152630, 106479944, 19797050, 21253770],
				["2024", 502188433, 117211577, 21033870, 22859560],
			],
		},*/
		{
			title: "Seasons Simulated",
			data: [
				["Year", "Basketball", "Football", "Hockey", "Baseball"],
				["2013", Math.round(seasonsSimmedGAFactor * 332684), null, null, null],
				["2014", Math.round(seasonsSimmedGAFactor * 965891), null, null, null],
				["2015", Math.round(seasonsSimmedGAFactor * 1866662), null, null, null],
				["2016", Math.round(seasonsSimmedGAFactor * 2094575), null, null, null],
				["2017", Math.round(seasonsSimmedGAFactor * 3518710), null, null, null],
				["2018", Math.round(seasonsSimmedGAFactor * 4873239), null, null, null],
				[
					"2019",
					Math.round(seasonsSimmedGAFactor * 6418079),
					Math.round(seasonsSimmedGAFactor * 298515),
					null,
					null,
				],
				[
					"2020",
					Math.round(seasonsSimmedGAFactor * 8751905),
					Math.round(seasonsSimmedGAFactor * 646723),
					null,
					null,
				],
				[
					"2021",
					Math.round(seasonsSimmedGAFactor * 10409799),
					Math.round(seasonsSimmedGAFactor * 1005804),
					Math.round(seasonsSimmedGAFactor * 248425),
					null,
				],
				[
					"2022",
					Math.round(seasonsSimmedGAFactor * 12008046),
					Math.round(seasonsSimmedGAFactor * 1514495),
					Math.round(seasonsSimmedGAFactor * 320806),
					Math.round(seasonsSimmedGAFactor * 222685),
				],
				[
					"2023",
					Math.round(seasonsSimmedGAFactor * 14139524),
					Math.round(seasonsSimmedGAFactor * 1930638),
					Math.round(seasonsSimmedGAFactor * 452250),
					Math.round(seasonsSimmedGAFactor * 443270),
				],
				["2024", 17501562, 2454771, 530665, 619663],
				["2025", 20900958, 2970853, 688641, 778269],
			],
		},
		{
			title: "Total Play Time (years)",
			data: [
				["Year", "Basketball", "Football", "Hockey", "Baseball"],
				["2013", 18.14, null, null, null],
				["2014", 42.06, null, null, null],
				["2015", 66.73, null, null, null],
				["2016", 70.09, null, null, null],
				["2017", 86.79, null, null, null],
				["2018", 100.7, null, null, null],
				["2019", 136.32, 12.95, null, null],
				["2020", 206.1, 32.93, null, null],
				["2021", 264.51, 51.15, 9.97, null],
				["2022", 298.12, 71.53, 12.59, 10.8],
				["2023", 335.37, 83.55, 15.88, 18.81],
				["2024", 304.43, 85.88, 15.91, 19.24],
				["2025", 344.37, 95.59, 17.69, 24.18],
			],
		},
	];

	eleventyConfig.addShortcode("trafficTable", year => {
		const sports = trafficData[0].data[0].slice(1);
		const valueNames = trafficData.map(info => info.title);
		const years = trafficData[0].data
			.slice(1)
			.map(row => parseInt(row[0]))
			.filter(year2 => year2 <= year);

		let html = `<div class="table-responsive">
<table class="table">
<thead>
<tr>
<th>Sport</th>
<th>Year</th>
${valueNames.map(name => `<th>${name}</th>`).join("")}
</tr>
</thead>
<tbody>`;

		let numSports = 0;
		for (const sport of sports) {
			let firstRowSport = true;
			const j = sports.indexOf(sport) + 1;

			YEAR_LOOP: for (let i = 0; i < years.length; i++) {
				const year = years[i];
				const tableRow = [firstRowSport ? sport : "", year];
				for (const info of trafficData) {
					const rows = info.data.slice(1);

					const value = rows[i][j];
					if (value === null) {
						continue YEAR_LOOP;
					}

					tableRow.push(Number(value).toLocaleString());

					if (firstRowSport) {
						firstRowSport = false;
						numSports += 1;
					}
				}

				html += `<tr>${tableRow
					.map(value => `<td>${value}</td>`)
					.join("")}</tr>`;
			}
		}

		if (numSports > 1) {
			for (const year of years) {
				const tableRow = [year === years[0] ? "Total" : "", year, 0, 0, 0];
				for (let i = 0; i < trafficData.length; i++) {
					const info = trafficData[i];
					const row = info.data.find(row => row[0] === String(year));
					if (!row) {
						continue;
					}

					for (let j = 1; j < row.length; j++) {
						if (row[j] !== null) {
							tableRow[i + 2] += row[j];
						}
					}
				}

				for (let i = 2; i < tableRow.length; i++) {
					tableRow[i] = tableRow[i].toLocaleString();
				}

				html += `<tr>${tableRow
					.map(value => `<td>${value}</td>`)
					.join("")}</tr>`;
			}
		}

		html += `</tbody>	
</table>
</div>`;

		return html;
	});

	eleventyConfig.addShortcode("trafficCharts", year => {
		const infos = JSON.parse(JSON.stringify(trafficData));

		for (const info of infos) {
			info.data = info.data.filter(
				(row, i) => i === 0 || parseInt(row[0]) <= year,
			);

			// Need to prune any sports with no data in this year?
			const last = info.data[info.data.length - 1];
			const pruneCols = new Set();
			for (let i = 1; i < last.length; i++) {
				if (last[i] === null) {
					pruneCols.add(i);
				}
			}
			if (pruneCols.size > 0) {
				info.data = info.data.map(row => [
					...row.filter((value, i) => !pruneCols.has(i)),
				]);
			}
			if (info.data[0].length > 2) {
				info.data.forEach((row, i) => {
					if (i === 0) {
						row.splice(1, 0, "Total");
					} else {
						let sum = 0;
						for (let j = 1; j < row.length; j++) {
							const value = row[j];
							if (value !== null) {
								sum += value;
							}
						}

						row.splice(1, 0, sum);
					}
				});
			}
		}

		// Needs to have no indentation and no line breaks, otherwise parts get parsed as Markdown
		return `<div id="chart_div_0" class="google-chart"></div>
<div id="chart_div_1" class="google-chart"></div>
<div id="chart_div_2" class="google-chart mb-3"></div>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script>
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(() => {
const options = {
legend: { position: 'in' },
lineWidth: 4,
pointSize: 12,
vAxis: { format: 'short' }
};
const infos = ${JSON.stringify(infos)};
for (let i = 0; i < infos.length; i++) {
const info = infos[i];
const data = new google.visualization.arrayToDataTable(info.data);
const chart = new google.visualization.LineChart(document.getElementById("chart_div_" + i));
chart.draw(data, {
...options,
title: info.title,
});
}
});
</script>`;
	});

	eleventyConfig.addTransform("htmlmin", async function (content, outputPath) {
		// Eleventy 1.0+: use this.inputPath and this.outputPath instead
		if (outputPath.endsWith(".html")) {
			const minified = await htmlmin.minify(content, {
				collapseBooleanAttributes: true,
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJS: true,
				removeComments: true,
				useShortDoctype: true,
			});
			return minified;
		}

		return content;
	});

	eleventyConfig.on("afterBuild", async () => {
		const promises = [];

		promises.push(
			(async () => {
				const results = await purgeCSS.purge();
				for (const result of results) {
					const minifiedCss = csso.minify(result.css).css;
					await fs.writeFile(result.file, minifiedCss);
				}
				console.log("CSS processing complete");
			})(),
		);

		for (const file of ["carousel.js", "dropdown.js"]) {
			promises.push(
				esbuild.build({
					entryPoints: [`src/js/${file}`],
					bundle: true,
					minify: true,
					outfile: `_site/js/${file}`,
				}),
			);
		}

		await Promise.all(promises);
	});

	return {
		dir: {
			input: "src",
		},
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	};
};
