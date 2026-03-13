---
layout: post
title: Offensive Player of the Year (OPOY) award in FBGM
date: 2026-03-12
tags:
  - post
  - Awards
  - Football
---

Adding an OPOY award to FBGM is a commonly requested feature. Up until now I resisted because I thought OPOY was kind of a weird award. Usually the MVP is an offensive player, but then usually the OPOY is some other offensive player? But sometimes they are the same? Some weird logic in that award.

Well, as the guy writing the code for FBGM, I have the opportunity to make the logic whatever I want! So here's how it works:

<!--more-->

**If a defensive player wins MVP**, then OPOY is the best non-QB offensive player.

**If a QB wins MVP**, then the OPOY is the best non-QB offensive player. But there is an exception! If the QB had a way better season than the other candidate, then the QB wins both MVP and OPOY. I set the cutoff so that winning both MVP and OPOY should be rare, like once every 25 years in a league with default settings.

**If a non-QB wins MVP**, then he also wins OPOY.

So when you're looking at career award totals, QBs get MVPs for great seasons and also win OPOY for spectacular seasons. And other offensive players get OPOYs for great seasons and also win MVP for spectacular seasons.
