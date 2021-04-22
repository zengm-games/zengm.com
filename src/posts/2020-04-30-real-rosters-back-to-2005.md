---
layout: post
title: Real rosters back to 2005
date: 2020-04-30
tags:
  - post
  - New Feature
  - Real Players
---

Last week I released [real players in Basketball GM](/blog/2020/04/real-players/), based on current rosters. Today I'm releasing real players for every season back to 2005. Select the season when [creating a new league](https://play.basketball-gm.com/new_league/real).

These rosters include players, teams, awards, relatives, contracts, and future draft classes.

It is not perfectly realistic. Some of that is simply because it's new. [Please give me feedback](/contact/) and I will improve the rosters. But some of it is because Basketball GM is not a perfect simulation of reality, so it cannot 100% accurately represent the real world. I'm trying my best to strike a balance between simplicity and realism, but there is always room for improvement!

<!--more-->

At its core, the historical rosters are made similarly to [the great work nicidob did generating historical rosters from stats](https://nicidob.github.io/rosters/). In addition to some small changes to the ratings generation model, I added several things to the rosters:

- Pretty realistic player contracts. It's definitely not perfect because Basketball GM does not include various roster complexities like team/player options, but it seems pretty good.

- Past awards (MVP, DPOY, ROY, etc) show up on player pages.

- Relatives show up on player pages.

- Future draft classes are included up to 2020.

- Some ratings have been manually tweaked. I know that's kind of contrary to the idea of automatic roster generation, but a small number of manual tweaks are a decent compromise I think. In theory this could be accomplished more comprehensively by continuing to modify the roster generation code, but at some point that becomes very similar to manually tweaking players.

- As part of that manual tweaking, I added back some players that missed entire seasons, whether due to injury or other causes. That's another thing that in theory could be automated, but it's rare enough that I'd rather just manually triage every situation.

[Let me know](/contact/) if you think something could be improved, particularly about missing players or ratings that need a little tweaking.

Here are some known limitations of the current historical rosters:

- I did not include past stats for players because I'm worried about [using too much hard drive space](/basketball/manual/debugging/quota-errors/). That's one of the tradeoffs with making a browser-based game.

- There are no changes in play style over time. For instance, back in 2005, three pointers were a lot less common. Basketball GM does not do a great job simulating this.

- There are no changes in league rules over time. This is most noticeable with the salary cap. Historical rosters do set the salary cap accurately, but then it never changes.

- It only goes back to 2005. Why? Because for anything older, expansion teams are needed to really make it feel right. So first, I want to add good support for expansion drafts to Basketball GM. This will be fun even for modern or random leagues. Things get a bit stale? Why not do an expansion draft and take over GMing the new team.

Expect to hear more news in the near future about most of these limitations.

But in the mean time, I hope you have fun with the rosters back to 2005. And please [give me feedback](/contact/) so I can continue to improve the rosters and the rest of the game too.
