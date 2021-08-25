const bySport = require("../util/bySport");
const eleventyComputed = require("../_data/eleventyComputed");
const base = require("./base");

const feedbacks = {
	basketball: [
		{
			name: "Stanners, gmgames.org",
			text: "I highly recommend you stop whatever you are doing right now and go play Basketball GM.",
			url: "https://gmgames.org/basketball-gm/review/",
		},
		{
			name: "Neil Paine, FiveThirtyEight",
			text: "A really good online browser-based basketball management simulation game.",
			url: "https://fivethirtyeight.com/features/definitely-our-last-michael-jordan-lebron-james-goat-take-definitely/",
		},
		{
			name: "dmorey",
			text: "Scola used to play this game on our team plane!",
			url: "https://www.reddit.com/r/nba/comments/1ki6w2/iam_the_houston_rockets_gm_ama_offseason_addition/cbp7ei9?context=1",
		},
		{
			name: "Tommy Smokes, Barstool Sports",
			text: "One of the best kept secrets on the Internet.",
			url: "https://twitter.com/TomScibelli/status/1394737047114424326",
		},
		{
			name: "KOT4Q",
			text: "This is actually fire! Whoa, this is super underrated.",
			url: "https://www.youtube.com/watch?v=hhpMF5KTpuQ#t=24m13s",
		},
		{
			name: "KrispyFlakes",
			text: "This game is awesome!",
			url: "https://www.youtube.com/watch?v=-XBtjoXdaz4",
		},
		{
			name: "BaerTaffy",
			text: "I've played this for years. I love it. I'm having a blast with it.",
			url: "https://www.youtube.com/watch?v=upDVNgeAsHI#t=43m45s",
		},
		{
			name: "Stun Club Soda",
			text: "This is a game I spend a lot of hours on and it never really gets old.",
			url: "https://www.youtube.com/watch?v=6n4yGfOwDZs#t=6m49s",
		},
	],
	football: [
		{
			name: "jordab7",
			text: "This game is good",
			url: "https://www.reddit.com/r/Football_GM/comments/bg3jg5/this_game_is_good/",
		},
		{
			name: "LordFirebeard",
			text: "Ooh, shiny!",
			url: "https://www.reddit.com/r/BasketballGM/comments/bfxjl0/early_beta_of_the_new_football_gm/elh75wc/",
		},
		{
			name: "dontellmymomimhere",
			text: "Every time you post an improvement, I can't help but tell myself to play 1 game. Then it's 4 seasons later and I remember I'm supposed to be working.",
			url: "https://www.reddit.com/r/Football_GM/comments/hogban/recent_development_some_small_improvements/fxj23tu/",
		},
		{
			name: "notjuneau",
			text: "This is honestly my favorite game ever. It is always there for me on my desktop and I love every moment playing on it.",
			url: "https://www.reddit.com/r/Football_GM/comments/gamykl/football_gm_how_it_changed_my_life/fp2fhas/",
		},
		{
			name: "omnishant",
			text: "This is amazing. I love it.",
			url: "https://www.reddit.com/r/Football_GM/comments/dz84f8/new_in_version_201911201248_team_ratings_and/f86cjan/",
		},
		{
			name: "RELAXNMAXN",
			text: "Randomly stumbling across this game a little while ago has been the best thing that has happened to me.",
			url: "https://www.reddit.com/r/Football_GM/comments/fqdxsl/genuinely_love_this_site/",
		},
		{
			name: "WhyNotHoiberg",
			text: "Love the game. Play it all the time.",
			url: "https://www.reddit.com/r/nfl/comments/ct3eph/im_dumbmatter_creator_of_football_gm_a_free/exicesf/",
		},
	],
	hockey: [
		{
			name: "ycptank",
			text: "I’ve only ever watched football and basketball and soccer but this game made me start watching hockey.",
			url: "https://www.reddit.com/r/ZenGMHockey/comments/m9inrx/some_updates_in_version_202103201385/grna043/",
		},
		{
			name: "aocxp068",
			text: "Holy fuck this game is so good now",
			url: "https://www.reddit.com/r/ZenGMHockey/comments/lxmuux/holy_fuck_this_game_is_so_good_now/",
		},
		{
			name: "kevinmac1120",
			text: "I love this game.",
			url: "https://www.reddit.com/r/ZenGMHockey/comments/m86nhf/draft_order_now_matches_the_nflnhl_in_football_gm/grg14qc/",
		},
		{
			name: "GiantPebble403",
			text: "This is awesome!",
			url: "https://www.reddit.com/r/ZenGMHockey/comments/lw79il/oh_shit_new_zengm_hockey_out_now_the_past_6_years/gpfp6pc/",
		},
		{
			name: "ClevelandFan",
			text: "Overall, I think it’s one of the best sports simulators I’ve come across, not just hockey.",
			url: "https://gmgames.org/user-review/excellent-top-to-bottom/",
		},
	],
};

module.exports = class {
	data() {
		return {
			...base("js"),
			layout: "sport-specific-landing-page.njk",
			eleventyComputed: {
				...eleventyComputed,
				feedbacks(data) {
					return JSON.stringify(bySport(feedbacks, data.sport));
				},
			},
		};
	}

	render() {
		return "";
	}
};
