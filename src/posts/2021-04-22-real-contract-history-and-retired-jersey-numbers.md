---
layout: post
title: Real players leagues now include contract history and retired jersey numbers
date: 2021-04-22
tags:
  - post
  - New Feature
  - Real Players
---

In [last week's blog post about historical stats](/blog/2021/04/historical-stats/), I mentioned a few things that were missing. Today a couple of those are fixed.

Contract history for all players is now included in real players leagues. There are a couple caveats. It only goes back to 1985, because that's all the data I have. And the contracts are "BBGM-ified" - adjacent years are merged together to all be exactly the same amount, because BBGM does not support contracts that change over time. I'm not sure if this is actually a good idea... it is needed for the current contract, due to the aforementioned limitation in BBGM, but in theory I could instead import contract history that changes overtime.

Retired jersey numbers are also now included, at least for franchises with retired jersey numbers. The caveat here is that it's only retired jerseys for actual players. Some teams have retired jersey numbers for other people like coaches and announcers, and I could add those too. It's just that I don't have data on when those retirements happened. So for instance, if you start a league in 2000, I need to include only retired jerseys from up to 2000. For players I can do that by looking at when they retired. But I don't have that data for non-players, and I didn't want to go through and try to manually figure it out.

Despite the caveats, I hope these new features make real players mode even more immersive than it already is :)
