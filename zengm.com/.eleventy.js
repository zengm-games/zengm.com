const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/files");

    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    return {
        dir: {
            input: "src"
        }
    };
};
