module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"src/files": "files"});

    module.exports = {
        dir: {
            input: "src"
        }
    };
};
