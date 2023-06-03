---
layout: post
title: Several Football GM updates, including improved player and team ovr formulas
date: 2021-05-02
tags:
  - post
  - Game Simulation
  - New Feature
  - Player Development
  - Player Ratings
  - Team Ovr
---

Football GM has long deserved some updates to the core of the game. Here are some.

First, and most importantly, there are new player ovr formulas for all positions. [In my opinion](https://old.reddit.com/r/Football_GM/comments/l6nw5h/whats_wrong_with_my_team/glybzex/), this was the biggest problem with FBGM. Too many players would consistently overperform or underperform their ovr rating, which made the game feel random and unpredicatable. That's especially bad in a football game, where the small number of games per season and single elimination playoffs already makes it pretty unpredictable.

<!--more-->

The main difference between the old and the new ovr ratings is that the new ones are based on the same equations used in game simulation to combine multiple different ratings into "composite ratings". Like how good you are as a runner involves strength, speed, and elusiveness. And each of those three components has a particular weight associated with it. Each position's ovr rating is now a combination of a small number of "composite ratings" like that, based on the things players at that position typically do.

Why wasn't it always done that way? I don't have a good reason. Probably it was because I was used to doing things like Basketball GM, where all players do all things, and it doesn't make sense to have an ovr formula focused in on a narrow part of the game. But that's how it works in football, everything is position-specific.

The end result is that player ovr ratings are much more reliable indicators of how good a player is.

Some evidence of that comes from a fun little experiment [nicidob](https://nicidob.github.io/) did a while back. He found that by looking at individual game results, he could identify which players consistently overperform or underperform their ovr ratings, and he used that to make a league file containing a very high rated team that was horrible and a very low rated team that was pretty good. It's no longer possible to make crazy teams like that. (Or, to the extent that it's still possible, it is much harder now and doesn't work nearly as well. Of course the new formulas are not perfect, and some players still do overperform or underperform somewhat. Just not like before.)

Another piece of evidence that the new player ovr ratings are better is the new team ovr formula. Team ovr rating comes from using a ton of simulated data to predict a team's average margin of victory, based only on the positions and ovr ratings of their players. The new team ovr formula fits the new data better than the old one fit the old data. This means team ovr ratings are also more reliable indicators of how good a team is than they used to be, and that's mostly due to improvements in the player ovr formulas.

You will notice this in existing leagues when you sim to your next preseason and ovrs are recalculated. Some guys may go way up, some may go way down. For the most part, the new ratings will better reflect their true abilities.

That's the big improvement. But there's a bunch of smaller ones too, some of which may actually be more immediately noticeable to you:

- Player ratings are a bit more distinct across positions. There are still guys who can play multiple positions, but they are less common.

- I fixed bug where some generated salaries were lower in the first season of a new league than in subsequent seasons, which really messed with league finances for those first few seasons in a new league.

- After dropping back to pass, QBs now sometimes scramble. This is more common with QBs who are good runners. Furthermore, the player generator now more often generates hybrid QBs who can both run and pass.

- Previously, all awards were based on the [approximate value (AV)](https://www.pro-football-reference.com/blog/index37a8.html) stat. AV is a nifty stat, but sometimes the results seem a bit funny, especially on defense. So for defensive awards, I replaced it with a hand-tuned formula. I'm sure this formula will get some tweaking over time, and feel free to suggest changes. But the initial version is:

  ```
  AV + 1.5 * Sk + Tck / 12 + 4 * Int + PD + 5 * (FmbTD + IntTD + Sfty) + (2 point bonus for LBs)
  ```

  The end result is that defensive awards will tend to go to players with dominant statistical seasons, rather than sometimes to players with mundane stat lines on good defensive teams.

- If the winning team has the ball and can kneel to run out the clock, they now do so.

- The retirement age for players is increased, and hopefully you will no longer notice an excessive amount of very good players retiring young.

All of this is just scratching the surface, I know there is a lot left to improve in FBGM. Don't worry, we'll get there :)
