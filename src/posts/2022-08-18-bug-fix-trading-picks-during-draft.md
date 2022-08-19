---
layout: post
title: Bug fix for trading picks during the draft
date: 2022-08-18
tags:
  - post
  - Bug Fix
  - Draft
  - Trades
---

This isn't that important of a bug fix, and I bet most people won't notice either way. But it does need a bit of explanation to make sense, so here is a blog post!

<!--more-->

The value of a draft pick is determined by the value of the player projected to be available at that draft pick. For future drafts, that is pretty uncertain. But for the current season it is pretty certain, up until the lottery when it becomes very certain.

On top of this, rebuilding teams more highly value future assets and contending teams more highly value current assets. So rebuilding teams love future draft picks.

However a draft pick in the current draft isn't really a future asset, it's more like a current asset, because very soon it will be a real player and everyone has a pretty good idea how strong the draft class is. So it makes sense to not give the "future draft pick" bonus to those draft picks, and instead treat them exactly the same as actual players.

The end result of this is that, in an ongoing draft, it will be a little easier to trade for picks from rebuilding teams and it will be a little harder to trade for picks from contending teams. Outside of an ongoing draft, nothing has changed.

This will also fix the bug that some people noticed where a team would refuse to trade you a draft pick, but then right after drafting a player they were more willing to trade away the player. That was due to the aforementioned "future draft pick" bonus being applied to the pick but then no being applied after the player was selected.
