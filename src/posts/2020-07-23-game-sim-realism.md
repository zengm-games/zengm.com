---
layout: post
title: Three improvements to game simulation realism
date: 2020-07-23
tags:
  - post
  - Game Simulation
  - GitHub
  - Realism
---

One of the fun things about Basketball GM is that [you can view the entire source code to the game](https://github.com/dumbmatter/gm-games), which opens up a level of modding and customization that is matched by few other games. Furthermore, you can even get your improvements included in the game itself. As [you can see](https://github.com/dumbmatter/gm-games/pulls?q=is%3Apr+is%3Amerged), that has resulted in a nice trickle of improvements from the community, including a recent PR from [icedjuro](https://github.com/icedjuro) which added the annual ratings change to player pages:

<!--more-->

<figure><img src="/files/ratings-overview.png" class="img-fluid"></figure>

But what I'm actually here to talk about is some work that [nicidob](https://nicidob.github.io/) recently did on game simulation realism. If you play through seasons quickly you won't even notice this stuff. But if you look a little more in detail at player stats and box scores, you'll probably appreciate these subtle improvements..

## 1. Tweaked shooting percentages to better match reality

In [PR 272](https://github.com/dumbmatter/gm-games/pull/272), nicidob a look at the shot locations data based on player positions in BBGM. He found that there were some big gaps between BBGM and the NBA, most noticeably:

- Rim shooting didn't take sufficient account of height
- Low Post shooting was too high and too dependent on height
- Mid Range shooting was too low

As you can see in the figure below, it is much more accurate after his adjustments.

<figure><a href="/files/gamesim-realism-1.png"><img src="/files/gamesim-realism-1.png" class="img-fluid"></a></figure>

## 2. Teams play differently depending on if they are winning or losing

You know how sometimes you're comfortably winning in a video game, and then the AI starts basically cheating in a desperate attempt to catch up and make the game interesting? Video games take it a little far sometimes, but the same thing does also happen in reality. [Here's some evidence from the NBA.](http://apbr.org/metrics/viewtopic.php?f=2&t=8501&start=0) Teams play better when they're losing, and worse when they're winning. In terms of magnitude, a 10 point margin influences performance by about the same amount as home court advantage.

Basketball GM does have some logic to rest stars when a blowout occurs. But besides that, current score margin had no impact on game simulation. This resulted in more blowouts in BBGM, which is no fun.

In [PR 276](https://github.com/dumbmatter/gm-games/pull/276), nicidob addressed this by adding a factor based on the current score margin to game simulation. The end result is closer games, without actually changing a team's overall winning percentage. This isn't saying "good teams win more" or anything like that, it's just saying "games tend to be closer, because teams adjust how they play when they're winning or losing".

You can see how the distribution of margin of victory has changed in the figure below.

<figure><img src="/files/gamesim-realism-2.png" class="img-fluid"></figure>

## 3. Update the fatigue system for a better distribution of playing time

In [PR 273](https://github.com/dumbmatter/gm-games/pull/273), nicidob made some adjustments to how fatigue is calculated in game simulation. Since fatigue is one of the primary factors the coach uses to influence substitutions, this produced some changes in how playing time is distributed. The most noticeable impact is that good players play a bit more. This is possibly the biggest of the three changes in terms of gameplay, because it will result in your top players being a little more important and your depth being a little less important.

<figure><img src="/files/gamesim-realism-3.png" class="img-fluid"></figure>
