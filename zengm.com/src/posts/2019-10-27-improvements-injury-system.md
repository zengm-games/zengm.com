---
layout: post
title: Improvements to the injury system
date: 2019-10-27
tags:
  - post
  - Injuries
  - New Feature
  - UI
---

Today I released new versions of [Basketball GM](https://play.basketball-gm.com/) and [Football GM](https://play.football-gm.com/) that contain some improvements to injuries.

In the past, each player (except quarterbacks in FBGM) had an equal probability of getting injured. That's now been changed to give older players an increased injury risk and younger players a decreased injury risk. This both makes sense and is [supported by data showing a 3% increase in injury risk per year as a player ages](https://www.ncbi.nlm.nih.gov/pubmed/29771139).

<!--more-->

Another change is related to long-term effects of serious injuries. It's actually been true for a while that serious injuries can lead to decreased athleticism ratings (jumping in BBGM, throwing power in FBGM, and speed and endurance in both), but probably not many people noticed it because the UI does not do a good job of telling you about it. The ratings would just be silently updated with no notification.

Now you can very clearly see the effects of serious injuries when viewing a player. When a serious injury results in a decline in ratings, he gets a new entry in his Player Ratings table. Here's an example of a player who lost some athleticism due to a torn meniscus:

<img alt="Player ratings change after severe injury" src="/files/injuries-1.png" style="max-width: 100%">

Additionally, every injury is logged in a new Injuries table on player pages. Here's the same player as above after this one injury:

<img alt="Table showing all past injuries" src="/files/injuries-2.png" style="max-width: 100%">

That's it for now! There are plenty more improvements to injuries that I'd like to make in the future, such as having past injuries leading to increased future injury risk, and letting player play through minor injuries. Some day!
