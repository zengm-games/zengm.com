---
layout: post
title: Basketball game clock rewrite
date: 2023-12-20
tags:
  - post
  - Basketball
  - Game Simulation
  - Live Sim
---

The play-by-play in BBGM has always been a little weird. If you looked at it closely, you would notice some strange and unrealistic things related to the game clock. Today a bunch of that is fixed. Here's a list of some of the changes you might notice:

<!--more-->

- Generally the clock is simulated more precisely, and the clock advances throughout individual possessions. Like there is some time to advance from the backcourt, some time before the shot is taken, some time that the shot is in the air, and then some time to get the rebound or to inbound the ball

- The clock stops at appropriate times - fouls, timeouts, out of bounds, and made baskets under 2 minutes left

- Since the clock now stops when a foul occurs, rather than after the play ends, fouls with 0 seconds on the clock are much less likely now

- Under 1 minute left, the clock shows tenths of seconds. No more plays with 0 seconds on the clock where you don't know if the game is going to end now or not

- Timeouts can stop the clock and advance the ball to half court under 2 minutes (Currently this is the only affect of timeouts, so teams only use them when trailing late. Eventually I will add more situations where they help, such as getting some extra rest, making an inbound pass easier, subbing out an injured player, etc)

- When a period ends on something besides a shot, it tells you what happened (team chooses to run out the clock, team fails to get up a shot, defense was trying to foul but failed)

- When a player gets an offensive rebound, he can quickly put it back up rather than just running a whole new possession from scratch (for now this is only enabled when the clock is running down because I didn't want to add too much stuff to affect overall sim results, but eventually I will make this happen other times too)

- If the ball is being inbounded with <0.3 seconds left, the only possible type of shot is a tip in... which now is in the game and happens in those situations! Similar to offensive rebound putbacks, it's currently only used in those late game situations, but eventually I will add it as an option for normal out of bounds plays.

- Last second desperation heaves have been in the game for a while, but just showed up in the play-by-play as normal shots. Now they look different so you can see what's going on

- The play-by-play tells you when the ball goes out of bounds. Previously there was no play-by-play log when that happened

- Substitutions happen only at dead balls (out of bounds, timeout, foul, etc.) rather than randomly throughout the game. The one exception is injuries, they still lead to an immediate substitution

Although I did do some beta testing (join [the ZenGM Discord server](https://zengm.com/discord/) if you want to know about future betas), it's very likely that there is some new bug or some old simulation weirdness that I forgot about. If you notice anything that seems off, [please let me know](/contact/).

And now some technical details for those who are curious...

The original version of BBGM did not have a live sim feature, so you couldn't see the play-by-play. All you could see was the final box score. I still implemented the underlying simulation as play-by-play because I thought that would be easiest, the play-by-play didn't need to have a realistic clock. And that was also easiest. So I made a ton of simplifications related to the game clock - all possessions were the same length, game situation didn't affect substitutions, teams didn't do any clock management, teams didn't act differently depending on the score/clock, etc.

When I intially made the live sim UI many years ago, most of those simplifications still existed. Over the years I have gradually fixed some of them. Like I added special logic for teams playing faster when they're down late, intentionally fouling to prevent the offense from running off the clock, playing their best players late in close games, playing their bench players in blowouts, and trying for 2-for-1s at the end of periods.

Despite that, there were still a lot of weird situations related to the game clock that were difficult to fix without getting rid of one big assumption that had always been in my code - that the amount of time a possession takes is computed up front, and then you figure out what actually happens in the possession after that. With this update, that old unrealistic situation is now gone. Instead, the clock advances gradually through a possession based on the actual events in the game. It was a decent amount of effort to get that all working, but it made some things a lot easier.

Like how in the old version, you'd too often see fouls with 0 seconds on the clock. In real life, a foul stops the clock, so the only time you can get a foul with 0 on the clock is if the foul occurs after the shot. Which can happen, but it's rare. In BBGM, the clock didn't stop on a foul since the possession time was precomputed. So you'd get all these weird fouls with 0 seconds on the clock. Fixing that in the old version would have been complicated... I'd need some way to adjust the precomputed possession time after the fact. Messy. Now it's simply - just set isClockRunning to false when a foul happens, and it all just works. Clock stops when a foul happens, and you only get a foul with 0 on the clock for a very rare buzzer beater where the foul happens after the shot.

It's a similar story for a lot of the above stuff. It was all much easier to do after changing how the clock worked.

Similarly, changes to the play-by-play got easier after [the last update](https://zengm.com/blog/2023/11/play-by-play-redesign/) where I rewrote how the play-by-play text generation happened in BBGM and FBGM (baseball and hockey already were better since those are newer games, but for a long time I dreaded going back to fix my old basketball and football game sim code). So that prior update also enabled all of the changes above where more detail was added to the play-by-play.

Overall, my game sim code is still too messy. The basketball simulation code is the oldest part of the codebase, and it shows! But the last two updates have been really nice to do, since I am getting some synergy between cleaning up old code (motivated by making the simulation better) and improving the simulation (which is easier after cleaning up code).
