module.exports = (filePathStem, sport) => {
	let stem = filePathStem;
	if (!stem.endsWith("/index")) {
		stem += "/index";
	}
	return `${stem.replace("sport-specific", sport)}.html`;
};
