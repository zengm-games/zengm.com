module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/files");

    return {
        dir: {
            input: "src"
        }
    };
};
