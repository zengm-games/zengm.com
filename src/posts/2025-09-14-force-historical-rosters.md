---
layout: post
title: Force historical rosters in real players leagues
date: 2025-09-14
tags:
  - post
  - Customization
  - Real Player Determinism
  - Real Players
---

The latest update to Basketball GM adds a couple new settings that enable some new ways to play historical real players leagues: **Force Retire Real Players** and **Force Historical Rosters**.

First, let me describe Force Retire Real Players. When enabled, real players in your league will retire after the same season they did in real life. This works well with the existing Real Player Determinism (RPD) setting, if you want to see career arcs play out as they did in real life. Because previously there would be some cases where a guy would retire in real life, and then he has no BBGM ratings for subsequent years, but he hangs around in your league and possibly progs into a star. That won't happen if players like that are automatically retired!

<!--more-->

Without RPD, Force Retire Real Players may feel a bit strange - you could see stars retiring and scrubs hanging around for 20 years. So probably you want to use this with RPD, but that's up to you!

Force Retire Real Players only applies up to the current season (2026 as I am writing this), so for any players active in 2026 they will still retire based on BBGM's normal retirement algorithm.

One tricky part is how to handle players with gaps in their careers. It's tricky because there is a difference between "retired" (should not be available for anyone to sign) and "not retired, but just doing something else temporarily" (should be available to sign, since they probably would have been willing). And that's basically how it's handled - players deemed "actually retired" will retire, and then come back in the season they made their real life return. And players who are not actually retired (such as playing in another pro league) will not retire for those gap years.

Then there is the other new setting, Force Historical Rosters. When this is enabled, in the preseason every player is moved to the team they played for that year. So if you sim from 1947 to 2026, all teams will have their real life rosters for every season.

This enables you to do a lot of "what if" scenarios. For instance you can replay the whole history of the league and ask which players are overrated/underrated by BBGM (or maybe who got lucky/unlucky IRL). Which teams actually should have won the most championships? What if you delete one player from history, what effect does that have on the league? Stuff like that.

Like the other new setting, this works well with RPD, but it's up to you how to set it.

Some other things are not up to you, though. When you enable Force Historical Rosters, several other things change internally too. Most notably, AI teams won't make any trades or signings (except if under the roster limit), and the other new setting (Force Retire Real Players) is automatically in effect too.

This also lasts up until the current season, at which point it will automatically be disabled and then you can keep playing your league like normal if you desire.

Some limitations of Force Historical Rosters:

- Players are assigned to teams in the preseason only. So for mid season transactions, they happen early. It picks the team you'd see if starting a league in the playoffs.

- Because I am lazy, it uses randomly generated contracts rather than real historical contracts.

- What I wrote above for Force Retire Real Players about the ambiguity of some career gaps also applies here.

Despite those limitations, I'm having fun playing around with these new settings, and I hope you do too!
