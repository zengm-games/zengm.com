//const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const csso = require("csso");
const eleventyPluginRSS = require("@11ty/eleventy-plugin-rss");
const esbuild = require("esbuild");
const fs = require("fs/promises");
const hasha = require("hasha");
const htmlmin = require("html-minifier-terser");
const MarkdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const PurgeCSS = require("purgecss").default;
const posthtml = require("posthtml");
const urls = require("posthtml-urls");
const bySport = require("./src/util/bySport");
const sportSpecificURL = require("./src/util/sportSpecificURL");

// These are the same options as default for eleventy, just need to define it again so I can use it in filters.
const mdRender = new MarkdownIt({
	html: true,
}).use(markdownItAttrs);

const purgeCSS = new PurgeCSS();

const addHash = path => {
	if (path.includes("?")) {
		throw new Error(
			"Careful about using addHash when there is already a query string",
		);
	}

	const hash = hasha.fromFileSync(`_site${path}`);

	return `${path}?v=${hash.substr(0, 10)}`;
};

module.exports = function (eleventyConfig) {
	//eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(eleventyPluginRSS);

	eleventyConfig.addPassthroughCopy("src/.htaccess");
	eleventyConfig.addPassthroughCopy("src/basketball/.htaccess");
	eleventyConfig.addPassthroughCopy("src/football/.htaccess");
	eleventyConfig.addPassthroughCopy("src/files");
	eleventyConfig.addPassthroughCopy("src/css/*.css");
	eleventyConfig.addPassthroughCopy("src/js/*.js");

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
	eleventyConfig.addFilter("addHash", addHash);

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
		(basketball, football, hockey, sport) => {
			return String(
				bySport(
					{
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
				basketball: "Basketball GM",
				football: "Football GM",
				hockey: "ZenGM Hockey",
			},
			sport,
		);
	});

	eleventyConfig.addShortcode("sportSpecificURL", sportSpecificURL);

	eleventyConfig.addShortcode("sportPicker", function (sport) {
		if (!sport) {
			return "";
		}

		const prefix = `/${sport}/`;
		if (!this.page.url.startsWith(`/${sport}/`)) {
			throw new Error(`URL not starting with ${prefix}: ${this.page.url}`);
		}
		const afterPrefix = this.page.url.replace(prefix, "");
		const urls = {
			basketball: `/basketball/${afterPrefix}`,
			football: `/football/${afterPrefix}`,
			hockey: `/hockey/${afterPrefix}`,
		};

		// For current sport, link to main page
		urls[sport] = prefix;

		return `<script async src="${addHash("/js/dropdown.js")}"></script>
<div class="dropdown top-nav-item">
    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        ${bySport(
					{
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
			urls.hockey
		}"><img src="https://hockey.zengm.com/ico/logo.png" width="18" height="18" class="me-1">Hockey</a>
    </div>
</div>`;
	});

	const trafficData = [
		{
			title: "Sessions",
			data: [
				["Year", "Basketball", "Football", "Hockey"],
				["2013", 135664, null, null],
				["2014", 471553, null, null],
				["2015", 982926, null, null],
				["2016", 1101256, null, null],
				["2017", 1657749, null, null],
				["2018", 1868091, null, null],
				["2019", 2403039, 233990, null],
				["2020", 3440761, 565396, null],
			],
		},
		{
			title: "Pageviews",
			data: [
				["Year", "Basketball", "Football", "Hockey"],
				["2013", 13661063, null, null],
				["2014", 39662532, null, null],
				["2015", 76650999, null, null],
				["2016", 86009829, null, null],
				["2017", 144489273, null, null],
				["2018", 184571462, null, null],
				["2019", 222568917, 21498972, null],
				["2020", 299207611, 47256207, null],
			],
		},
		{
			title: "Total Play Time (years)",
			data: [
				["Year", "Basketball", "Football", "Hockey"],
				["2013", 18.14, null, null],
				["2014", 42.06, null, null],
				["2015", 66.73, null, null],
				["2016", 70.09, null, null],
				["2017", 86.79, null, null],
				["2018", 100.7, null, null],
				["2019", 136.32, 12.95, null],
				["2020", 206.1, 32.93, null],
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

					firstRowSport = false;
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
		}

		// Needs to have no indentation and no line breaks, otherwise parts get parsed as Markdown
		return `<div id="chart_div_0" class="google-chart"></div>
<div id="chart_div_1" class="google-chart"></div>
<div id="chart_div_2" class="google-chart"></div>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script>
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(() => {
const options = {
legend: { position: 'in' },
lineWidth: 5,
pointSize: 20,
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

	eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
		// Eleventy 1.0+: use this.inputPath and this.outputPath instead
		if (outputPath.endsWith(".html")) {
			const minified = htmlmin.minify(content, {
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
		const results = await purgeCSS.purge();
		for (const result of results) {
			const minifiedCss = csso.minify(result.css).css;
			await fs.writeFile(result.file, minifiedCss);
		}
		console.log("CSS processing complete");

		for (const file of ["carousel.js", "dropdown.js"]) {
			await esbuild.build({
				entryPoints: [`src/js/${file}`],
				bundle: true,
				minify: true,
				outfile: `_site/js/${file}`,
			});
		}
	});

	return {
		dir: {
			input: "src",
		},
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	};
};
