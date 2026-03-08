---
layout: post
title: Offensive line stats
date: 2026-03-08
tags:
  - post
  - Football
  - Game Simulation
  - Stats
---

Offensie line (OL) is an interesting position in football because it's extremely important but there are no traditioanl stats for OLs. Like if you go to [the player page for an OL on espn.com](https://www.espn.com/nfl/player/_/id/4035662/garett-bolles) you see literally no stats. There are some non-standard or advanced stats people use for OL, but they tend to be either qualitative or not very informative.

FBGM has never had OL stats. I did it this way because of what I wrote above - I felt like OL stats were kind of weird and uncommon, so nobody would miss them. But I was wrong about that. Many users have asked me for OL stats, and it does make sense that people want some way to get insight into what their OL are doing.

Well, now FBGM has OL stats! The stats I chose to include are pass block win rate (PBWR), run block win rate (RBWR), and sacks allowed.

<!--more-->

The main purpose of OL is to block, so PBWR and RBWR seemed to me like the most relevant stats to include. [ESPN Analytics defines them as:](https://www.espn.com/nfl/story/_/id/46138675/2025-nfl-win-rates-top-teams-players-rankings-pass-run-block) whether the OL can sustain their blocks for at least 2.5 seconds. That's kind of an arbitrary cutoff, but roughly the idea is "how often does the OL do a good job?"

In FBGM, at the start of each passing or running play, it calculates PBW/RBW for each OL, based on their ratings and the ratings of the opposing defense. Then it uses those PBW/RBW results to influence various things in the game, such as how many yards the RB gains or what is the probability of the QB being sacked.

Previously those calculations used OL ratings directly. now they use these PBW/RBW results. So that does mean game simulation works a little differently now. But I tried to tune it so the overall results are quite similar, at least for leagues with normal ratings.

In addition to PBWR and RBWR, I also added Sacks Allowed as a stat. This is probably less informative than PBWR for judging player quality, but it still gives you some information about what happened.

You can view OL stats on any stats page - player stats, team stats, league stats, league leaders, player profile pages, box scores, etc. Here is how it looks on the player stats page:

<figure class="overflow-auto"><img src="/files/offensive-line-stats-1.png"></figure>

Another change is how the approximate value (AV) stat is calculated for OL. For those who are not familiar with AV, [it's an "all in one" stat for football](https://www.pro-football-reference.com/about/approximate_value.htm) that calculates an overall score for any player at any position, similar to things like WAR in baseball or WS in basketball.

But since AV is based on normal box score stats, it is pretty rudimentary for OL. The only individual stats it has are GS and GP! So as a hack to at least add some information, it gives bonus points to players on the All League team.

That actually works somewhat well IRL because informed voters pick the All League teams. But it didn't make any sense in FBGM because the All League teams themselves are generated from player stats, which don't exist for OL. So it would just wind up putting the OL from the best offensive teams on the All League team, and then circularly awarding them higher AV due to that.

Now, AV is based on the PBW/RBW stats (in addition to overall offensive performance, to keep it similar to other positional AV calculations).

So here's something you wouldn't see before on a team's roster page: two great OL with very high AVs, and the rest of the OL with much lower AVs.

<figure class="overflow-auto"><img src="/files/offensive-line-stats-2.png"></figure>
