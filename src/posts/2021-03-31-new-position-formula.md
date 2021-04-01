---
layout: post
title: New position formula for Basketball GM
date: 2021-03-31
tags:
  - post
  - Positions
---

Positions in Basketball GM are determined by player ratings. There's some complicated formula that takes player ratings as input and spits out a position. However it sometimes behaves a little strangely, and this is something people have complained about in the past, that sometimes you see drastic jumps in player positions like a PG becoming a C.

Hopefully today's change will improve things a bit. [@nicidob came up with a clever new position formula.](https://github.com/zengm-games/zengm/issues/375) Read on for details, but ultimately you probably won't notice a big change, most players will still have the same positions, and positions don't really matter much in BBGM.

This will take effect in all leagues as soon as you sim to a new season.

<!--more-->

The way the new position algorithm works is kind of cool. First, it assigns each position a numeric value, from 0 for PG to 4 for C. Intermediate positions are in between, like a FC is 3.5.

Then it takes all the real player ratings in BBGM and tries to build a model to predict the real positions of players from their BBGM ratings. This is done with linear regression, and it works pretty well (r<sup>2</sup> = 0.767).

Finally, that model is used to compute positions for players in your BBGM league, based on which numeric position a player is closest to.

Much simpler than the old spaghetti code of many different "if this then that" conditions that led to the sometimes unstable behavior of the old position algorithm.

Overall, almost all players either stay at the same position in both, or move just slightly (like a SG being relabeled as a G... can you really complain too much?). In a random league I created, here was the number of times players moved from old to new positions:

```
C -> C: 39
C -> F: 4
C -> FC: 56
C -> PF: 27
F -> F: 3
F -> FC: 3
F -> PF: 7
F -> SF: 1
FC -> C: 8
FC -> FC: 12
FC -> PF: 3
G -> G: 9
G -> GF: 4
G -> PG: 34
G -> SG: 7
GF -> F: 3
GF -> GF: 7
GF -> PF: 2
GF -> SF: 17
GF -> SG: 1
PF -> F: 80
PF -> FC: 10
PF -> PF: 29
PF -> SF: 23
PG -> F: 3
PG -> G: 12
PG -> GF: 7
PG -> PF: 1
PG -> PG: 56
PG -> SF: 2
PG -> SG: 2
SF -> F: 24
SF -> FC: 1
SF -> GF: 27
SF -> PF: 1
SF -> SF: 82
SF -> SG: 1
SG -> G: 18
SG -> GF: 60
SG -> PG: 5
SG -> SF: 9
SG -> SG: 50
```

Mostly mundane, except maybe that one PG who is now a PF. That was the type of player I mentioned earlier who was handled a bit strangely by the old algorithm. A tall player with decent perimeter skills, I think PF makes a lot more sense than PG, don't you agree? And now it's also much less likely he'll erraticly jump between PG and C during his career.

<figure><a href="/files/new-position-formula.png"><img src="/files/new-position-formula.png" class="img-fluid"></a></figure>
