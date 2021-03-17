module.exports = class FAQ {
	data() {
		return {
			layout: "layout.njk",
			title: "Frequently Asked Questions",
		};
	}

	render({ gameName, sport, websitePlay }) {
		return `<a name="missing-leagues"></a>
<h2>My leagues are gone! What happened?</h2>
<p>${gameName} stores all game data on your computer, in your browser profile. This means that you can't play one league on multiple devices unless you export it (from the Tools menu) and then create a new league with that file. So first, <b>make sure you're using the same browser on the same computer</b>.</p>
<p>If you are using the same browser on the same computer and your leagues are missing, the game data has probably been deleted. This can happen in places like schools and libraries that set browsers to automatically delete everything when they are closed. It also happens if you manually delete your browser data. For example, in Chrome, if you go to More tools > Clear browsing data... > Cookies and other site data, that will delete all your ${gameName} data. <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=340821">This is true even if you tell it to only delete data from today - if you played ${gameName} at all today, it will completely delete all your leagues.</a></p>
<p>Browsers may also delete data if disk space is running low. To minimize the chance of this happening, go to <a href="${websitePlay}settings">the global settings page</a> and enable Persistent Storage.</p>
<p>In cases where the data has been deleted from your browser profile, the only way to get it back is if you have a backup. Sorry :(</p>

<hr>

<a name="two-computers"></a>
<h2>How can I play the same league on two computers?</h2>
<p>Currently there's no easy way to do this, but it is possible.</p>
<p>You can export a league (Tools > Export League), copy the file to your other computer, and then create a new league using that file.</p>

<hr>

<a name="latest-version"></a>
<h2>How do I make sure I'm running the latest version of the game?</h2>
<p>Sometimes your browser can get stuck on an old version of ${gameName}. Here are a few things you can try to force an upgrade.</p>
<p><b>Method 1:</b> Close all tabs with ${gameName} open and then open ${gameName} again. Or restart your browser. If this doesn't work the first time, try again. Pressing the "reload" button will probably not help.</p>
<p><b>Method 2:</b>> Try manually emptying your cache. In Chrome, from the main menu go to "More tools" > "Clear browsing data". Make sure you select "Cached images and files" and <i>do not select</i> "Cookies and other site data" because "other site data" is where ${gameName} stores all your leagues. Then try closing all open tabs with ${gameName} and opening it again, like above.</p>
<p><b>Method 3:</b> Open ${gameName} in a single tab in your web browser. Open your browser dev tools (ctrl+shift+i, or ctrl+cmd+i on a Mac) and then do a hard refresh (ctrl+shift+r, or ctrl+cmd+r on a Mac).</p>
<p><b>Method 4:</b> Open ${gameName} in a single tab in your web browser. Open your browser dev tools (ctrl+shift+i, or ctrl+cmd+i on a Mac). At the top of dev tools panel, click "Application" (if it's too narrow to see, you might have to click the >> to see it) and then click "Service Workers" on the left:</p>
<p><img src="/files/delete-sw-1.png" class="img-fluid"></p>
<p>Then click "Unregister" to the right of ${websitePlay}:</p>
<p><img src="/files/delete-sw-2.png" class="img-fluid"></p>
<p>Finally, reload ${gameName} and hopefully you will see the latest version.</p>

<hr>

<a name="app"></a>
<h2>Can you make ${gameName} into an app for my phone?</h2>
<p>Not in the near future, for several reasons:</p>
<ol>
  <li><p>${gameName} already runs on your phone. Just use your browser. I know the interface is not ideal, but it does mean the mobile situation is less dire.</p></li>
  <li><p>I'm just one guy working on this project. I think it'd be a bad idea for me to split my already limited resources over multiple separate codebases. Instead, I'm focused on making the web verison of ${gameName} as good as possible.</p></li>
  <li><p>It is possible to improve the mobile experience of ${gameName} without making an app. The mobile web version can be improved, and it will be improved. But given the above point, it'll take some time. Bear with me :)</p></li>
  <li><p>Finally, I'm not convinced that a tiny cell phone screen is a good place to play a sports management sim. This is a data-heavy game, and I think it's simply better on a laptop or desktop screen. So even if I made a super polished mobile app, I don't know if it would be as good as the current web version is on a computer.</p></li>
</ol>
<a name="a2hs"></a>
<p>However, you can install the web app on your phone so it looks a bit more like a native app. There are different instructions for iOS and Android:</p>
<h3>iOS (iPad or iPhone)</h3>
<ol>
  <li>Open <a href="${websitePlay}">${websitePlay}</a> in Safari.</li>
  <li>Tap the icon featuring a right-pointing arrow coming out of a box along the top of the Safari window to open a drop-down menu.</li>
  <li>Tap "Add to Home Screen." The Add to Home dialog box will appear, with the icon that will be used for this website on the left side of the dialog box.</li>
  <li>Enter the name for the shortcut using the on-screen keyboard and tap "Add". Safari will close automatically and you will be taken to where the icon is located on your desktop.</li>
</ol>
<h3>Android</h3>
<ol>
  <li>Open <a href="${websitePlay}">${websitePlay}</a> in Chrome.</li>
  <li>Tap the menu icon (3 dots in upper right-hand corner) and tap Add to homescreen.</li>
  <li>You’ll be able to enter a name for the shortcut and then Chrome will add it to your home screen.</li>
</ol>
<p>(Credit <a href="https://natomasunified.org/kb/add-website-to-mobile-device-home-screen/">this site</a> for most of those instructions.)</p>

<hr>

<a name="pt"></a>
<h2>If I give a player more playing time, will he improve faster?</h2>
<p>No. I'm not convinced that playing time really matters for player development.</p>
<p>It's a chicken and egg problem. Do good young players get more playing time because they're already good? Or do young players become good if they get more playing time? It's obvious that the first scenario happens. But is it obvious that the second scenario happens? I haven't seen any convincing evidence that it does${
			sport === "basketball"
				? ', and there is <a href="https://twitter.com/nicidob/status/1152411949059256320">some evidence that it doesn\'t</a>'
				: ""
		}.</p>
<p>I know that's not really a fair argument, because it could be that it's a real effect that is just hard to see in the stats we have available. But if it's hard to see in the stats we have available, does it matter for a game like ${gameName}? Because if it's so difficult to notice in reality, it'd be equally difficult to notice in ${gameName}.</p>
<p>I can make a counterargument, though. ${gameName} is a video game. Its primary purpose is to be fun, not to be realistic. So maybe it'd be fun to give unrealistically large bonuses to young players who get a lot of playing time. I don't know. It could be fun. But I also very much like to keep things simple, so I err on the side of simplicity. And doing nothing is very simple.</p>
<p>I also am aware that I could be wrong. Maybe there is a convincing, data-driven argument that playing time leads to quantifiable improvement. If so, <a href="/contact/">please let me know</a>!</p>

${
	sport === "hockey"
		? `
<hr>

<a name="hockey-gm"></a>
<h2>Why is it called "ZenGM Hockey" rather than "Hockey GM"?</h2>
<p>Because <a href="https://hockey-gm.com/">Hockey GM<a/> is already another game from Finland. If you speak Finnish, give it a try!</p>
`
		: ""
}`;
	}
};
