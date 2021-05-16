const bySport = require("../../../util/bySport");
const base = require("../../base");

module.exports = class {
	data() {
		return {
			...base("js"),
			title: "Teams Customization",
			parent: "customization",
		};
	}

	render({ gameName, subredditName, sport, websitePlay }) {
		const defaultStadiumCapacity = bySport(
			{
				basketball: 25000,
				football: 70000,
				hockey: 17500,
			},
			sport,
		);

		return `<p>
	If you haven't already, first read
	<a href="/${sport}/manual/customization/">the customization overview</a>.
</p>
<p>This is the simplest format to define teams in a League File:</p>
<pre>
{
  "version": 43,
  "teams": [
    {
      "tid": 0,
      "cid": 0,
      "did": 0,
      "region": "Atlanta",
      "name": "Gold Club",
      "abbrev": "ATL",
      "pop": 5.3,
      "stadiumCapacity": ${defaultStadiumCapacity}
    },
    ...
  ]
}
</pre>
<p>
	The contents of each team object is as follows.
</p>
<ul>
	<li>
		"tid": team ID number (from 0 to N-1 so there are N teams in total, usually
		N is 30)
	</li>
	<li>"cid": conference ID number, either 0 (Eastern) or 1 (Western)</li>
	<li>
		"did": division ID number, from 0 to 5 for the Atlantic, Central, Southeast,
		Southwest, Northwest, and Pacific divisions, respectively
	</li>
	<li>"region": team region/city</li>
	<li>"name": team name</li>
	<li>
		"abbrev": team abbreviation, typically 3 upper case letters like ATL for
		Atlanta
	</li>
	<li>"pop": population of the region, in millions of people</li>
	<li>
		"stadiumCapacity": number of people who fit in the team's stadium (default
		${defaultStadiumCapacity}) - weird things might happen financially if you start tweaking this
	</li>
	<li>
		"imgURL": URL for a 256x256 team logo. If your logo is not square or is a different size, that's okay, it will be scaled. (Optional)
	</li>
	<li>
		"imgURLSmall": URL for a 160x160 small team logo, which you can specify in addition to imgURL if you want a different versions of the logo when it is displayed large and small. (Optional, and imgURL will be used if you don't specify imgURLSmall.)
	</li>
</ul>
<p>
	It is also possible to specify much more information, including results from
	past seasons and team statistics. To see how those are defined, look at an
	exported League File from one of your leagues. Also note that for values that
	can change over time (basically everything except "tid"), values are also stored
	in the "seasons" array for each team, one for each season.
</p>
<p>
	${gameName} works best with ${bySport(
			{
				basketball: "30 teams, 15 in each conference, and 5 in each division",
				football: "32 teams, 16 in each conference, and 4 in each division",
				hockey: "32 teams, 16 in each conference, and 8 in each division",
			},
			sport,
		)}. If you have more or less teams, it will still work, but generated
	schedules (and maybe some other aspects of the game) will be less balanced.
</p>
<p>
	If you also want to change the number of conferences or divisions,
	<a href="/${sport}/manual/customization/game-attributes/#confs-divs">read this</a>.
</p>`;
	}
};
