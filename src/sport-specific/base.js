const sportSpecificURL = require("../util/sportSpecificURL");

module.exports = type => {
	const data = {
		layout: "layout.njk",
		sports: ["baseball", "basketball", "football", "hockey"],
		pagination: {
			data: "sports",
			size: 1,
			alias: "sport",
		},

		// Inside eleventyComputed rather than root because of https://github.com/11ty/eleventy/issues/1076#issuecomment-745300512
		// ...but this doesn't work because of https://github.com/11ty/eleventy/issues/1555 so we need separate ones for JS and MD
		/*eleventyComputed: {
			...eleventyComputed,
			permalink(data) {
				return sportSpecificURL(data.page.filePathStem, data.sport);
			},
		},*/
		permalink:
			type === "js"
				? data => {
						return sportSpecificURL(data.page.filePathStem, data.sport);
				  }
				: "{% sportSpecificURL page.filePathStem, sport %}",
	};

	if (type === "md") {
		data.templateEngineOverride = "11ty.js,md";
	}

	return data;
};
