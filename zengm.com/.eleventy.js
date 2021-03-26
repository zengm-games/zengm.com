//const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const eleventyPluginRSS = require("@11ty/eleventy-plugin-rss");
const fs = require("fs/promises");
const htmlmin = require("html-minifier");
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

module.exports = function (eleventyConfig) {
	//eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(eleventyPluginRSS);

	eleventyConfig.addPassthroughCopy("src/.htaccess");
	eleventyConfig.addPassthroughCopy("src/files");
	eleventyConfig.addPassthroughCopy("src/css/*.css");

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

	const dateFormatter = new Intl.DateTimeFormat("en-us", {
		dateStyle: "long",
		timeZone: "UTC",
	});
	eleventyConfig.addFilter("blogPostDate", function (date) {
		return dateFormatter.format(date);
	});

	eleventyConfig.addFilter(
		"isInPageTrail",
		function (currentIndex, urls, activeURL) {
			const NUM_LINKS = 5;

			const activeIndex = urls.indexOf(activeURL);
			let minIndex = Math.max(0, activeIndex - 2);
			let maxIndex = Math.min(minIndex + (NUM_LINKS - 1), urls.length - 1);
			minIndex = Math.max(0, maxIndex - (NUM_LINKS - 1));

			return currentIndex >= minIndex && currentIndex <= maxIndex;
		},
	);

	eleventyConfig.addFilter("parentTitle", function (parent) {
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

	eleventyConfig.addFilter("parentURL", function (parent, sport) {
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
		function (basketball, football, hockey, sport) {
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

	eleventyConfig.addShortcode("favicon", function (websitePlay) {
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

	eleventyConfig.addShortcode("sportTitle", function (sport) {
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
			basketball: `https://basketball-gm.com/${afterPrefix}`,
			football: `https://football-gm.com/${afterPrefix}`,
			hockey: `https://zengm.com/hockey/${afterPrefix}`,
		};

		return `<div class="dropdown top-nav-item">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
        ${bySport(
					{
						basketball:
							'<img src="https://play.basketball-gm.com/ico/logo.png" width="18" height="18"><span class="d-none d-sm-inline ml-1">Basketball GM</span>',
						football:
							'<img src="https://play.football-gm.com/ico/logo.png" width="18" height="18"><span class="d-none d-sm-inline ml-1">Football GM</span>',
						hockey:
							'<img src="https://hockey.zengm.com/ico/logo.png" width="18" height="18"><span class="d-none d-sm-inline ml-1">Hockey</span>',
					},
					sport,
				)}
    </button>
    <div class="dropdown-menu">
    <a class="dropdown-item" href="${
			urls.basketball
		}"><img src="https://play.basketball-gm.com/ico/logo.png" width="18" height="18" class="mr-1">Basketball GM</a>
    <a class="dropdown-item" href="${
			urls.football
		}"><img src="https://play.football-gm.com/ico/logo.png" width="18" height="18" class="mr-1">Football GM</a>
    <a class="dropdown-item" href="${
			urls.hockey
		}"><img src="https://hockey.zengm.com/ico/logo.png" width="18" height="18" class="mr-1">Hockey</a>
    </div>
</div>`;
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
			await fs.writeFile(result.file, result.css);
		}
		console.log("purgeCSS completed");
	});

	return {
		dir: {
			input: "src",
		},
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	};
};
