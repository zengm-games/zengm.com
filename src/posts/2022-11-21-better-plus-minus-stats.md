---
layout: post
title: Better plus/minus stats
date: 2022-11-21
tags:
  - post
  - New Feature
  - Stats
---

For a long time, Basketball GM has had raw plus/minus (or +/-) as a stat, which is how many points per game his team scores with him on the floor minus how many points it gives up. In basketball, this is not the most useful stat in the world for multiple reasons.

One is that it's not adjusted for playing time, but obviously it's very different to have a +/- of -1 per 10 minutes or -1 per 30 minutes. To address that, the +/- stat has been replaced by a "per 100 possessions" version, which makes comparisons of this value more fair.

But even per 100 possessions, it's a pretty shitty stat because if you play with good teammates you'll have a good +/- even if you're not very good. This is the problem that various [adjusted plus/minus stats](https://en.wikipedia.org/wiki/Adjusted_Plus_Minus) try to solve with fancy statistics. Those are probably too complicated to include in BBGM, although BBGM does include the box plus/minus (BPM) stat which is a simpler approximation of adjusted plus/minus.

<!--more-->

Another cool plus/minus stat you can see on [basketball-reference.com](https://www.basketball-reference.com/) is what they call "OnCourt +/- Per 100 Poss". To calculate this, you first take the same +/- per 100 possessions I mentioned above, and then you subtract the same stat for when a player is on the bench. This is an attempt to adjust for your teammates. Like yeah maybe a team loses every game by 20 points, but when their star is in they play like they lose every game by only 10 points. So his +/- is still very negative, it's a lot higher than his team's +/- when he's on the bench.

This is not as sophisticated as real adjusted plus/minus stats which attempt to account for which specific teammates are in the game at different times. But it's a simple, fun stat that gives you a little idea about how a player impacts his team's performance. Certainly it's much more useful than the old raw +/- stat.

This is what it looks like in the advanced stats table on player profiles:

<figure><img src="/files/better-plus-minus-stats.png" class="img-fluid"></figure>

For example, look at the 2nd year in that table. +8.6 On-Off is really good, despite a -2.9 +/-. That is what you see when there is a good player on a bad team - the team is losing even when their good player plays, but they lose by even more when he sits. It's not until the last two years of his career when his On-Off becomes negative, meaning that the team performed worse with him on the court than on the bench.

More stuff:

- You can use the new stats in the [GOAT Lab](https://old.reddit.com/r/BasketballGM/comments/od29bb/new_feature_at_tools_frivolities_the_goat_lab/) as `pm100` and `onOff100`.

- On-Off leaders are shown at the bottom of the League Leaders page.

- Historical values for both of these stats are present in new real players leagues back to 1997.

And thank you to [nicidob](https://nicidob.github.io/) for [implementing this feature](https://github.com/zengm-games/zengm/pull/433)!
