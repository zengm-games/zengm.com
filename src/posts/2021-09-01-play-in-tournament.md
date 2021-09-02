---
layout: post
title: Basketball GM now supports the play-in tournament
date: 2021-09-01
tags:
  - post
  - Playoffs
  - Settings
---

Version 2021.09.01.0705 of Basketball GM finally supports the play-in tournament. The play-in tournament is the weird pre-playoffs thing the NBA recently added, where the last two seeds in each conference are determined by a tournament involving the 7th through 10th best teams in the conference. First, the 7/8 and 9/10 teams play. The winner of the 7/8 game becomes the 7 seed in the real playoffs. Then the loser of the 7/8 game plays the winner of the 9/10 game for the final playoff spot.

It works the same way in BBGM, just generalized to all league types. So if you have only 4 teams per conference making the playoffs, then the play-in tournament will be between the 3-6 seeds. And if you set the playoffs to not be determined by conference, there will just be one play-in bracket to determine the bottom 2 overall playoff teams.

What does it look like in the game?

<!--more-->

The play-in tournament is enabled by default in BBGM for new random players leagues (assuming you have enough teams) and real players leagues since 2020. For existing leagues in BBGM and all leagues in Football GM and ZenGM Hockey, it is disabled by default. But you can enable it in any league at Tools > League Settings > Playoffs:

<figure><img src="/files/play-in-tournament-1.png" class="img-fluid"></figure>

If the play-in tournament is enabled, you'll see it appearing in a few different places in the UI.

On the Playoffs page, you'll see placeholder teams in the main playoff bracket until the play-in games complete:

<figure><img src="/files/play-in-tournament-2.png" class="img-fluid"></figure>

And at the bottom of the Playoffs page, you'll see the actual play-in tournament:

<figure><a href="/files/play-in-tournament-3.png"><img src="/files/play-in-tournament-3.png" class="img-fluid"></a></figure>

Just like the previous notifications for clinching a playoff spot, there is now an additional notification for clinching a spot in the play-in tournament. It also shows up on the standings page:

<figure><img src="/files/play-in-tournament-4.png" class="img-fluid"></figure>

The play-in games are a bit weird. In the NBA, they count as neither regular season nor playoff games, they are their own separate category: play-in games. Since I am reluctant to add a whole separate stat category to everywhere in the UI just for a couple games per season, BBGM treats them as playoff games for statistical purposes. Like play-in games will show up in a player's playoff stats.

However for the purposes of "did a team make the playoffs", BBGM does the same as the NBA and does not consider the losers of the play-in tournament as playoff teams. You will see this in the various history pages that list season outcomes, as well as in the draft. Play-in losers appear in the draft lottery along with all other non-playoff teams.

I think that covers everything. It was actually pretty complicated to implement all this stuff, and just for a couple teams to get an extra game before they're stomped by the top seeds in the playoffs? But when your 10th place team makes a run to the finals, I bet it will all feel worthwhile!
