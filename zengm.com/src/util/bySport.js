const bySport = (object, sport) => {
	if (object.hasOwnProperty(sport)) {
		return object[sport];
	}

	if (object.hasOwnProperty("default")) {
		return object.default;
	}

	throw new Error(`No value for sport "${sport}" and no default`);
};

module.exports = bySport;
