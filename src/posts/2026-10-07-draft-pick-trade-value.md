---
layout: post
title: Draft pick trade value accounts for lottery and playoff settings
date: 2026-10-07
tags:
  - post
  - Trades
---

Trade value is a tricky topic, and draft picks are a big part of that.

For a long time, the way that it's worked in ZenGM is that it looks at the actual draft class to see who will be available at a pick, and then the pick is worth the same as that player on a rookie contract would be. That works really well right before or during the draft, when the order is known.

What about earlier in the season when the draft order is not known? Or for picks in future seasons? Then it used some formula to project where the pick would fall, and then same as above, the value of the Nth pick in the draft was the value of the Nth best player.

<!--more-->

But... that doesn't really make sense. Imagine you are projected to have the 2nd pick in a draft where there is only one incredible prospect. Even though you are projected at #2, if you lose a few more games you could be #1. The value of your pick should account for that.

The lottery complicates things even more. In leagues with draft lotteries, generally any non-playoff team has a chance to win the #1 pick. That's a significant factor in valuing first round picks. Especially with the [new default draft lottery system in BBGM](/blog/2026/05/nba2027-draft-type/), where the lottery odds are very flat, and actually the 3 worst teams have lower odds of getting the top pick than the teams after them.

In this new lottery system, the old method of "Nth worst team is assumed to get the Nth pick" really fell apart. Draft pick trading was always somewhat bad, but it became really bad the past several months.

But now it's better!

When valuing draft picks, it quickly simulates the rest of the season (unless it's already over) and then uses the lottery odds to determine the range of possible spots a pick might fall, and it uses that to weight the value of players available at those picks.

This simulation also accounts for playoff settings. Previously it'd just rank all the teams in the league based on their record and roster strength, which usually mostly worked, but it'd lose information about conferences. Like a playoff team from Conference A might have a worse record than a non-playoff team from Conference B. But now, since it simulates the season+lottery, teams on the cusp of making/missing the playoffs are properly handled.

Some other things you might notice:

- Before the lottery, late lottery picks are noticeably worth more now, since they properly price in the chance of becoming one of the top picks.
- "No lottery, best to worst" gives the best team the first pick. Previously trade value was completely wrong here, it assumed the best team got the worst pick. Now it works correctly.
- With the "Random" draft type, where the entire draft is completely random, all first round picks have the same projected value. Rebuilding/contending teams still value picks differently, but within those categories, all teams see all Nth round picks as worth exactly the same.

And finally, another nice thing about this new draft pick value method is that it is a step towards implementing a commonly requested feature: protected picks in trades. Since we now estimate the full range of possible picks and how likely each is, you could imagine a protected pick just alters that estimate, like if it lands in the top 3 then it's replaced by a pick in next year's draft. I'm not promising that will be the next new feature, there are some other complexities for implementing it, but I think it's a hint that this new approach is generally the right direction.
