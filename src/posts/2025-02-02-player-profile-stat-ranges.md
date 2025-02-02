---
layout: post
title: View career totals/averages for ranges of seasons on player profile pages
date: 2025-02-02
tags:
  - post
  - New Feature
  - UI
  - Stats
---

On player profile pages, you can now view career totals/averages for ranges of seasons. First you click this button below any player stats table (except fielding in baseball, cause I didn't want to have to worry about multiple positions):

<figure class="overflow-auto"><img src="/files/player-profile-stat-ranges-1.png"></a></figure>

Then you get an extra row at the bottom of the table where you can select a range of seasons to sum over:

<!--more-->

<figure class="overflow-auto"><img src="/files/player-profile-stat-ranges-2.png"></a></figure>

This is inspired by the [Sports Reference](https://www.sports-reference.com/) sites where you can click on two rows of player stats to activate a similar feature:

<figure class="overflow-auto"><img src="/files/player-profile-stat-ranges-3.png"></a></figure>

However their implementation has always annoyed me a little.

- It's confusing to change the range after the initial selection. Like what happens when you click and there is already a highlighted section. It resets? It picks a new range with the first and third clicks? It picks a new range with the second and third clicks? I can never remember.

- It's not discoverable. You have to just know you can click the table rows to activate this feature, or accidentally activate it some time.

- The floating window blocks part of the page below it.

I think my UI solves all these issues, and I hope you find it easy to use.
