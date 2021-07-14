const bySport = require("../util/bySport");

module.exports = {
	gameAcronym: data =>
		data.sport
			? bySport(
					{
						basketball: "BBGM",
						football: "FBGM",
						hockey: "ZGMH",
					},
					data.sport,
			  )
			: undefined,

	gameName: data =>
		data.sport
			? bySport(
					{
						basketball: "Basketball GM",
						football: "Football GM",
						hockey: "ZenGM Hockey",
					},
					data.sport,
			  )
			: undefined,

	googleAdsConversionID: data =>
		data.sport
			? bySport(
					{
						basketball: "AW-339141212/t1hzCMK-g9YCENzE26EB",
						football: "AW-339141212/CtisCO6hh9YCENzE26EB",
						hockey: "AW-339141212/6vk0CL6th9YCENzE26EB",
					},
					data.sport,
			  )
			: undefined,

	proLeagueAbbrev: data =>
		data.sport
			? bySport(
					{
						basketball: "NBA",
						football: "NFL",
						hockey: "NHL",
					},
					data.sport,
			  )
			: undefined,

	ratingKeys: data =>
		data.sport
			? bySport(
					{
						basketball: [
							"diq",
							"dnk",
							"drb",
							"endu",
							"fg",
							"ft",
							"hgt",
							"ins",
							"jmp",
							"oiq",
							"pss",
							"reb",
							"spd",
							"stre",
							"tp",
						],
						football: [
							"hgt",
							"stre",
							"spd",
							"endu",
							"thv",
							"thp",
							"tha",
							"bsc",
							"elu",
							"rtr",
							"hnd",
							"rbk",
							"pbk",
							"pcv",
							"tck",
							"prs",
							"rns",
							"kpw",
							"kac",
							"ppw",
							"pac",
						],
						hockey: [
							"hgt",
							"stre",
							"spd",
							"endu",
							"pss",
							"wst",
							"sst",
							"stk",
							"oiq",
							"chk",
							"blk",
							"fcf",
							"diq",
							"glk",
						],
					},
					data.sport,
			  )
			: undefined,

	subredditName: data =>
		data.sport
			? bySport(
					{
						basketball: "BasketballGM",
						football: "Football_GM",
						hockey: "ZenGMHockey",
					},
					data.sport,
			  )
			: undefined,

	websitePlay: data =>
		data.sport
			? bySport(
					{
						basketball: "https://play.basketball-gm.com/",
						football: "https://play.football-gm.com/",
						hockey: "https://hockey.zengm.com/",
					},
					data.sport,
			  )
			: undefined,
};
