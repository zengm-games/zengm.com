---
layout: post
title: Null values for historical stats
date: 2025-02-18
tags:
  - post
  - Basketball
  - Real Players
  - UI
  - Stats
---

BBGM has had real players and historical stats for a long time now. One tricky part about historical stats is that most stats were not recorded originally and only started being recorded at some later date. For instance rebounds weren't tracked until 1951, and blocks/steals weren't tracked until 1974.

The correct way to deal with missing data like that is to leave it as missing data - your system should support some data being missing or "null", and still work despite that. BBGM did not work that way originally, because back before historical data was in the game, it was all simulated data. That means I never had to worry about some stat not being tracked - everything was always tracked! That's a lot easier to deal with than data where sometimes stuff is missing, because then every time you want to do something with a stat, you need to check if it actually exists. That's especially difficult to add to an existing codebase where there are a bunch of different places you need to update to handle missing data.

So when initially adding historical stats back in 2021, I "solved" this problem the easy/lazy way. Rather than adding support for null values for stats, I just replaced all the null values with 0. So if you looked at a player from the old days, you'd see something like this:

<!--more-->

<figure class="overflow-auto"><img src="/files/null-historical-stats-1.png"></figure>

That's really ugly! And most of those zeros are not actually true. Now it looks like this:

<figure class="overflow-auto"><img src="/files/null-historical-stats-2.png"></figure>

This was actually really difficult to get working! And I wouldn't be shocked if it isn't 100% working, please [let me know](/contact/) if you notice any bugs.

If you're curious, here are some details:

- **Career averages:** Previously, the zeros added in to replace missing data would get used in career averages. So for a player with no rebound data for some seasons, his career average would treat it as if he actually had 0 rebounds that entire season, leading to an artificially low career average. That is now fixed. Career averages just skip seasons with missing data.

- **Derived career averages:** Some stats come from formulas involving other stats. For example, TOV% is TOV / (FGA + 0.44 \* FTA + TOV). While FGA and FTA were always tracked, TOV data only goes back to 1978. So when computing a career average for TOV%, I need to be able to sum up FGA and FTA only for seasons where TOV exists, rather than just using the normal career totals for all those variables. That's really annoying to implement!

- **TRB vs ORB/DRB:** Rebounds have been tracked since 1951, but it wasn't until 1974 that they were separated into offensive and defensive rebounds. BBGM originally didn't have a concept of "total rebounds" separate from offensive/defensive rebounds, so for historical stats before 1974 I just treated total rebounds as defensive rebounds. You can see that in the first screenshot above. But now it does have a separate category for total rebounds. Getting this to work everywhere was tricky, especially for things like doing a career average of TRB for a player where some seasons there are separate ORB and DRB but other seasons there aren't.

- **Missing modern data:** When you view a current player and look at his 2024 stats, you'll see some values missing, such as blocks against and double doubles. That just means those values are not in my source data. Would be nice to improve that later, but at least it's clearer now that some data is missing.

Also an interesting idea that this opens up. Currently if you start a league in 1947 it will track all data, like any normal BBGM league. Wouldn't it be cool if it didn't, and you just had access to the stats they actually tracked in real life? And then as time goes on, new stats would be added? I'm not sure if/when I'll add a feature like that, but it would be fun.
