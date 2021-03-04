const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const { minify } = require("terser");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/files");
    eleventyConfig.addPassthroughCopy("src/css/*.css");

    eleventyConfig.addWatchTarget("src/files");
    eleventyConfig.addWatchTarget("src/css");
    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
        code,
        callback
    ) {
        try {
            const minified = await minify(code);
            callback(null, minified.code);
        } catch (err) {
            console.error("Terser error: ", err);
            // Fail gracefully.
            callback(null, code);
        }
    });

    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if(outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    });

    return {
        dir: {
            input: "src"
        }
    };
};
