const bySport = require("../../../util/bySport");
const base = require("../../base");

module.exports = class {
	data() {
		return {
			...base("js"),
			title: "Players Customization",
			parent: "customization",
		};
	}

	render({ ratingKeys, sport }) {
		const ratings = ratingKeys.map(key => `"${key}": 50`).join(",\n          ");

		const ratingDescriptions = bySport(
			{
				baseball: {
					hgt: "height, which impacts defense some",
					spd: "speed, which affects baserunning and defense",
					hpw: "hitting power",
					con: "contact hitting",
					eye: "eye, determines how good a batter is at identifying balls and strikes",
					gnd: "ground ball defense",
					fly: "fly ball defense",
					thr: "throwing strength",
					cat: "catcher defense",
					ppw: "pitching power",
					ctl: "pitching control",
					mov: "pitching movement",
					endu: "pitching endurance",
				},
				basketball: {
					hgt: `height, which factors into pretty much everything - this is meant to also reflect things like standing reach and wingspan, and it is used in game simulations rather than the player's "true" height in feet/inches. For a realistic professional basketball league, take the player's height in inches, subtract 66, and multiply by 3.70. Then maybe add or subtract a little based on wingspan. This means 0 is 5'6" and 100 is 7'9" (with a little wiggle room for wingspan).`,
					stre: "strength, which influences defense, rebounding, and low post scoring",
					spd: "speed, which influences ball handling, fast breaking, and defense",
					jmp: "jumping, which influences finishing at the rim, rebounding, blocking shots, and defense",
					endu: "endurance, which governs how fast a player's skills degrade as he gets tired",
					ins: "low post scoring",
					dnk: "dunking/layups",
					ft: "free throw shooting",
					fg: "2 point jump shot ability",
					tp: "3 point shooting",
					oiq: "offensive IQ (affects many aspects of offense)",
					diq: "defensive IQ (affects many aspects of defense)",
					drb: "dribbling (also influences passing, since you can pass easier if you're not worried about losing the ball)",
					pss: "passing",
					reb: "rebounding",
				},
				football: {
					hgt: "height. Ranges from 5'4\" (0) to 6'10\" (100).",
					stre: "strength",
					spd: "speed",
					endu: "endurance",
					thv: "throwing vision",
					thp: "throwing power",
					tha: "throwing accuracy",
					bsc: "ball security",
					elu: "elusiveness (avoiding tackles as an offensive player)",
					rtr: "route running",
					hnd: "hands (affects offensive players receiving ability)",
					rbk: "run bloocking",
					pbk: "pass blocking",
					pcv: "pass coverage",
					tck: "tackling",
					prs: "pass rushing",
					rns: "run stopping",
					kpw: "kicking power",
					kac: "kicking accuracy",
					ppw: "punting power",
					pac: "punting accuracy",
				},
				hockey: {
					hgt: "height. Ranges from 5'4\" (0) to 6'10\" (100).",
					stre: "strength. Influences many parts of the game, particularly defense.",
					spd: "speed. Influences many parts of the game, particularly scoring and playmaking.",
					endu: "endurance. Governs how fast a player's skills degrade as he gets tired (does not apply to goalies).",
					pss: "passing. Increases the quality of shots that teammates get.",
					wst: "wristshot",
					sst: "slapshot",
					stk: "stickhandling. Influences many parts of the game, particularly scoring and playmaking.",
					oiq: "offensive IQ. Influences all offensive parts of the game.",
					chk: "checking. When a player is hit, his fatigue goes up and his performance goes down.",
					blk: "shot blocking",
					fcf: "faceoffs",
					diq: "defensive IQ. Influences all defensive parts of the game.",
					glk: "goalkeeping. This is the only rating that matters for goalies currently.",
				},
			},
			sport,
		);

		const ratingDescriptionsText = Object.entries(ratingDescriptions)
			.map(
				([key, description]) => `<li><code>${key}</code>: ${description}</li>`,
			)
			.join("");

		const numPlayersPerDraftClass = bySport(
			{
				baseball: 175,
				basketball: 70,
				football: 261,
				hockey: 149,
			},
			sport,
		);

		const minRosterSize = bySport(
			{
				baseball: 35,
				basketball: 10,
				football: 40,
				hockey: 24,
			},
			sport,
		);

		return `<p>
	If you haven't already, first read
	<a href="/${sport}/manual/customization/">the customization overview</a>.
</p>
<p>This is the simplest format to define players in a League File:</p>
<pre>
{
  "version": 43,
  "startingSeason": 2019,
  "players": [
    {
      "firstName": "Andrew",
      "lastName": "Phillips",
      "tid": 0,
      "ratings": [
        {
          ${ratings}
        }
      ]
    },
    {
      "firstName": "Heriberto",
      "lastName": "Braman",
      "tid": 0,
      "ratings": [
        {
          ${ratings}
        }
      ]
    },
    {
      "firstName": "Draft",
      "lastName": "Prospect",
      "tid": -2,
      "ratings": [
        {
          ${ratings}
        }
      ],
      "draft": {"year": 2020}
    }
  ]
}
</pre>
<p>Some things you might want to know:</p>
<p>tid is the team ID number, ranging from 0 to N (usually 30) for the teams in your league. Additionally,</p>
<ul>
	<li>-1 is for free agents</li>
	<li>-2 is for undrafted players</li>
	<li>-3 is for retired players</li>
</ul>
<p>
	If don't include a draft year, draft prospects will appear in the upcoming
	draft. If you want to specify multiple upcoming drafts, you need to use
	the <code>draft.year</code> property, like is done for Draft Prospect
	above. If you do this, make sure to also set
	<a href="/${sport}/manual/customization/game-attributes/"
		><code>startingSeason</code></a
	>, otherwise your draft classes will shift when the default starting
	season changes each year.
</p>
<p>
	If you specify less than ${numPlayersPerDraftClass} prospects in a draft class, random prospects
	will be created to reach that limit.
</p>

<p>
	In the example above, there are only two players defined. If your file
	doesn't include at least ${minRosterSize} players on each team, then bad things will
	happen when you try to use it. You should also include a good amount of
	bad/mediocre young players beyond the ${minRosterSize} man limit or as free agents (maybe
	30-60 in total). Otherwise, you might end up running out of free agents
	before the free agent pool naturally fills up with undrafted prospects and
	unsigned players, and then bad things will happen.
</p>
<p>
	Jersey numbers can be defined at the root of the player object like
	<code>"jerseyNumber": "25",</code>. For players with stats included, use the
	same property inside a stats object to override the jersey number for a
	specific season.
</p>
<p>
	${
		sport === "basketball"
			? "Ratings should be on a scale from 0 to 100 with a mean of about 50 and about half of the players between 35 and 65. "
			: ""
	}Descriptions of rating categories:
</p>
<ul>
	${ratingDescriptionsText}
</ul>
<p>
	It's best not to specify additional properties in the ratings object, like
	<code>ovr</code>, <code>pot</code>, <code>pos</code>, and
	<code>skills</code>. If you simply leave them out, then they will be
	auto-generated on import.
</p>
<p>
	You can optionally include a URL for an image to be used instead of a
	randomly-generated face by putting "imgURL":
	"http://www.example.com/img.jpg" in the root of a player object.
</p>
<p>
	There are several other pieces of information you can include, such as stats from previous seasons. Look in an exported League File from
	one of your leagues to see what else can be added.
</p>`;
	}
};
