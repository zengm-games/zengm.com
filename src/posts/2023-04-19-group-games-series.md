---
layout: post
title: Group regular season schedule into MLB-like 3/4 game series
date: 2023-04-19
tags:
  - post
  - Baseball
  - Schedule
---

When developing [ZenGM Baseball](https://baseball.zengm.com/) last year, there were a bunch of things I wanted to do but decided to leave for later. Can't let the perfect be the enemy of the good! One of those was the regular season schedule. In baseball, due to the large number of games with few days off resulting in the need to minimize travel, teams usually play 3-4 games against the same opponent, which is called a "series".

In the initial release of ZenGM Baseball, there were no series, games were randomly ordered just like the other sports. Now that is changed - there is a new setting called "Group Games Into Series" that is enabled by default in ZenGM Baseball, so it will apply for future seasons in all leagues unless you disable it. (For other sports it's disabled by default, but you can enable it if you want a baseball-like schedule.)

The end result is the schedule looks more like a baseball schedule:

<figure class="overflow-hidden"><img src="/files/group-games-series.png"></figure>

That's the general idea. Read on for all the details, if you're curious.

<!--more-->

There are basically two ways I could have implemented this:

1. Bake the series into the schedule generation algorithm, so it's outputting a list of series between teams rather than a list of games between teams.

2. Add a post-processing step that takes all the individual games from the schedule generator and groups them (as best possible) into series.

The main advantage #1 would provide is that everything would automatically be a full series. You wouldn't have to worry about stuff like "what if the schedule generator only gives 1 game between ATL and BOS?" But the downside is that I already have a pretty complicated and flexible schedule generation algorithm that outputs individual games. Building support of series into that... not easy!

The second option is easier. The only downside is that there could be more of those straggling mini-series with 1 or 2 games between teams, since the schedule generator doesn't know to avoid them.

I decided that the second option is better. It's much easier, much less error prone, and gets like 90% of the same result. So I apologize for the abundance of mini-series but please just try to ignore them!

The way it works is:

1. Get a list of all the games between teams, in some arbitrary order

2. Count up how many games are between the same home/away teams (home/away does matter, of course!)

3. Split those games into series - making 3 game series if the number of games left demands it (3, 6, or 9 games left between teams), making 1-2 game mini-series when that's all we can do (only 1 or 2 games left between teams), and otherwise making 4 game series. Then it randomly shuffles the order of these series, otherwise you'd get all the mini-series at the end of the season.

4. Now we need to assemble these series into an actual schedule. To do that:

   1. Randomly pick some series to start with.

   2. Write down all the games between teams in those series.

   3. If any series are over, remove them from the list of ongoing series.

   4. For all the teams who don't have an ongoing series, randomly pick new series between them to add to the list of ongoing series.

   5. Repeat until all the series are over.

That does work pretty well to group the games into series, but there is still one problem. Due to the random parts of the algorithm, some teams will tend to get picked earlier than others. It's not really noticeable until you get near the end of the season and some teams have 10 games left while other teams have 0 games left. In addition to just beign weird, that's a gameplay problem because an extra 10 days rest before the playoffs is a pretty unfair advantage.

I tried a few thigns to address this.

First attempt: In step 4-4 above ("randomly pick new series between them to add to the list of ongoing series") I instead made it sort by number of series remaining, so it first tries to pick teams that have more series remaining. This helped a little, but the problem was still there.

Second attempt: If only two teams are left playing on the last day of the season, then surely some other games that happened earlier could be moved back to the last day in the season. I wrote a more general post-processing step: any games that are possible to move up to the next day, do it, and keep repeating until there are no more to move. This also does help a little, but not completely. Like if you have a game between ATL and BOS on the last day of the season and a game between BOS and CHI on the 2nd to last day of the season, then you can never move that game back. So eventually you wind up stuck, unable to move any more games back.

Third attempt: At this point the problem is less severe, but some teams still have a much lighter schedule at the end of the season. So I did a quick and dirty fix - just reverse the schedule, and now the weird part is at the beginning. But once you're a few weeks into the season, every team has the same very dense schedule, so nobody gets an advantage going into the playoffs.

I'm sure there is some "real" solution to this problem. It's actually similar in the core scheduling code, which does things like balancing home/away games, division/conference games, etc. - [there are "real" ways to](https://ocw.mit.edu/courses/15-071-the-analytics-edge-spring-2017/pages/integer-optimization/sports-scheduling-an-introduction-to-integer-optimization/), but it's not exactly easy! Maybe I'll get their some day. In the mean time, my primitive heuristics work well enough most of the time, although there are some strange edge cases that I hope you never notice :)
