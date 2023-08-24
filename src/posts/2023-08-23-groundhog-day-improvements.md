---
layout: post
title: Groundhog Day improvements, including a "players only" option
date: 2023-08-23
tags:
  - post
  - New Feature
---

Groundhog Day is a cool feature that lets you replay the same season over and over again. At the end of the playoffs, rather than proceeding to the draft and free agency, it just takes you directly to the next preseason. All player ratings, ages, injuries, and teams are reset to the same as they were the previous season. And you can just keep going as long as you want.

This is nice if you want to see what happens when a season is simulated multiple times. Like you can auto play 100 seasons and then see what the probability of each team winning a championship in that season is. You can also use it to replay the same season, like a challenge - what's the best I can do, given the same starting position?

<!--more-->

<figure class="figure">
  <img src="/files/groundhog-day-1.jpg" class="figure-img img-fluid" alt="A screenshot from the movie Groundhog Day">
  <figcaption class="figure-caption">Fun fact: I have never seen this movie</figcaption>
</figure>

But some people have also asked me for a different type of Groundhog Day mode, where players stay the same (no aging, no progs, no draft, no retirement) but transactions persist. So trades still persist across seasons, and players enter free agency when contracts expire.

That is now available in the new "players only" Groundhog Day mode:

<figure><img src="/files/groundhog-day-2.png" class="img-fluid"></figure>

"Players and rosters" is just how it used to work. Any existing leagues with Groundhog Day enabled will be switched to that option.

Additionally, I made one other improvement that affects both Groundhog Day modes. In both modes, potential doesn't matter, because ratings never change. But previously potential and age were being used when computing a player's value (used for trades, contracts, etc.), no different than a normal league. Now, when Groundhog Day is enabled, player value is based only on their current ratings/stats, not on potential or age.
