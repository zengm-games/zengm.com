const base = require("../../base");

module.exports = class {
	data() {
		return {
			...base("md"),
			sports: ["basketball"],
			title: `Team and player data for "Real Players" leagues`,
			parent: "customization",
		};
	}

	render({ websitePlay }) {
		return `By default, leagues using real players do not include real team names, team logos, or player photos. If you would like to override the default values for those fields, you can do that on [the Basketball GM global settings](${websitePlay}settings) by specifying team and player data. This data will automatically be used for any future leagues you create with real players.

There are two things to customize in [the global settings](${websitePlay}settings), team info and player photos. In both cases, you need to copy/paste a JSON object containing the data into the form. You can find the data from other Basketball GM users who have shared it online. Or, you read below for how to make it from scratch.

## Team Info

[Here is a template for team info.](/files/team-info.json) Within that file, you see the default definitions for each team. For example:

\`\`\`
  "SYR": {
    "abbrev": "SYR",
    "colors": [
      "#bee6f6",
      "#ffe67b",
      "#3a3a3a"
    ],
    "jersey": "jersey3",
    "imgURL": "/img/logos/PHI.png",
    "name": "Cheesesteaks",
    "pop": 0.6,
    "region": "Syracuse"
  },
\`\`\`

If you want to edit it, **do not change that first "SYR"**. That's what BBGM uses internally to identify the team you're editing. It's the same three-letter abbrevation used by Basketball Reference to identify teams. But all the other things, including the "SYR" inside \`"abbrev": "SYR"\`, you can change.

If you'd like to leave some things set to their default values, you can just not include them in the file. For instance, just overriding Syracuse's name and logo:

\`\`\`
  "SYR": {
    "imgURL": "http://example.com/SYR-logo.png",
    "name": "New Name",
  },
\`\`\`

Additionally, if you don't care about overriding all of the teams, you do not have to include every team. A partial list of team infos will still get applied to all the teams it contains.

Setting one set of team info per abbreviation lets you change some team info over time. For instance, team relocation or renaming results in a new abbreviation in the file (e.g. MNL -> LAL). But if you want to change some info at a more specific time, such as a logo changing at a specific season, you can add an additional "seasons" property containing that information:

\`\`\`
  "SYR": {
    "imgURL": "Original logo URL, for when the franchise starts in 1949",
    seasons: {
      "1951": { imgURL: "New logo URL that applies in 1951" },
      "1957": { imgURL: "New logo URL that applies in 1957" }
    }
  },
\`\`\`

In this example I'm only changing the logo for Syracuse, but you can do the same thing for any of the properties shown above. And like mentioned above, it's best if you only include the fields that you're actually overriding.

## Player Photos

[Here is a template for player photos.](/files/player-photos.json) Within that file, you need to replace the text like "URL to photo of Some Guy (1995 draft class)" with a URL to a photo of that player.

This template file contains every player in BBGM, which currently goes back to 1956. If you only care about a subset of them, that's fine. You can delete the players you don't care about and only enter URLs for the remaining players.`;
	}
};
