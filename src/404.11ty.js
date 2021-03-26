module.exports = class FAQ {
	data() {
		return {
			layout: "layout.njk",
			title: "404 Error",
			folders: ["/basketball", "/football", "/"],
			pagination: {
				data: "folders",
				size: 1,
				alias: "folder",
			},
			permalink: data => `${data.folder}/404/`,
		};
	}

	render() {
		return "<p>Sorry, the requested page was not found.</p>";
	}
};
