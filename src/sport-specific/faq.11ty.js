const base = require("./base");
const bySport = require("../util/bySport");

module.exports = class FAQ {
	data() {
		return {
			...base("js"),
			title: "Frequently Asked Questions",
		};
	}

	render({ gameName, sport, websitePlay }) {
		const androidAppURL = bySport(
			{
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
<p>${gameName} stores all game data on your computer, in your browser profile. This means that you can't play one league on multiple devices unless you export it (from the Tools menu) and then create a new league with that file. So first, <b>make sure you're using the same browser on the same computer</b>.</p>
<p>If you are using the same browser on the same computer and your leagues are missing, the game data has probably been deleted. This can happen in places like schools and libraries that set browsers to automatically delete everything when they are closed. It also happens if you manually delete your browser data. For example, in Chrome, if you go to More tools > Clear browsing data... > Cookies and other site data, that will delete all your ${gameName} data. <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=340821">This is true even if you tell it to only delete data from today - if you played ${gameName} at all today, it will completely delete all your leagues.</a></p>
<p>Browsers may also delete data if disk space is running low. To minimize the chance of this happening, go to <a href="${websitePlay}settings">the global settings page</a> and enable Persistent Storage.</p>
<p>In cases where the data has been deleted from your browser profile, the only way to get it back is if you have a backup. Sorry :(</p>

<hr>

<h2><a href="#two-computers" name="two-computers">How can I play the same league on two computers?</a></h2>
<p>Currently there's no easy way to do this, but it is possible.</p>
<p>You can export a league (Tools > Export League), copy the file to your other computer, and then create a new league using that file.</p>

<hr>

<h2><a href="#latest-version" name="latest-version">How do I make sure I'm running the latest version of the game?</a></h2>
<p>Sometimes your browser can get stuck on an old version of ${gameName}. Here are a few things you can try to force an upgrade.</p>
<p><b>Method 1:</b> Open ${gameName} in a single tab in your web browser. Do a hard refresh (ctrl+shift+r, or ctrl+cmd+r on a Mac). If that didn't work, try again with your browser dev tools open (ctrl+shift+i, or ctrl+cmd+i on a Mac).</p>
<p><b>Method 2:</b> Close all tabs with ${gameName} open and then open ${gameName} again. Or restart your browser. If this doesn't work the first time, try again.</p>
<p><b>Method 3:</b>> Try manually emptying your cache. In Chrome, from the main menu go to "More tools" > "Clear browsing data". Make sure you select "Cached images and files" and <i>do not select</i> "Cookies and other site data" because "other site data" is where ${gameName} stores all your leagues. Then try closing all open tabs with ${gameName} and opening it again, like above.</p>
<p><b>Method 4:</b> Open ${gameName} in a single tab in your web browser. Open your browser dev tools (ctrl+shift+i, or ctrl+cmd+i on a Mac). At the top of dev tools panel, click "Application" (if it's too narrow to see, you might have to click the >> to see it) and then click "Service Workers" on the left:</p>
<figure><img src="/files/delete-sw-1.png" class="img-fluid"></figure>
<p>Then click "Unregister" to the right of ${websitePlay}:</p>
<figure><img src="/files/delete-sw-2.png" class="img-fluid"></figure>
<p>Finally, reload ${gameName} and hopefully you will see the latest version.</p>

<hr>

<h2><a href="#app" name="app">Can you make ${gameName} into an app for my phone?</a></h2>
<p>${gameName} is now available for Android <a href="${androidAppURL}">in the Google Play Store</a>. But it's no different than playing the game in your mobile browser.</p>
<p>I could imagine two separate followup questions:</p>
<p class="text-highlight">Followup 1: Can you release an app for iOS (iPhone or iPad) similar to the Android app?</b></p>
<p>Maybe some day, but Apple makes it a lot harder to do than Google, so I'm not exactly eager to do it. Also, like I said above, it wouldn't actually make the game any better than just using your mobile browser.</p>
<p>But what if you just want it to look and feel a little more app-like? You can do that on iOS today, by following these steps:</p>
<ol>
  <li><p>Open <a href="${websitePlay}">${websitePlay}</a> in Safari.</p></li>
  <li><p>Tap the icon featuring a right-pointing arrow coming out of a box along the top of the Safari window to open a drop-down menu.</p></li>
  <li><p>Tap "Add to Home Screen." The Add to Home dialog box will appear, with the icon that will be used for this website on the left side of the dialog box.</p></li>
  <li><p>Enter the name for the shortcut using the on-screen keyboard and tap "Add". Safari will close automatically and you will be taken to where the icon is located on your desktop.</p></li>
</ol>
<p>(You can also do a similar thing on Android, by going to your browser's menu and tapping "Add to homescreen"... or you could just <a href="${androidAppURL}">install the Android app</a>!)
<p class="text-highlight">Followup 2: Can you make a better mobile app? Like a native app designed specifically for small screens?</b></p>
<p>Not in the near future, for several reasons:</p>
<ol>
  <li><p>${gameName} already runs on your phone. Just use your browser. I know the interface is not perfect, but it does work.</p></li>
  <li><p>I'm just one guy working on this project. I think it'd be a bad idea for me to split my already limited resources over multiple separate codebases. Instead, I'm focused on making the web verison of ${gameName} as good as possible.</p></li>
  <li><p>It is possible to improve the mobile experience of ${gameName} without making an app. The mobile web version can be improved, and it will be improved. But given the above point, it'll take some time. Bear with me :)</p></li>
  <li><p>Finally, I'm not convinced that a tiny cell phone screen is a good place to play a sports management sim. This is a data-heavy game, and I think it's simply better on a laptop or desktop screen. So even if I made a super polished mobile app, I don't know if it would be as good as the current web version is on a computer.</p></li>
</ol>

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

<h2><a href="#other-sport" name="other-sport">Can you make another sport like baseball or soccer, or college sports?</a></h2>
<p>I am very bad at planning, so I'm not going to commit to any timeline. But I would like to do other games.</p>
<p>Most likely baseball would be the next sport, because pro baseball is pretty similar to pro basketball/football/hockey. Soccer would require a lot more work to really do it right, since pro soccer is pretty different. There's multiple competing leagues, cross-league tournaments, buying/selling players, relegation... a soccer management game would be a little unsatisfying without all those features.</p>
<p>College sports would also be fun to do.</p>
<p>Will the next new game be a college version of an existing sport, or a pro baseball game? I'm not sure. Like I said, I'm bad at planning. I also am not sure when any of this will happen. Which doesn't necessarily mean it will be a long time. It only took about 6 weeks from me deciding to make ZenGM Hockey to releasing it. There could be a similar timeline for my next game when I decide to start working on it.</p>

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

<h2><a href="#real-draft-classes" name="real-draft-classes">Why are some draft prospects missing or in the wrong draft class when using real players rosters?</a></h2>
<p>Historical real players rosters only include players who actually have stats, because stats are what's used to determine ratings. Some players without stats may be in the game, but those are manually added. Feel free to <a href="/contact/">request more</a>, if you want!</p>
<p>Another problem with real players rosters is that sometimes players appear in the wrong draft class. This happens because ${gameName} does not support the concept of "a player's rights are owned by a team, but he's not actually on the team this season". So things like a player being drafted in 2004 but playing in another pro league for a few years before his rookie season in 2007... ${gameName} has no good way to represent that. Until I fix that, there are only bad options, such as:</p>
<ol>
<li><p>Put those players on the roster of the team that owns their rights. That's bad for a number of reasons: it's hard to figure out who owns the rights to all prospects at all times; he would either play too early, or have to be marked as injured for a long time; and if he was injured and not playing, the team would still have to pay his salary.</p></li>
<li><p>Make those players free agents that anyone can sign, and maybe mark them as injured for a long time too.</p></li>
<li><p>Move those players to the draft class right before their rookie season.</p></li>
</ol>
<p>I think that last option is the least bad, so that's what I did.</p>
<p>This should only apply to players who were not on the team at all. For players who did join a team after the draft but spent the whole year injured or on the bench, those players should be included in the correct draft class. However sometimes it's hard to distinguish between these scenarios, so if you notice someone like that being moved to a later draft class, please <a href="/contact/">let me know</a>.</p>
`
		: ""
}`;
	}
};
