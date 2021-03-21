module.exports = {
	layout: "layout.njk",
	pagination: {
		data: "sports",
		size: 1,
		alias: "sport",
	},
	permalink(data) {
		let filePathStem = data.page.filePathStem;
		if (!filePathStem.endsWith("/index")) {
			filePathStem += "/index";
		}

		return `${filePathStem.replace("sport-specific", data.sport)}.html`;
	},
};
