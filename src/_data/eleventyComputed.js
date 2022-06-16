const bySport = require("../util/bySport");

module.exports = {
	gameAcronym: data =>
		data.sport
			? bySport(
					{
						baseball: "ZGMB",
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
						baseball: "ZenGM Baseball",
						basketball: "Basketball GM",
						football: "Football GM",
						hockey: "ZenGM Hockey",
					},
					data.sport,
			  )
			: undefined,

	proLeagueAbbrev: data =>
		data.sport
			? bySport(
					{
						baseball: "MLB",
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
						baseball: [
							"hgt",
							"spd",
							"hpw",
							"con",
							"eye",
							"gnd",
							"fly",
							"thr",
							"cat",
							"ppw",
							"ctl",
							"mov",
							"endu",
						],
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
						baseball: "ZenGMBaseball",
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
						baseball: "https://baseball.zengm.com/",
						basketball: "https://play.basketball-gm.com/",
						football: "https://play.football-gm.com/",
						hockey: "https://hockey.zengm.com/",
					},
					data.sport,
			  )
			: undefined,
};
