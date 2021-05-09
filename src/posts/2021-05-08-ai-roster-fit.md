---
layout: post
title: The AI now considers roster fit when making free agent signings and draft picks
date: 2021-05-08
tags:
  - post
  - AI
  - Draft
  - Free Agency
---

This update is only for Football GM and ZenGM Hockey. I didn't do it yet for Basketball GM because position matters much less in basketball, so whatever minimal gain might be achieved from this new feature would not be worth the risk of changing the AI.

But for football and hockey, it's very important for the AI to know that you can only play one quarterback/goalie at a time, so it doesn't make much sense to sign 2 (or more!) to big contracts.

Previously this was somewhat of a problem, because AI roster moves were made by looking at how good a player was, regardless of the current roster. (Okay, that's not quite true, there was some ad hoc code to make it not do completely crazy things, but it didn't work that well.)

As an example, I simmed 100 seasons in Football GM to see how often a top 10 QB in the league spent a season as a backup. That happened for 77 seasons before this update. But after this update, it happened for only 18 seasons. That's a pretty decent improvement, I think.

But how does it work?

<!--more-->

Previously, when making a draft pick or signing a free agent, the AI would take the best player available. Usually that's the right thing to do, but it can result in unbalanced rosters.

Now, there are two different metrics available: how good the player is, and how good the player fits on a team. To compute the fit, it basically computes how the team's overall rating (like on the Power Rankings page) changes before and after adding each player. So if you already have a good QB, adding another will improve your team only as much as a backup QB can. But if you don't have a good QB, then signing a better one will give you a big boost from that starting QB slot.

This whole thing is another idea from [nicidob](https://github.com/zengm-games/zengm/issues/380), but required a bunch of tweaking to get it to behave correctly.

In my testing, I found that it worked pretty well to use a combination of best player available and roster fit during the draft. So usually teams will take a player that fits their roster well, but there is a little wiggle room to take a great player even if he doesn't quite fit right. In free agency, I found it worked best to only use roster fit. This could be because (unlike the NFL) in my games, the draft comes before free agency, so you could look at free agency as being the last real opportunity for a team to fill in holes in its roster.

There are several limitations. The AI is still pretty stupid overall. Some examples of situations that this update does not affect:

This only affects free agent signings and draft picks. It does not yet influence trades or re-signings. That means trades and re-signings could still lead to unbalanced rosters.

And organic player development can still lead to unbalanced rosters. When that happens, teams currently will not actively look to fix those balance issues through trades. Similarly, teams do not try to plug holes caused by injury.

But I think this update still is a significant improvement for AI roster building. And even if the AI still makes an unbalanced roster due to the aforementioned limitations, at least the draft and free agency will now tend to counteract that unbalancing rather than possibly compounding the problem as they did in the past.

Another thing you'll notice about the draft is AI teams will favor certain positions over others. This is an implication of the "change in team rating" method described above - positions that are more important have higher weights in the team rating formula. So for instance, in FBGM, QB is a much more important position than RB. So if there are two prospects with the same ovr and pot ratings at QB and RB, they will tend to favor the QB. That is true even if the team needs more help at RB than QB - a small improvement at QB may be worth more than a larger improvement at RB.

And if you're curious, here's the code I ran in [the worker console](/football/manual/worker-console/) to see how many top 10 QBs spent a season on the bench:

```js
var backup = 0;
var fa = 0;
for (let season = 2021; season < bbgm.g.get("season"); season++) {
	console.log(season);
	const players = await bbgm.idb.getCopies.playersPlus(
		await bbgm.idb.getCopies.players({
			activeSeason: season,
		}),
		{
			attrs: ["pid", "draft"],
			ratings: ["ovr", "pos", "season"],
			stats: ["tid", "season"],
			season,
			showNoStats: true,
		},
	);

	const qbs = players.filter(p => p.ratings.pos === "QB");

	qbs.sort((a, b) => b.ratings.ovr - a.ratings.ovr);

	const top10 = qbs.slice(0, 10);
	const tids = new Set();
	for (const p of top10) {
		const tid = p.stats.tid;
		if (tid < 0) {
			if (season > p.draft.year) {
				fa += 1;
			}
			continue;
		} else if (tids.has(tid)) {
			backup += 1;
		} else {
			tids.add(tid);
		}
	}
}

console.log(backup, fa);
```
