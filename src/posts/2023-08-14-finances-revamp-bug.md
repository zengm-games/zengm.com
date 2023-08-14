---
layout: post
title: The finances revamp made coaching and health spending too powerful
date: 2023-08-14
tags:
  - post
  - Bug Fix
  - Finances
---

The [finances revamp](/blog/2023/06/finances-revamp/) from a couple months ago went pretty smoothly. Old leagues got upgraded to the new system, the new system generally worked as intended, and people seemed to like it.

But after a little while, I got a bug report from someone claiming that progs are too large now, that something about the effect of coaching spending must be different.

My initial reaction was to not believe it. I mean, I wrote the code, I know how it works, I know it's supposed to not be literally exactly the same as before, but any difference should be so small you can't notice it. So I figured it was just some psychological trick, like you get particularly lucky/unlucky due to random chance, and then you assume it happened because of this other thing that you know happened. Perfectly normal. People do that all the time.

But I kept getting reports like this, maybe once per week. I became at least slightly concerned that this was a real bug.

Then I saw a comment by legendary BBGM user (and sometimes BBGM dev) nicidob [saying he thinks something is wrong too](https://old.reddit.com/r/BasketballGM/comments/15m7b17/the_game_is_way_too_imbalanced_after_the_finance/jvj46iz/?context=3).

TLDR: nicidob was actually wrong, the thing he noticed was just random variation. But everyone else was correct. There was indeed a bug that made coaching and health spending more powerful than they were previously. That is now fixed. Read on if you want the details.

<!--more-->

nicidob's post said:

> Loaded a new random league and 25 players above 70. 2 above 80!
>
> It used to be 3-5 players above 70. 70 meant MVP race. 80 meant a top 5 season all-time

That type of explicit claim is fairly easy to test. The user who made the post he replied to also claimed:

> it seems like there's a 130+ OVR superteam almost every year

So I wrote a script to create a bunch of new leagues and evaluate three metrics:

1. Number of players with 70+ ovr
2. Number of players with 80+ ovr
3. Highest team ovr in the league

At first I did it by hand for like 20 leagues, comparing those values in the old version of BBGM (before the finances update) and the current version. It looked like the effect was real, that all those values were higher now than before. But a sample size of 20 is pretty small. So I wrote a script to do it 1000 times and found actually there was no difference:

<table class="table" style="width: unset"><thead><tr><th></th><th>old</th><th>current</th></tr></thead><tbody><tr><td># players 70+</td><td>8.5</td><td>8.6</td></tr><tr><td># players 80+</td><td>0.4</td><td>0.4</td></tr><tr><td>Top team ovr</td><td>78.5</td><td>78.7</td></tr></tbody></table>

This is a good example of how even the best of us can be fooled by randomness.

...but I was not totally satisfied. "It seems like there's a 130+ OVR superteam almost every year" isn't really talking about teams in a new league, it's talking about all the seasons you play in a league. And it's possibly progs are not exactly the same for a new league and for an existing league.

So I decided to look into it even more, and see if there is any change in these metrics after simming each league for 20 seasons. This took longer to run (even with decreasing the number of games per season to 1) but ultimately I got some troubling results:

<table class="table" style="width: unset"><thead><tr><th></th><th>old</th><th>current</th></tr></thead><tbody><tr><td># players 70+</td><td>7.9</td><td>8.9</td></tr><tr><td># players 80+</td><td>0.3</td><td>0.5</td></tr><tr><td>Top team ovr</td><td>75.5</td><td>82.5</td></tr></tbody></table>

Those are significant differences between the old version and the current version! All of the users reporting this issue (except nicidob) were actually correct!

But why does it happen, and how do I fix it?

First, why is there a difference in leagues after 20 seasons, but not new leagues? Players in new leagues are supposed to be very similar to existing leagues. Like it simulates past drafts and then does progs from each player's rookie season.

But there is a critical difference - in a new league, it doesn't apply the coaching effect at all, everyone just gets the default effect. Coaching only applies to progs in an existing league. So that's why the difference in ratings above is only apparent after simming some seasons.

Okay, but then why is there a difference after simming some seasons? As described in [the finances revamp blog post](/blog/2023/06/finances-revamp/), the effects in the new system are basically the same as the old system. For coaching, that meant a bonus/penalty of +/- 25% to progs. And this seems pretty clear in my code, in both the new and old versions. Old version scales the finances rank linearly between -25% and 25%, and new version scales the budget level sigmoidally between -27.5% and 26.51%.

Those numbers (-25/25 and -27.6/26.51) are not exactly the same, I know. [The finances revamp blog post](/blog/2023/06/finances-revamp/) explains why. But they're pretty damn close, especially for something like progs where the result gets rounded to the nearest integer. An extra 1% bonus is very rarely going to be large enough to bump a prog up to the next integer.

But I tried capping it at 25%. No change. I tried a bunch of other stuff too. I've been running simulations for like the past few days. And none of them identified the problem. At that point, the only other thing I could think of was that there must have been some error in computing the coaching rank in the old version.

[This is the code from the old version](https://github.com/zengm-games/zengm/blob/17b5dde957dc201909c6cdeeea49b455004e8c3c/src/worker/core/finances/getRankLastThree.ts) that computes the average rank of something over the past three seasons. Pretty straightforward. Except [this part](https://github.com/zengm-games/zengm/blob/17b5dde957dc201909c6cdeeea49b455004e8c3c/src/worker/core/finances/getRankLastThree.ts#L48-L57):

```js
if (s0 && s1) {
	// Use two seasons if possible
	return (s0[category][item].rank + s1[category][item].rank + defaultRank) / 3;
}

if (s0) {
	return (s0[category][item].rank + 2 * defaultRank) / 3;
}
```

That handles the case where there is only one or two seasons of history available, rather than three. That would happen in a new league, or for an expansion team. My thought process was that you shouldn't be able to instantly get the max effects just by increasing your spending on day 1, it should have some kind of averaging towards the mean (with 30 teams, `defaultRank` is 15.5).

The problem is, I got lazy. If you look at [the code that calculates the average coaching ranks that are used in progs in the preseason](https://github.com/zengm-games/zengm/blob/17b5dde957dc201909c6cdeeea49b455004e8c3c/src/worker/core/phase/newPhasePreseason.ts#L227-L234):

```js
const coachingRanks: Record<number, number> = {};
for (const teamSeason of teamSeasons) {
	coachingRanks[teamSeason.tid] = finances.getRankLastThree(
		[teamSeason],
		"expenses",
		"coaching",
	);
}
```

That is only ever passing in the current season, not the previous seasons. So it always triggers that code path where the current rank is averaged in with 2 seasons worth of the average rank!

In practice, for a 30 team league, this means the best rank that would ever be sent to the progs function was `(1 + 2 * 15.5) / 3` or 10.67, and the worst was `(30 + 2 * 15.5) / 3` or 20.33. When I thought it was 1 to 30.

That's a big difference. If you apply that to the coaching effect formula, I thought it was (1, 30) -> (-25%, 25%). But actually it was (10.67, 20.33) -> (-8.33%, 8.33%). So the actual impact of coaching was only 1/3 as large as I thought!

When rewriting all of the finance code, I did notice my prior lazy usage of only the current season's rank, and I fixed it by always using the past three seasons. But I forgot how my old code works! I thought it was just using the current rank directly, not averaging it with dummy values. So I didn't realize this would be a significant change in how the game worked.

In most parts of the code using these ranks I was not lazy and was always correctly using three seasons, but also I did the exact same lazy calculation for the effect of health spending on injuries. So this same exact problem has been occuring there too - health spending had 3x the effect after the finances update than it did before! I don't think anyone noticed this, or at least nobody reported that as a bug to me. But it was happening.

The fix is simple. Decrease the coaching and health effects to about 1/3 of what they were previously. That had the desired effect of bringing the aforementioned metrics in line with the old version.

Thank you to everyone who reported this bug to me! I'm sorry I didn't immediately believe you.
