module.exports = {
	content: ["_site/*.html", "_site/**/*.html"],
	css: ["_site/css/*.css"],
	safelist: {
		deep: [/^carousel/],
	},
};
