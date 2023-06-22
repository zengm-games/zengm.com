---
layout: post
title: Several small Football GM stat/simulation improvements
date: 2023-06-21
tags:
  - post
  - Football
  - Game Simulation
  - Stats
---

Simulated sports can never be exactly the same as real sports, but the closer it gets, the better. So when you notice something weird in the stats or in the play-by-play log, please [let me know](/contact/). That's how I found out about all these little issues in Football GM that I just fixed in version 2023.06.21.1277:

<!--more-->

- Decreased yards per catch for RBs

- Interceptions depend more on the defender's ratings and are more top-heavy, meaning the best CBs now average more interceptions

- Increased yards per carry for QBs when scrambling (when they drop back to pass and later decide to break it off for a run)

- Decreased QB fumbles

- In overtime when a team just needs a FG to win the game (like when both teams have possessed the ball already), teams will kick a short FG rather than keep playing for a TD. The exact FG distance cutoff for doing this depends on how good the kicker is, but it's generally something like 30-35 yards.

- Fixed a bug where sometimes it would say "1st and 10" after a turnover even if there were less than 10 yards to the endzone
