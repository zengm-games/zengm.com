const bySport = require("../../util/bySport");
const base = require("../base");

module.exports = class {
	data() {
		return {
			...base("md"),
			title: "Player Mood",
			parent: "manual",
		};
	}

	render({ gameName, sport }) {
		return `Player mood only affects contract negotiation. Both the probability that a player will negotiate with you, and the amount of money he asks for. There is no "team chemistry" or "player is upset so he plays worse"... yet :)

You can see a player's mood in many places, such as on the roster page or on player profile pages. Player mood looks like this:

<figure><img src="/files/mood-1.png" class="img-fluid"></figure>

There are 3 things you see from left to right: mood score, mood traits, and probability they will be willing to re-sign.

The **probability they will be willing to re-sign** is based on a player's current mood score and how good the player is (better players can be more choosy). It is a representation of their current state, not a projection of what they might think when their contract actually expires. So for a player with some time left on his deal, this number can change.

**Mood traits** give players a little bit of personality by altering how important different factors are in their mood score. There are 4 possible values:

- Fame (F) - Player prefers a large market, an engaged fan base, and lots of playing time.

- Loyalty (L) - Player wants to stay in one place for a long time, doesn't care much about market size, and doesn't like to see you trade away too many of his teammates.

- Money ($) - Market size and team success are not very important, but nice team facilities give a little boost. Least likely trait to refuse to negotiate.

- Winning (W) - Team success matters a lot. Willing to accept less playing time and a small market.

Mood traits are "all or nothing" - every player with the "Money ($)" trait gets the same adjustment to his mood score. There are no partial traits. Additionally, mood traits do not change over time, although you can edit them in the player editor in God Mode. You can also completely disable mood traits in the God Mode options.

If you click the mood button, you see a popup with more detail, including the individual components that sum up to the overall **mood score**:

<figure><img src="/files/mood-2.png" class="img-fluid"></figure>

Currently these components are:

- Market size - players generally prefer bigger markets.

- Facilities - based on your facilities spending over the past 3 seasons.

- Team performance - regular season and playoff success.

- Hype - viewable from the Team Finances page, this is how excited your fans are.

- Loyalty - players who have been on your team for multiple seasons might be loyal to your franchise.

- Trades - if you trade away good players, players will look at that negatively. Trading away bad players or prospects matters much less.

${bySport(
	{
		basketball:
			"- Playing time - players want to play, so if a player doesn't get enough minutes (either due to tanking or because the team has too many other good players), he will be annoyed.",
		default: "",
	},
	sport,
)}

- Rookie contract - players on rookie contracts are eager to sign their next contract.${bySport(
			{
				basketball:
					" This gives BBGM something like the NBA's restricted free agency, because it results in your drafted players being less likely to refuse to re-sign.",
				football: ` This only applies if you have the \"hard cap\" option disabled so rookies are automatically given contracts. In ${gameName} this option is disabled by default.`,
				hockey: ` This only applies if you have the \"hard cap\" option disabled so rookies are automatically given contracts. In ${gameName} this option is disabled by default.`,
			},
			sport,
		)}`;
	}
};
