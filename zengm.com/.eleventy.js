const MarkdownIt = require("markdown-it");
const mdRender = new MarkdownIt();

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/.htaccess");
    eleventyConfig.addPassthroughCopy("src/files");
    eleventyConfig.addPassthroughCopy("src/static");
    eleventyConfig.addPassthroughCopy("src/css/*.css");

    eleventyConfig.addWatchTarget("src/files");
    eleventyConfig.addWatchTarget("src/static");
    eleventyConfig.addWatchTarget("src/css");
    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.addFilter("renderUsingMarkdown", function(rawString) {
         return mdRender.renderInline(rawString);
    });

    return {
        dir: {
            input: "src"
        }
    };
};
