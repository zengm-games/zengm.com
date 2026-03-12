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

**If a defensive player wins MVP**, then OPOY is the best offensive player. That's pretty simple.

**If a QB wins OPOY**, then the OPOY is the best non-QB offensive player. But there is an exception! If the QB had a way better season than the other candidate, then the QB wins both MVP and OPOY.

**If a non-QB wins OPOY**, then the OPOY is the best other offensive player. Same exception as above applies though, so the MVP could win OPOY if they are dominant enough.

I set the cutoff so that winning both MVP and OPOY should be rare, like once every 25 years in a league with default settings.
