const bySport = require("../../../util/bySport");
const base = require("../../base");

module.exports = class {
	data() {
		return {
			...base("md"),
			title: "Schedule Settings",
			parent: "customization",
		};
	}

	render({ gameName, proLeagueAbbrev, sport }) {
		return `There are three settings that allow you to control how the regular season schedule is generated:
        
* \\# Games Per Season (\`numGames\`) - total number of games
* \\# Division Games (\`numGamesDiv\`) - games against teams in the same division
* \\# Conference Games (\`numGamesConf\`) - games against teams in the same conference but different division

So games against teams in other conferences is \`numGames - numGamesDiv - numGamesConf\`.

If you don't care about division/conference games, you can leave those settings blank (or \`null\` in a JSON file) and those constraints will be ignored - division games will be counted as conference games if "# Division Games" is blank, and conference games will be counted as total games if "# Conference Games" is blank. If both of those settings are blank, then it's basically just round robin matchups between all teams.

There is a downside to all this, though: <span class="text-highlight">the schedule generator kind of sucks</span>.

Depending on the number of teams in your league, how they're split across divisions and conferences, and the "# Games", "# Games Division", and "# Games Conference" settings, sometimes it gets stuck trying to come up with a good schedule. In that case, it ignores the "# Games Division/Conference" settings, resulting in round robin matchups like described above.

Some situations where that can happen currently:

1. Cases where the number of teams and number of games don't add up quite right. Like if you have 3 teams in a division and you want each team to have one division game, that's not possible to do exactly, some team needs to either have 2 or 0. The schedule generator tries to handle this and at least give you something close to your settings, but sometimes does not succeed.

2. Unbalanced confs/divs generally don't work. By default, each conference has the same number of divisions and each division has the same number of teams. When that's not true, the schedule generator usually does not work.

None of that is absolute. For instance, a college-like schedule (many different conferences each with 1 division, each conference is a different size, \`numGamesDiv\` is large, and \`numGamesConf\` is \`null\`) does work.

But overall, those limitations are pretty bad, because those are situations that arise fairly commonly. So why even release this feature in such a bad state? Because it's pretty damn hard to get everything working right; it's still better than how things were before (it gives you a pretty good amount of flexibility, assuming balanced confs/divs and even numbers of games); and hopefully all the people who don't read this and complain to me about the stuff I explained above will motivate me to eventually do better :)`;
	}
};
