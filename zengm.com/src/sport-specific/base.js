module.exports = {
	layout: "layout.njk",
	pagination: {
		data: "sports",
		size: 1,
		alias: "sport",
	},

	// Inside eleventyComputed rather than root because of https://github.com/11ty/eleventy/issues/1076#issuecomment-745300512
	eleventyComputed: {
		permalink(data) {
			let filePathStem = data.page.filePathStem;
			if (!filePathStem.endsWith("/index")) {
				filePathStem += "/index";
			}

			return `${filePathStem.replace("sport-specific", data.sport)}.html`;
		},
	},
};
