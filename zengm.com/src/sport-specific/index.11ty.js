const bySport = require("../util/bySport");
const eleventyComputed = require("../_data/eleventyComputed");
const base = require("./base");

const feedbacks = {
	basketball: [
		{
			name: "BackupRedditAccount2",
			text: "All my hardcore bball friends got immediately hooked",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1j5iju/after_playing_this_game_religiously_for_3_days/",
		},
		{
			name: "Number333",
			text: "Dude this is epic",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cba8k3w",
		},
		{
			name: "Sergant_Seal",
			text: "Its amazing! Love it! Well there goes my day....",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cba69je",
		},
		{
			name: "DTMaster",
			text: "Thank you so much, I've been wishing someone will make this.",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cba61c2",
		},
		{
			name: "Hornstinger",
			text: "Love the game. Very addictive!",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cbadbyd",
		},
		{
			name: "moodyswingman",
			text: "This is so much fun! Thank you!!",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cbagj3h",
		},
		{
			name: "512austin",
			text:
				"This is fun as hell, wasting so much of my time that I can't afford to waste. Fuck",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cbah69f",
		},
		{
			name: "pandalolwut",
			text:
				"This is so addicting. I've been looking for something like this for awhile.",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cbajboa",
		},
		{
			name: "ejrizal",
			text: "This is addicting.",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cbajd1o",
		},
		{
			name: "polished",
			text:
				"YOU ARE AMAZING! There are probably other comments like this, but damn, I love you.",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cbamh43",
		},
		{
			name: "deadshadow",
			text: "Fantastic! Been stuck to this all day.",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cbankkr",
		},
		{
			name: "sirmcquade",
			text: "Hell yes, you rock for this.",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cbb199p",
		},
		{
			name: "gracadio",
			text: "I CAN'T STOP SIMULATING.",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cbb2n67",
		},
		{
			name: "kitkit123",
			text: "Seriously soooo awesome. I played all day at work :)",
			url:
				"https://www.reddit.com/r/nba/comments/1j1e6q/i_made_a_singleplayer_basketball_management/cbb7v9d",
		},
		{
			name: "aethhtea",
			text: "this game just ate up 5 hours of my life in the blink of an eye.",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1j33dg/great_game_but_cap_management_is_too_easy_because/",
		},
		{
			name: "djtoken",
			text:
				"This game is really fantastic. You know it's good, when I've ignored my homework for the whole weekend to play this game.",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1j9027/suggestions/cbck3lq",
		},
		{
			name: "Stalyx",
			text:
				"This is an awesomely addictive game, I love it, and am thrilled at its potential. Thank you for making my off-season a lot less boring.",
			url: "https://www.reddit.com/r/BasketballGM/comments/1j9p9r/thank_you/",
		},
		{
			name: "Cleis",
			text:
				"Seriously though, love the game. It completely destroyed my weekend.",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1j9cz3/i_should_stop_playing_while_im_ahead/cbcjvgh",
		},
		{
			name: "dmorey",
			text: "Scola used to play this game on our team plane!",
			url:
				"https://www.reddit.com/r/nba/comments/1ki6w2/iam_the_houston_rockets_gm_ama_offseason_addition/cbp7ei9?context=1",
		},
		{
			name: "ssko13",
			text:
				"thank you for creating this awesome game (although you have added to my procrastination habits)",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1lhojx/new_formula_for_overall_ratings/cbzpjp3",
		},
		{
			name: "stopbeingsheep",
			text: "I love this game!",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1lwwdu/has_anybody_played_this_on_a_tablet/cc3n3yt",
		},
		{
			name: "@bkrall",
			text: "Absolutely addictive",
			url: "https://twitter.com/bkrall/status/361554804390113280",
		},
		{
			name: "@seancorrales",
			text: "the most addictive basketball sim in existence",
			url: "https://twitter.com/seancorrales/status/373500261815164929",
		},
		{
			name: "@Drew__Carson",
			text: "i lose too many hours playing it",
			url: "https://twitter.com/Drew__Carson/status/386848463247249408",
		},
		{
			name: "@coryhotline",
			text: "Pretty much the sole reason I don't need an NBA2K game.",
			url: "https://twitter.com/coryhotline/status/410059320055693314",
		},
		{
			name: "motez23",
			text: "You are literally Jesus.",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1mves9/new_features_trading_block_and_a_better_what/ccd6uy8",
		},
		{
			text: "This game is freakin' great! Thanks for making it!!",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1rmthx/thanks_big_smile_here/",
		},
		{
			name: "stopbeingsheep",
			text: "This is my favorite indie game of all time.",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1sarll/open_source/cdvusgz",
		},
		{
			name: "stopbeingsheep",
			text:
				"Thanks for making this, it replaced all my GM time in the 2k series. All. Of. It.",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1sarll/open_source/cdvusgz",
		},
		{
			name: "nocioniisgod",
			text: "well shit now I'm definitely not getting anything done ever lol",
			url:
				"https://www.reddit.com/comments/1pwuex/singleplayer_basketball_management_simulation/ce11r9l",
		},
		{
			name: "Mightymaas",
			text: "This is one of my favorite games of all time!",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1t1r62/bug_ive_never_been_able_to_play_through_a_season/ce66rpn",
		},
		{
			name: "spongebob951",
			text: "Game is very very very great love it.",
			url: "https://www.reddit.com/r/BasketballGM/comments/1v0asz/draft_class/",
		},
		{
			name: "hubertdavisfor3",
			text:
				"Lost about an hour of sleep last night playing this for the first time. Really impressed with the clean layout and how smoothly it runs overall.",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1v56z4/new_draft_scouting_features_are_live_in_all/cerbxd4",
		},
		{
			name: "I_I_I_I_",
			text:
				"I used to be stuck playing the NBA Live series or recently 2K for my GM fix. This really is a dream come true!",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1w4bcj/some_thoughts_after_the_first_week_of_playing/",
		},
		{
			name: "Cleis",
			text:
				"This game is GREAT - can't recommend it highly enough. I also highly recommend trading away all future picks for mid-talent veterans and going massively over the cap.",
			url:
				"https://www.reddit.com/comments/1zkszq/think_you_can_run_a_team_better_than_james_dolan/cfuvi87",
		},
		{
			name: "TaylorHammond9",
			text:
				"If you have any interest in either Basketball, or management games, I'd recommend this to anyone.",
			url:
				"https://www.reddit.com/comments/1zkszq/think_you_can_run_a_team_better_than_james_dolan/cfusc21",
		},
		{
			name: "YoItsTizzy",
			text: "This is so addicting lol my team sucks so bad but it's addicting.",
			url: "https://twitter.com/YoItsTizzy/status/461731870649372672",
		},
		{
			name: "KilgoreTrout",
			text: "Coolest thing ever...",
			url:
				"http://realcavsfans.com/showthread.php?40945-Chris-Grant-Cavaliers-GM&p=1714168&viewfull=1#post1714168",
		},
		{
			name: "_masterofdisaster",
			text: "Dude, you've created one hell of a game. 2K needs to take notes.",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/24lgq4/let_me_just_take_a_minute_to_praise_udumbmatter/",
		},
		{
			name: "Z2P",
			text:
				"I cannot thank you enough for making this game. I have spent numerous hours playing this game; it is one of the best web games I have ever played.",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/1xvanj/what_is_the_worst_roster_you_have_won_a/cffa0xs",
		},
		{
			name: "JoeJoe2119",
			text:
				"thank you (dont know if I should thank you because the game is very addictive, time killing) for this great game.",
			url: "https://www.reddit.com/r/BasketballGM/comments/1xr1iy/suggestions/",
		},
		{
			name: "logic863",
			text:
				"Trust me, soon you will find yourself at year 2289 and realize you have no life. I've done it several times.",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/2p0a8l/game_is_amazing/cms6xfj",
		},
	],
	football: [
		{
			name: "jordab7",
			text: "This game is good",
			url:
				"https://www.reddit.com/r/Football_GM/comments/bg3jg5/this_game_is_good/",
		},
		{
			name: "LordFirebeard",
			text: "Ooh, shiny!",
			url:
				"https://www.reddit.com/r/BasketballGM/comments/bfxjl0/early_beta_of_the_new_football_gm/elh75wc/",
		},
		{
			name: "dontellmymomimhere",
			text:
				"Every time you post an improvement, I can't help but tell myself to play 1 game. Then it's 4 seasons later and I remember I'm supposed to be working.",
			url:
				"https://www.reddit.com/r/Football_GM/comments/hogban/recent_development_some_small_improvements/fxj23tu/",
		},
		{
			name: "notjuneau",
			text:
				"This is honestly my favorite game ever. It is always there for me on my desktop and I love every moment playing on it.",
			url:
				"https://www.reddit.com/r/Football_GM/comments/gamykl/football_gm_how_it_changed_my_life/fp2fhas/",
		},
		{
			name: "omnishant",
			text: "This is amazing. I love it.",
			url:
				"https://www.reddit.com/r/Football_GM/comments/dz84f8/new_in_version_201911201248_team_ratings_and/f86cjan/",
		},
		{
			name: "RELAXNMAXN",
			text:
				"Randomly stumbling across this game a little while ago has been the best thing that has happened to me.",
			url:
				"https://www.reddit.com/r/Football_GM/comments/fqdxsl/genuinely_love_this_site/",
		},
		{
			name: "WhyNotHoiberg",
			text: "Love the game. Play it all the time.",
			url:
				"https://www.reddit.com/r/nfl/comments/ct3eph/im_dumbmatter_creator_of_football_gm_a_free/exicesf/",
		},
	],
	hockey: [
		{
			name: "ycptank",
			text:
				"I’ve only ever watched football and basketball and soccer but this game made me start watching hockey.",
			url:
				"https://www.reddit.com/r/ZenGMHockey/comments/m9inrx/some_updates_in_version_202103201385/grna043/",
		},
		{
			name: "aocxp068",
			text: "Holy fuck this game is so good now",
			url:
				"https://www.reddit.com/r/ZenGMHockey/comments/lxmuux/holy_fuck_this_game_is_so_good_now/",
		},
		{
			name: "kevinmac1120",
			text: "I love this game.",
			url:
				"https://www.reddit.com/r/ZenGMHockey/comments/m86nhf/draft_order_now_matches_the_nflnhl_in_football_gm/grg14qc/",
		},
		{
			name: "GiantPebble403",
			text: "This is awesome!",
			url:
				"https://www.reddit.com/r/ZenGMHockey/comments/lw79il/oh_shit_new_zengm_hockey_out_now_the_past_6_years/gpfp6pc/",
		},
		{
			name: "ClevelandFan",
			text:
				"Overall, I think it’s one of the best sports simulators I’ve come across, not just hockey.",
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
