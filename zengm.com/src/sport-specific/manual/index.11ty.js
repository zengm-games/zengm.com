const bySport = require("../../util/bySport");
const base = require("../base");

module.exports = class {
	data() {
		return {
			...base("js"),
			title: "Manual",
		};
	}

	render({ gameName, proLeagueAbbrev, sport, websitePlay }) {
		const skills = bySport(
			{
				basketball: {
					3: "Three Point Shooter",
					S: "Scorer",
					A: "Athlete",
					B: "Ball Handler",
					Di: "Interior Defender",
					Dp: "Perimeter Defender",
					Po: "Post Scorer",
					Ps: "Passer",
					R: "Rebounder",
					V: "Volume Scorer",
				},
				football: {
					Pa: "Accurate Passer",
					Pd: "Deep Passer",
					Ps: "Smart Passer",
					A: "Athletic",
					X: "Explosive Runner",
					H: "Hands",
					Bp: "Pass Blocker",
					Br: "Run Blocker",
					PR: "Pass Rusher",
					RS: "Run Stopper",
					L: "Lockdown Coverage",
				},
				hockey: {
					Pm: "Playmaker",
					Pw: "Power",
					G: "Grinder",
					E: "Enforcer",
					S: "Sniper",
				},
			},
			sport,
		);

		return `<p>${gameName} is a completely free sports management simulation game. You are the general manager of a ${sport} team, tasked with building your roster to compete for a championship while managing your finances. As of now, your goal can be whatever you want: winning the most championships, making the most profit, developing players from rookies to stars, etc. You can make an unlimited number of different leagues from <a href="${websitePlay}">the dashboard</a>, each one with a different set of random players.</p>
<h2>User Interface</h2>
<p>From within a league, the most important user interface element is the Play Menu, which you can access with the big green Play button at the top of the screen. Any context-dependent action, like playing a game or moving from one phase to another, is done from the Play Menu. Everything else about the user interface should (hopefully) be self-explanitory.</p>
<h2>Gameplay Overview</h2>
<p>Each season of the game is divided into several phases:</p>
<ul>
<li><b>Preseason.</b> Players develop/age (<i>i.e.</i> their ratings change). Young players tend to get better, old players tend to get worse.</li>
<li><b>Regular season.</b> Regular season games are played, at the pace you choose through the Play menu.</li>
<li><b>Playoffs.</b> Teams that made the playoffs ${bySport(
			{
				basketball:
					"(top 8 in each conference) progress through the bracket playing best-of-7 series until a champion emerges",
				football: "progress through the bracket until a champion emerges",
				hockey: "progress through the bracket until a champion emerges",
			},
			sport,
		)}.</li>
${bySport(
	{
		basketball:
			"<li><b>Draft lottery.</b> After the playoffs end, the draft order is set with a lottery.</li>",
		football: "",
		hockey:
			"<li><b>Draft lottery.</b> After the playoffs end, the draft order is set with a lottery.</li>",
	},
	sport,
)}
<li><b>Draft.</b> Teams pick players to add to their rosters from all the young players entering the league.</li>
<li><b>Re-sign players.</b> Before free agency starts, you get the opportunity to re-sign your players with expiring contracts. Some players may refuse to re-sign, based on your team success, facilities spending, city size, and difficulty.</li>
<li><b>Free agency.</b> Players who are not re-signed become free agents and teams can sign them.</li>
</ul>
<h2>League Rules</h2>
<p>League rules are generally similar on the ${proLeagueAbbrev}, but simplified.</p>
<p>You can customize many of the league rules by going to Tools > God Mode within a league.</p>
<h3>Salary cap</h3>
${bySport(
	{
		basketball: `<p>The salary cap is $90 million. This is a soft cap, meaning that if you are over the salary cap, you can still:</p>
<ul>
<li>Draft players</li>
<li>Re-sign your current players (like the <a href="http://en.wikipedia.org/wiki/NBA_salary_cap#Larry_Bird_exception">Bird exception</a>)</li>
<li>Sign free agents to minimum contracts ($750k)</li>
</ul>
<p>If you are above the "luxury tax limit" ($100M by default), you have to pay a luxury tax penalty equal to 150% of your excess spending. This is based on your payroll at the end of the year, so you have until the trade deadline to get under the limit.</p>
<p>There is also a minimum salary limit of $60 million. If you are below this limit, then you have to pay a penalty equal to the difference between your payroll and the limit.</p>`,
		football: `<p>The salary cap is $200 million. This is a hard cap, meaning that if you are over the salary cap, you cannot sign any more players. However, to make it so you don't get yourself stuck without a full roster, you are always allowed to sign free agents to minimum contracts ($500k)</p>
<p>There is also a minimum salary limit of $150 million. If you are below this limit, then you have to pay a penalty equal to the difference between your payroll and the limit.</p>`,
		hockey: `<p>The salary cap is $80 million. This is a hard cap, meaning that if you are over the salary cap, you cannot sign any more players. However, to make it so you don't get yourself stuck without a full roster, you are always allowed to sign free agents to minimum contracts ($500k)</p>
<p>There is also a minimum salary limit of $60 million. If you are below this limit, then you have to pay a penalty equal to the difference between your payroll and the limit.</p>
<p>There is currently no minor league, but the default roster size is larger than the NHL to allow you to keep prospects on your team while waiting for them to develop.</p>`,
	},
	sport,
)}
<h3>Contracts</h3>
<p>The maximum contract amount is $${bySport(
			{
				basketball: "30",
				football: "30",
				hockey: "13",
			},
			sport,
		)} million per year and the maximum contract length is 5 years.</p>
<p>The minimum contract amount is $${bySport(
			{
				basketball: "750",
				football: "500",
				hockey: "500",
			},
			sport,
		)} thousand per year and the minimum contract length is 1 year (or, until the end of the season, if the season is already in progress).</p>
<p>When a contract expires, you have the opportunity to negotiate a new contract with the player. If you don't come to an agreement, the player becomes a free agent.${
			sport === "basketball"
				? " This is important because, based on the salary cap rules, you can go over the cap to re-sign your own players but you can't go over the cap to sign a free agent."
				: ""
		}</p>
<p>Rookie contracts are not guaranteed until the regular season starts. That means if you release them (from the Roster page) before the regular season, you don't have to pay their contract. For all other players, contracts are fully guaranteed, and a contract still counts against your budget and your salary cap even after releasing a player.</p>
<p>Each player has <a href="/${sport}/manual/player-mood/">a combination of "mood traits" that influences how he views your team</a>. This influences contract negotiation, both the probability that a player will negotiate with you, and the amount of money he asks for.</p>
<h2>Player Ratings</h2>
${bySport(
	{
		basketball: `<p>Player ratings for a variety of categories (shooting, rebounding, passing, dribbling, etc.) are on a scale from 0-100. The whole scale is used, so a typical value for a rating is 50. Roughly, the overall ("ovr") player rating means:</p>
<ul>
<li><b>85+:</b> All-time great</li>
<li><b>75+:</b> MVP candidate</li>
<li><b>65+:</b> All League candidate</li>
<li><b>55+:</b> Starter</li>
<li><b>45+:</b> Role player</li>
<li><b>lower:</b> Bad player</li>
</ul>`,
		football: `<p>Player ratings are grouped into several different categories: physical, passing, rushing/receiving, blocking, defense, and kicking. Depending on a player's position, different ratings are more or less important.</p>
<p>Ratings are on a scale from 0-100. The whole scale is used, so a typical value for a rating is 50. Roughly, the overall ("ovr") player rating means:</p>
<ul>
<li><b>90+:</b> All-time great</li>
<li><b>80+:</b> MVP candidate</li>
<li><b>60+:</b> All League candidate</li>
<li><b>50+:</b> Starter</li>
<li><b>40+:</b> Backup and special teams</li>
<li><b>lower:</b> Bad player</li>
</ul>`,
		hockey: `<p>Player ratings for a variety of categories (stickhandling, checking, , etc.) are on a scale from 0-100. The whole scale is used, so a typical value for a rating is 50. Roughly, the overall ("ovr") player rating means:</p>
<ul>
<li><b>90+:</b> All-time great</li>
<li><b>80+:</b> MVP candidate</li>
<li><b>70+:</b> All League candidate</li>
<li><b>60+:</b> Starter</li>
<li><b>50+:</b> Role player</li>
<li><b>lower:</b> Bad player or prospect</li>
</ul>`,
	},
	sport,
)}
<p>However, the overall ratings aren't a guarantee of performance. The particular mix of ratings plays into success, as do a player's teammates${
			sport === "basketball"
				? " (<i>e.g.</i> a good rebounder doesn't help your team as much if you already have a few other good rebounders)"
				: ""
		}.</p>
<p>The potential ("pot") rating is also important. This is an estimate of the player's future overall rating. Just like in real life, most players never reach their potential, but some do reach it and some even exceed it. (Potential is calculated by simulating career arcs for a player and picking the 75th percentile ovr, so on average a player should exceed his pot 25% of the time.)</p>
<p>Also, you might notice that the height ("hgt") rating is not always proportional to the height in feet/inches of a player, because the hgt rating also includes wingspan and standing reach - basically how much a player's height/length impacts the game. The hgt rating is what's used in the simulations. The heights in feet/inches are just for show.</p>
<p>The displayed ratings are not the real ratings. They are estimates from your scouts. Increase the scouting budget to see more accurate ratings. This is a gradual effect over 3 seasons; you don't instantly see more accurate ratings by increasing spending.</p>
<p>Finally, little symbols you see next to a player's name like <span class="skills-alone">${Object.entries(
			skills,
		)
			.map(
				([skill, description]) =>
					`<span title="${description}" class="skill">${skill}</span>`,
			)
			.join(
				"",
			)}</span> represent the key skills a player has. This is designed so that you can just glance at a player and easily take in that information. It has no impact on gameplay. A player who barely misses getting a skill symbol will be about the same as a player who barely gets it.</p>
<p>To see what a symbol means, hover your mouse over it or consult this list:</p>
<ul>
${Object.entries(skills)
	.map(([skill, description]) => `<li>${skill}: ${description}</li>`)
	.join("")}
</ul>
${bySport(
	{
		basketball: "",
		football: `<h3>Depth Chart</h3>
<p>Go to Team > Depth Chart to see select which players to start at every position. You can do crazy things if you want, like starting 5 kickers as your offensive line. Just don't expect that to go well! You can also auto-sort your depth chart, which is the default setting.</p>
<p>Some extremely talented players will be good enough to contribute at multiple positions. For those players, you have to decide if that's worth the fatigue and injury risk that comes along with playing multiple positions.</p>`,
		hockey: `<h3>Lines</h3>
<p>Go to Team > Lines to see your lines. There are 4 lines of forwards (1 center and 2 wingers in each line) and 3 lines of defensemen (2 players in each line). Your top lines play the most, but all of your lines will play in every game, so depth is very important. Any skaters outside of your lines will only be used if there is an injury.</p>
<p>For goalies, typically only one goalie will play an entire game. However it is important to have depth at goalie too, because you backup goalie will play roughly 1/3 of the games in the regular season.</p>
<p>You can do crazy things if you want, like putting a goalie on as a forward. Just don't expect that to go well! You can also auto-sort your lines, which is the default setting.</p>`,
	},
	sport,
)}
<h2>Strategy</h2>
<p>There is no real way to "win" at ${gameName}. The game never ends. Your goal may be to win as many games as possible, or to make as much money as possible, or to draft a player and win him as many championships as possible, or anything else you can think of.</p>
<p>Regardless of your goal, you probably want to win some games. And there are also multiple ways to do that! Think of how ${proLeagueAbbrev} teams are run. Tanking is a viable strategy, but risky because your draft picks might be busts. Freeing up salary cap space to sign a big free agent can work, but if your team performance suffers too much, a star might not want to sign with you. Veterans can be available for cheap, but their abilities may decline rapidly. Ultimately, it's up to you to find the best strategy to meet your goals!</p>
<h2>Custom Rosters</h2>
${bySport(
	{
		basketball: `<p>In addition to the built-in real players rosters in the game, you can find some user made rosters on <a href="https://www.reddit.com/r/BasketballGM/">Reddit</a>. You can also make your own: <a href="/${sport}/manual/customization/">click here for more info about custom rosters.</a></p>`,
		football: `<p>By default, all players are completely randomly generated. You might be able to find some custom rosters people have made <a href="https://www.reddit.com/r/Football_GM/">on Reddit</a>. You can also make your own: <a href="/${sport}/manual/customization/">click here for more info about custom rosters.</a></p>`,
		hockey: `<p>By default, all players are completely randomly generated. You might be able to find some custom rosters people have made <a href="https://www.reddit.com/r/ZenGMHockey/">on Reddit</a>. You can also make your own: <a href="/${sport}/manual/customization/">click here for more info about custom rosters.</a></p>`,
	},
	sport,
)}
<h2>Advanced League Editing in the Worker Console</h2>
<p>You can use the JavaScript console in your browser to do pretty much anything. <a href="/${sport}/manual/worker-console/">Read this for more details.</a>
<h2>FAQ</h2>
<p><a href="/${sport}/faq/">Here are the answers to some frequently asked questions.</a></p>
<h2>Debugging</h2>
<p>If you run into a problem, please see <a href="/${sport}/manual/debugging">the debugging instructions</a> for more info.</p>
<h2>Still not sure about something?</h2>
<p>If you have a question or feedback <a href="/contact/">let us know</a>.</p>`;
	}
};
