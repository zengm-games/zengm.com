---
layout: post
title: Neutral site for playoff/finals games
date: 2024-08-04
tags:
  - post
  - Game Simulation
  - New Feature
---

This is yet another blog post to explain a minor new feature!

In the NFL, the Super Bowl is played at a neutral site, so neither team gets a home field advantage.

A few years ago, I added a similar feature to FBGM, so that in FBGM the championship game has no home field advantage.

The problem was, this wasn't exposed in the UI anywhere, so it wasn't clear what was happening except for people who very carefully pay attention to the [changelog](/changelog/). Some people were even manually turning off the home field advantage before playing the championship game, even though that was not necessary because it was already silently happening behind the scenes.

<!--more-->

Now there is actually a UI for this feature so you can see what the hell is going on. There is a new "Play Games at Neutral Sites" setting which allows you to enable neutral site games for either the entire playoffs or just the finals:

<figure><img src="/files/neutral-site.png" class="img-fluid"></figure>

By default that is set to finals only for FBGM, and never for the other sports.

The point spread for games now correctly accounts for this setting, whereas previously the point spread in FBGM erroneously included the home field advantage effect for the championship game, even though it did not affect the actual game simulation.

You can also see "Played at a neutral site" at the bottom of the box score (below the attendance) for any games that were played at a neutral site. Note that this only applies to games simmed from now on, it won't show up for old box scores in FBGM where there was already no home field advantage in the finals.

And one last tiny detail, in the list of games in the game log, for a neutral site game neither team will show up with "@" in front of their abbreviation.
