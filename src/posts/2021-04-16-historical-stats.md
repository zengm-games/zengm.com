---
layout: post
title: Historical stats in real players leagues
date: 2021-04-16
tags:
  - post
  - New Feature
  - Real Players
  - Settings
  - Stats
---

It's almost a year since [real players were added to Basketball GM](/blog/2020/06/league-creation-options/). Today there is another big improvement to this feature: historical stats.

When starting a new realy players league, there is a new Historical Stats setting:

<figure><img src="/files/historical-stats.png" class="img-fluid"></figure>

The default on PCs is <span class="text-highlight">All seasons, active and Hall of Fame players only</span>. That means you'll see the full career stats up to the current season for all active players, and the Hall of Fame will be fully populated as well.

The default on mobile is <span class="text-highlight">None</span> which is the same as it used to be. This is just because loading the stats uses a fair amount of bandwidth and disk space, so I'm wary of making it the default on mobile.

But the really cool option is <span class="text-highlight">All seasons, teams, and players</span>. That gives you the full league history back to 1947, including:

<!--more-->

- Player stats
- Player ratings
- Awards
- Teams
- Standings
- Playoff brackets

...for every player, every team, every season.

In addition to being a great starting point to play into the future, it's pretty fun for viewing old data too. You can use [all of the frivolities](/blog/2020/05/new-frivolities/). You can go through all the league and team history features, such as [the team records page](/blog/2020/06/real-rosters-back-to-1947-contraction/). You can view all the past [award races](https://old.reddit.com/r/BasketballGM/comments/g2sgwf/new_in_version_202004170093_award_races/) and see how they correspond to reality. You can view the career stats of the entire league in one giant table. Basically... every way you look at your league's data after playing for 75 years in BBGM, you can do with 75 years of real data.

There are, of course, some limitations. I always have to draw the line somewhere, or I'd never release anything! So currently missing are team stats, retired jerseys, and historical contracts. I would like to eventually add them.

There's also a glitch with career averages for old players who have only partially available data. For example, steals were not tracked before 1974. For players whose career spans across that divide, their career averages treat years before 1974 as having 0 steals, rather than not having steals data, which is incorrect and deflates their career averages. I also want to eventually fix this. It was never an issue before without real historical stats.

So please, give it a try and [let me know what you think](/contact/). I've been fixing a lot of bugs over the past couple days, and people on [Discord](https://discord.com/channels/290013534023057409/709888353662664794) have been testing it too. But this is a pretty big feature, so I'm sure I missed something!
