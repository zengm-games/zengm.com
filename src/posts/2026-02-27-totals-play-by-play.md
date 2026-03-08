---
layout: post
title: Stat totals in the play-by-play
date: 2026-02-27
tags:
  - post
  - Live Sim
  - UI
---

When viewing a live sim of a game (or when viewing a box score with a scoring summary, so in all the sports besides basketball) you will now see total values of key stats shown. For instance, when a player in ZenGM Baseball hits their 40th home run, it will say **Home run (40)** rather than just **Home run**.

The implementation is slightly different in all the sports.

<!--more-->

In Basketball GM, it shows the current game totals rather than season totals, since I think that's what people care about in basketball. Like people care about how many points a player scores in a game, but nobody cares if they scored 900 points or 1100 points total this season.

<figure class="overflow-auto"><img src="/files/totals-play-by-play-1.png"></figure>

In the other sports, season totals are shown, because those are the more relevant quantities. The exception is for strikeouts in baseball, where I thought you might rather see how a pitcher is doing this game. So that may be a little confusing, but I think I like it. Here's an example showing a batter hitting his 20th home run _of the season_ and then the pitcher getting his 9th strikeout _of the game_.

<figure class="overflow-auto"><img src="/files/totals-play-by-play-2.png"></figure>

Hockey is a little more straightforward, showing the season totals of goals and assists.

<figure class="overflow-auto"><img src="/files/totals-play-by-play-3.png"></figure>

And Football GM... honestly it's a little ugly to have longer stat names, but I'm not sure else how to show both passing TD and receiving TD together.

<figure class="overflow-auto"><img src="/files/totals-play-by-play-4.png"></figure>
