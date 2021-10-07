---
layout: post
title: Players act differently when they're in foul trouble
date: 2021-10-06
tags:
  - post
  - Basketball
  - Game Simulation
---

There are many ways in which my video games differ from reality. One is fouling in Basketball GM. In real life, everybody knows about foul trouble. If a player gets too many fouls too early, his coach might sub him out. If he stays in the game, he's probably going to try to avoid fouling by being less aggressive on defense. Common sense stuff.

Until today, none of that was in BBGM. Players would play with the same level of aggression regardless of the foul situation, and substitution patterns had nothing to do with fouls. The end result was that foul outs were more common in BBGM than in real life. Especially really early foul outs. It's really frustrating when it's game 7 of the finals and your star decides to foul out in the 2nd quarter while your coach does nothing about it!

Well, that's not going to happen any more, because now BBGM knows about foul trouble.

<!--more-->

First, let's define "foul trouble". It's now calculated in BBGM by multiplying the foul limit (default: 6) by the fraction of the game that's complete, and then rounding up.

Example: halfway through the 2nd quarter, that fraction is 1.5/4 or 0.375. 0.375 \* 6 is 2.25. Then we round up to get 3. So if it's halfway through the 2nd quarter, a player with 0, 1, or 2 fouls is not in foul trouble. A player with 3 fouls is considered to be in foul trouble. And a player with more than 3 fouls is considered to be in extreme foul trouble.

There are special cases towards the beginning and end of games. At the beginning, "foul trouble" must mean a minimum of 2 fouls, so a single foul early in the game doesn't matter much. And at the end of games (in the last 8 minutes, in overtime, or when the Elam Ending is active) foul trouble is ignored completely so your best players give their all.

Three things happen to players in foul trouble:

1. The coach is more likely to sub them out.
2. They commit fewer defensive fouls.
3. They play worse defense.

For players in extreme foul trouble, all of those things get more pronounced.

It's not the biggest effect. It is still possible for a player in extreme foul trouble to commit fouls. And a great defender who is in extreme foul trouble is still going to play pretty good defense. In total, you probably won't see much effect on player stats or team stats, both because the effects are subtle and because usually players are not in foul trouble, especially after making the above changes.

The main thing you may notice is fewer foul outs. In a random players league with default settings, it decreased from about 700 per season to about 450 per season, which is roughly what is seen in the NBA, although [that varies a lot](https://fivethirtyeight.com/features/its-early-but-there-have-been-a-lot-of-nba-foul-outs/). If you watch live sims, you'll also notice that there are fewer very early foul outs, and that players in foul trouble will sometimes get subbed out earlier than normal.
