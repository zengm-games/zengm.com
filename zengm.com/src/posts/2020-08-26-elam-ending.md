---
layout: post
title: The Elam Ending comes to BBGM
date: 2020-08-26
tags:
  - post
  - Game Simulation
  - New Feature
---

If you watched the 2020 NBA All-Star Game or The Basketball Tournament, you're familiar with the Elam Ending, an exciting and creative new idea in the basketball world. If not, [check out this great introduction by Zach Lowe](https://www.espn.com/nba/story/_/id/19078511/zach-lowe-basketball-tournament-innovative-end-game-rule), which was how I first heard of it a few years ago.

The basic idea is pretty simple. Instead of a game ending when time runs out, have it end when a team hits a target score. But how do you pick the target score, so it doesn't come really early or late? You start a game like normal, play up until you hit some time limit, and then set the target to be "the leading team's score, plus some extra amount". For example, say with 4 minutes left in the 4th quarter in a 93-90 game, suddenly the clock disappears and it becomes "first to 101 wins".

There's a lot of advantages to this system. No parade of free throws as the losing team fouls to catch up - with the Elam Ending, fouls never help you. No endless timeouts to save precious seconds on the clock - with the Elam Ending, there is no clock. No boring ending with the winning team just trying to run out the clock - with the Elam Ending, you can't win by doing nothing, you need to hit that target score.

It's such a clear and obvious improvement that it went from some random guy's crazy idea to the NBA All-Star Game in a matter of years. And now it's reached yet another milestone: the Elam Ending is in Basketball GM!

<!--more-->

By default, it is only enabled in the All-Star Game. But in the God Mode options, you can enable it for other games too. You can also customize the parameters to decide when the Elam Ending begins and how many points are added to set the target score:

<a href="/files/elam-ending-options.png"><img src="/files/elam-ending-options.png" class="img-responsive" /></a>

There are several changes in the game simulation engine to support the Elam Ending, because it does significantly impact late game strategy. For example, in a normal Basketball GM game, teams will foul when they're down late. But with the Elam Ending enabled, that does not happen.

The live game sim experience has also been enhanced for Elam Ending games. In the fast forward menu, instead of being able to skip to the last 2 minutes of the game, you can skip to the beginning of the Elam Ending:

<img src="/files/elam-ending-fast-forward.png" class="img-responsive" />

And when the Elam Ending begins, the game clock is replaced with a target score:

<img src="/files/elam-ending-target.png" class="img-responsive" />

Adding the Elam Ending to Basketball GM is my one tiny contribution towards the larger goal of getting it everywhere. High school, college, pro - they'll all be better when they switch!
