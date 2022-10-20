const base = require("./base");
const bySport = require("../util/bySport");

module.exports = class FAQ {
	data() {
		return {
			...base("js"),
			title: "Frequently Asked Questions",
		};
	}

	render({ gameAcronym, gameName, sport, websitePlay }) {
		const androidAppURL = bySport(
			{
				baseball:
					"https://play.google.com/store/apps/details?id=com.zengm.baseball.twa",
				basketball:
					"https://play.google.com/store/apps/details?id=com.basketball_gm.play.twa",
				football:
					"https://play.google.com/store/apps/details?id=com.football_gm.play.twa",
				hockey:
					"https://play.google.com/store/apps/details?id=com.zengm.hockey.twa",
			},
			sport,
		);

		return `<h2><a href="#missing-leagues" name="missing-leagues">My leagues are gone! What happened?</a></h2>
<p>${gameName} stores all game data on your computer, in your browser profile. This means that you can't play one league on multiple devices unless you export it (from the Tools menu) and then create a new league with that file. So first, <b>make sure you're using the same browser on the same computer</b>. This is true even if you're logged into an account - league data is currently stored only locally, not in your account.</p>
<p>If you are using the same browser on the same computer and your leagues are missing, the game data has probably been deleted. This can happen in places like schools and libraries that set browsers to automatically delete everything when they are closed. It also happens if you manually delete your browser data. For example, in Chrome, if you go to More tools > Clear browsing data... > Cookies and other site data, that will delete all your ${gameName} data. <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=340821">This is true even if you tell it to only delete data from today - if you played ${gameName} at all today, it will completely delete all your leagues.</a></p>
<p>Browsers may also delete data if disk space is running low. I've never seen this happen on a desktop/laptop, but it does sometimes happen on mobile browsers, especially on iPhones. To minimize the chance of this happening, you can:</p>
<ul>
	<li>Go to <a href="${websitePlay}settings">the global settings page</a> and enable Persistent Storage.</li>
	<li>If you're on Android, install the <a href="${androidAppURL}">${gameAcronym} app</a>. If you're on iOS, <a href="#a2hs">add it to your home screen</a>.</li>
	<li>Make a backup of a league at Tools > Export League</li>
</ul>
<p>In cases where the data has been deleted from your browser profile, the only way to get it back is if you have a backup. Sorry :(</p>
<p class="text-highlight">Followup: Why is this a problem for ${gameName} but not for most other games?</b></p>
<p>Most other games don't have this problem of browsers deleting data because most games don't store their data inside the browser itself. So why does ${gameName} different? There are tradeoffs.</p>
<p>The current method has some big advantages. Since the data is stored on your computer rather than on my server, my server costs are extremely low, which is what allows me to make this game free and unlimited. But still, you may think of other purely local apps that don't have this data loss problem. ${gameName} is different because it runs in a web browser. A normal game you install from Steam or a mobile app store stores controls how it stores data on your hard drive, but ${gameAcronym} does not really control its own data, the web browser does. So why not make ${gameAcronym} a "normal game"? Two reasons. First, it's really nice to just be able to type a URL into your browser and start playing immediately, without installing anything. That even lets you play on devices where you are not allowed to install apps. And second, it's really nice that a web game runs on any device. As a solo developer, it'd be a lot of work to make separate UIs of the game for iOS, Android, Windows, Mac, Linux, etc.</p>
<p>So basically - it's all tradeoffs. I hope in the future web browsers have ways to more robustly store local data, to better support apps like ${gameName}. The "Persistent Storage" option mentioned above is supposed to be that, but it doesn't always work.</p>

<hr>

<h2><a href="#two-computers" name="two-computers">How can I play the same league on two computers?</a></h2>
<p>Currently there's no easy way to do this, but it is possible.</p>
<p>You can export a league (Tools > Export League), copy the file to your other computer, and then create a new league using that file.</p>

<hr>

<h2><a href="#latest-version" name="latest-version">How do I make sure I'm running the latest version of the game?</a></h2>
<p>Sometimes your browser can get stuck on an old version of ${gameName}. Here are a few things you can try to force an upgrade.</p>
<p><b>Method 1:</b> Open ${gameName} in a single tab in your web browser. Do a hard refresh (ctrl+shift+r, or ctrl+cmd+r on a Mac). If that didn't work, try again with your browser dev tools open (ctrl+shift+i, or ctrl+cmd+i on a Mac).</p>
<p><b>Method 2:</b> Close all tabs with ${gameName} open and then open ${gameName} again. Or restart your browser. If this doesn't work the first time, try again.</p>
<p><b>Method 3:</b> Try manually emptying your cache. In Chrome, from the main menu go to "More tools" > "Clear browsing data". Make sure you select "Cached images and files" and <i>do not select</i> "Cookies and other site data" because "other site data" is where ${gameName} stores all your leagues. Then try closing all open tabs with ${gameName} and opening it again, like above.</p>
<p><b>Method 4:</b> Open ${gameName} in a single tab in your web browser. Open your browser dev tools (ctrl+shift+i, or ctrl+cmd+i on a Mac). At the top of dev tools panel, click "Application" (if it's too narrow to see, you might have to click the >> to see it) and then click "Service Workers" on the left:</p>
<figure><img src="/files/delete-sw-1.png" class="img-fluid"></figure>
<p>Then click "Unregister" to the right of ${websitePlay}:</p>
<figure><img src="/files/delete-sw-2.png" class="img-fluid"></figure>
<p>Finally, reload ${gameName} and hopefully you will see the latest version.</p>

<hr>

<h2><a href="#app" name="app">Can you make ${gameName} into an app for my phone?</a></h2>
<p>${gameName} is now available for Android <a href="${androidAppURL}">in the Google Play Store</a>. But it's no different than playing the game in your mobile browser, which works fine on iOS too.</p>
<p class="text-highlight">Followup 1: Can you release an app for iOS (iPhone or iPad) similar to the Android app?</b></p>
<p>Maybe some day, but Apple makes it a lot harder to do than Google, so I'm not exactly eager to do it. Also, like I said above, it wouldn't actually make the game any better than just using your mobile browser.</p>
<a name="a2hs"></a>
<p>But what if you just want it to look and feel a little more app-like? You can do that on iOS today, by following these steps:</p>
<ol>
  <li><p>Open <a href="${websitePlay}">${websitePlay}</a> in Safari.</p></li>
  <li><p>Tap the icon featuring a right-pointing arrow coming out of a box along the top of the Safari window to open a drop-down menu.</p></li>
  <li><p>Tap "Add to Home Screen." The Add to Home dialog box will appear, with the icon that will be used for this website on the left side of the dialog box.</p></li>
  <li><p>Enter the name for the shortcut using the on-screen keyboard and tap "Add". Safari will close automatically and you will be taken to where the icon is located on your desktop.</p></li>
</ol>
<p>(You can also do a similar thing on Android, by going to your browser's menu and tapping "Add to homescreen"... or you could just <a href="${androidAppURL}">install the Android app</a>!)
<p class="text-highlight">Followup 2: Can you make a better mobile app? Like a native app designed specifically for small screens?</b></p>
<p>${gameName} already runs on your phone, in your mobile web browser. I know the UI is not perfect, but I am working on it and it has improved over the years. This is going to continue.</p>
<p>Making a separate native app with a very different UI than the current web app - that is not going to happen any time soon. I'm just one guy working on this project, and it'd be too much work to maintain multiple different UIs for the game at the same time. That's the beauty of the web version, it runs on any device.</p>
<p>If you notice something specific about the mobile UI that you think should be improved, <a href="/contact/">please let me know</a>!</p>

<hr>

<h2><a href="#pt" name="pt">If I give a player more playing time, will he improve faster?</a></h2>
<p>No. I'm not convinced that playing time really matters for player development.</p>
<p>It's a chicken and egg problem. Do good young players get more playing time because they're already good? Or do young players become good if they get more playing time? It's obvious that the first scenario happens. But is it obvious that the second scenario happens? I haven't seen any convincing evidence that it does${
			sport === "basketball"
				? ', and there is <a href="https://twitter.com/nicidob/status/1152411949059256320">some evidence that it doesn\'t</a>'
				: ""
		}.</p>
<p>I know that's not really a fair argument, because it could be that it's a real effect that is just hard to see in the stats we have available. But if it's hard to see in the stats we have available, does it matter for a game like ${gameName}? Because if it's so difficult to notice in reality, it'd be equally difficult to notice in ${gameName}.</p>
<p>I can make a counterargument, though. ${gameName} is a video game. Its primary purpose is to be fun, not to be realistic. So maybe it'd be fun to give unrealistically large bonuses to young players who get a lot of playing time. I don't know. It could be fun. But I also very much like to keep things simple, so I err on the side of simplicity. And doing nothing is very simple.</p>
<p>I also am aware that I could be wrong. Maybe there is a convincing, data-driven argument that playing time leads to quantifiable improvement. If so, <a href="/contact/">please let me know</a>!</p>

<hr>

<h2><a href="#other-sport" name="other-sport">Can you make another sport like soccer, or college sports?</a></h2>
<p>I am very bad at planning, so I'm not going to commit to any timeline. But I would like to do other games.</p>
<p>Now that I've done the 4 major American sports, there's no more low hanging fruit, since other pro sports tend to have different types of leagues. For example, consider soccer. There's multiple competing leagues, cross-league tournaments, buying/selling players, relegation... a soccer management game would be a little unsatisfying without all those features.</p>
<p>College sports would also be fun to do, and could be my next "big" project, although I'm not exactly sure when. There's also a lot I could do to improve the existing games.</p>

<hr>

<h2><a href="#ovr-ratings" name="ovr-ratings">Why are ovr ratings different than other games like 2k or Madden?</a></h2>
<p>Many games, including mine, use a 0-100 rating system. However that doesn't mean they are the same scale. ${gameName} generally has lower ovr ratings than other games, so 90+ ovr players will be quite rare. You can see the breakdown of how good players at different ovr ratings are in <a href="/${sport}/manual/#player-ratings">the manual</a>.</p>
<p>Is this a good thing? My thought process was that if the scale is 0-100, I might as well try to use all of it. If 100 rated players are common, what happens when there is someone even better? On the other hand, maybe I should have made my ratings more similar to other games just for familiarity? I don't know. Actually I think a better system would be unbounded, so average rating would be 0 and players could go above/below that any amount. But that might be too big a change for me to make in my games at this point.</p>

<hr>

<h2><a href="#contracts" name="contracts">Why are contracts in ${gameName} so simple?</a></h2>
<p>Contracts in ${gameName} are indeed quite simple. They pay the same amount every season, they are all fully guaranteed with no player/team options, there are no restricted free agents, special salary cap exceptions are mostly not present, etc.</p>
<p>That's certainly unrealistic. I completely understand people who wish that every little contract rule from the real world was included. But I am wary of making the contract system too complicated. Sometimes there is a tradeoff between complexity and fun, and for me personally when I'm playing a game like this, I don't want to have to worry about the ever-changing ridiculously complex contract rules that pro leagues have.</p>
<p>Maybe some day I will include some of that stuff as options. But that's easier said than done, for something as central to the game as contracts. The AI would need to be smart enough to handle all possible combinations of settings, and the AI struggles enough already!</p>

${
	sport === "hockey"
		? `
<hr>

<h2><a href="#hockey-gm" name="hockey-gm">Why is it called "ZenGM Hockey" rather than "Hockey GM"?</a></h2>
<p>Because <a href="https://hockey-gm.com/">Hockey GM</a> is already another game from Finland. If you speak Finnish, give it a try!</p>
`
		: ""
}

${
	sport === "basketball"
		? `
<hr>

<h2><a href="#real-draft-classes" name="real-draft-classes">Why are some draft prospects missing or in the wrong draft class in real players leagues?</a></h2>
<p>Historical real players rosters only include players who actually have stats, because stats are what's used to determine ratings. Some players without stats may be in the game, but those are manually added. Feel free to <a href="/contact/">request more</a>, if you want!</p>
<p>Another problem with real players rosters is that sometimes players appear in the wrong draft class. This happens because ${gameName} does not support the concept of "a player's rights are owned by a team, but he's not actually on the team this season". So things like a player being drafted in 2004 but playing in another pro league for a few years before his rookie season in 2007... ${gameName} has no good way to represent that. Until I fix that, there are only bad options, such as:</p>
<ol>
<li><p>Put those players on the roster of the team that owns their rights. That's bad for a number of reasons: it's hard to figure out who owns the rights to all prospects at all times; he would either play too early, or have to be marked as injured for a long time; and if he was injured and not playing, the team would still have to pay his salary.</p></li>
<li><p>Make those players free agents that anyone can sign, and maybe mark them as injured for a long time too.</p></li>
<li><p>Move those players to the draft class right before their rookie season.</p></li>
</ol>
<p>I think that last option is the least bad, so that's what I did.</p>
<p>This should only apply to players who were not on the team at all. For players who did join a team after the draft but spent the whole year injured or on the bench, those players should be included in the correct draft class. However sometimes it's hard to distinguish between these scenarios, so if you notice someone like that being moved to a later draft class, please <a href="/contact/">let me know</a>.</p>

<hr>

<h2><a href="#real-contracts" name="real-contracts">Why are contracts inaccurate in real players leagues?</a></h2>
<p>Two main reasons:</p>
<ol>
<li><p>${gameName} doesn't have various things like player/team options and contracts with different $ each season, so some compromise must be made when representing real contracts in ${gameName}. For more details about this, see <a href="#contracts" name="contracts">Why are contracts in ${gameName} so simple?</a></p></li>
<li><p>The contract data I have just has what players are paid each season, not start/end dates of contracts. So I wrote some code to try to guess the start/end dates based on contract length and when there are big jumps in contract value, but it cannot accurately detect when players re-sign to similar contracts. Which happens a lot, especially for max contract players.</p></li>
</ol>
<p>At some point I'd like to create a better historical contract database, maybe by crowdsourcing and letting you guys help me do it :)</p>

<hr>

<h2><a href="#real-ratings-weird" name="real-ratings-weird">In real player leagues, why is Player X rated higher than Player Y, when I know that Player Y is much better in real life?</a></h2>
<p>Sometimes the answer is that the ratings just suck and need to be adjusted. But usually, that's not the answer, or at least not the main answer.</p>
<p>The main answer is that, sadly, the basketball simulation algorithm in BBGM is not identical to real basketball. Certain types of players may be overvalued or undervalued in BBGM. Or certain stats might be easier or harder to accumulate in BBGM. Ultimately I do want to fix these issues and make BBGM more realistic, but it'll never be perfect.</p>
<p>When this situation happens and it's hard to set good ratings for a player, there are two options. You can set the ratings such that player performance (stats) matches reality as best possible. Or you can set the ratings such that the ratings seem to make sense if you look at them without stats, for example making the list of top players sorted by "ovr" be similar to how people rank players in real life.</p>
<p>In an unfortunate situation like that, where you are forced to make a player either have unrealistic stats or have unrealistic ratings, I think it's better to have unrealistic ratings. I understand some people disagree with that, and if you do, you are free to make your own ratings! Just don't be surprised if players start putting up weird stats :)</p>
`
		: ""
}

${
	sport === "baseball"
		? `
<hr>

<h2><a href="#war" name="war">How is WAR calculated?</a></h2>
<p>In general, WAR is more of a concept than a specific formula. Fangraphs and Baseball Reference both have their own formulas for WAR which are not exactly the same. And neither one of them fully publish the details of their formulas, which are quite complicated. Because of that, I use a less well-known but simpler method of calculating WAR that is fully specified in <a href="https://scholarship.shu.edu/locus/vol3/iss1/7/">this paper</a>, which includes formulas for all the WAR components you see in the advanced stats table:</p>
<ul>
<li>Rbat: batting runs</li>
<li>Rbr: baserunning runs</li>
<li>Rfld: fielding runs</li>
<li>Rpos: positional adjustment runs</li>
<li>Rpit: pitching runs saved</li>
</ul>
<p>Add those up and you get RAA (runs above average). Scale that based on how many runs are scored per game and you get WAA (wins above average). To compare against replacement level rather than average, also add in Rrep (runs from replacement level) and then you have RAR (runs above replacement). Scaling that by runs scored gives WAR (wins above replacement).</p>
`
		: ""
}`;
	}
};
