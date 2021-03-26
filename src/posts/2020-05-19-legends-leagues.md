---
layout: post
title: '"Legends" leagues'
date: 2020-05-19
tags:
  - post
  - New Feature
  - Real Players
---

Now that Basketball GM has [real rosters back to 1956](/blog/2020/05/beta-real-rosters-back-to-1956/), it's possible to make all kinds of fun fictional rosters using real players. Today I am releasing "Legends" mode, which lets you create a league where each team is filled with the best players from that franchise.

You can either start an "All Time" legends league using all players, or pick a decade to be restricted to teams and players from that decade. [Give it a try](https://play.basketball-gm.com/) or read on for more details about how the rosters are generated.

<!--more-->

Undoubtedly some of you will ask "Why is Player X on Team Y and not Team Z?" or "Why did my favorite player not make the cut?"

It's not a conspiracy. I'm not picking my favorite players. I'm just letting a simple algorithm build the rosters.

First, it starts with every player in every historical roster, including multiple versions of the same player. (This actually goes back to 1952 rather than 1956, because BBGM's real player ratings do currently go back that far, I just haven't enabled leagues starting further back than 1956 because it would be unsatisfying without support for contraction of teams.)

If you select a decade, it filters that list of player seasons to only that decade.

That list of players is sorted by their overall rating.

The first player is taken and assigned to the franchise he played for that season. All other seasons for that player are removed. This means a player can only appear once in a legends league, and he will appear on the team he had the best individual season for, according to BBGM's player rating system.

Yes, this does correctly handle Charlotte moving to New Orleans, and then a new franchise being created in Charlotte and officially retaking the previous Charlotte franchise's history.

This process is repeated, taking the top remaining player and assigning him to his corresponding team.

Once a team reaches 15 players, no more players can be added. So if the top player remaining belongs to a full team, he is discarded. Other seasons of that same player remain and can potentially be assigned to another team. This is the only way you can have a player in a "legends" league who is not at his peak.

This is repeated until all teams have 15 players.

For the all-decade teams, play style settings are set to the last year of the decade, e.g. 1959 for the 1950s legends.

Ultimately, you may still notice some weirdness with the legends rosters. Some great players may be missing, or may be behind lesser players. Sadly, historical player ratings are not yet perfect, and that explains most of it. Despite that, I hope you still have some fun with these new rosters!
