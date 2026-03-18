---
layout: post
title: Updated FBGM award formulas
date: 2026-03-17
tags:
  - post
  - Awards
  - Football
---

Okay this is like 3 updates in a row about FBGM awards which is kind of silly, but I think things are improving at least!

This update fixes two problems with the old awards system:

1. Previously most awards were based on AV, which is kind of weird in some situations.

2. The defensive awards were not based on AV, which meant you could have one defensive player win MVP but not even be in the top 10 for DPOY - very weird!

So, what's the problem with AV?

<!--more-->

AV ([Approximate Value](https://www.pro-football-reference.com/about/approximate_value.htm)) is a great stat because it compares across all positions on the same scale. That's nice for an award like MVP.

The problem with AV is that sometimes the results just look a little weird. For instance if you have two QBs and one has better "traditional stats" (yards, TD, interceptions, Cmp%), you expect him to rank higher in the MVP race. But for AV it didn't always work that way, because AV has a large component from team stats. If the QB with lesser stats played for a more efficient offense and had less help from his run game, he might have a higher AV.

Maybe that is a good thing, but more often than not I think it just didn't agree with how people expect the MVP voting to go.

This is part of the reason I stopped using it for defensive awards. The other reason was because I only store total AV, so then players who play both offense and defense (rare but not unheard of) kind of break things.

I could have fixed this by tweaking AV to work more how I want, and by storing separate components of AV for different stats/positions.

Instead, I took a simpler approach. All awards are based on simple formulas similar to fantasy points, but a bit more balanced across positions.

This means award winners will no longer have those weird situations where someone with much worse stats wins. And it means all the different awards are consistent, so if a defensive player wins MVP he will also win DPOY (unless he was getting some MVP points from offensive or speical teams plays, which don't count for DPOY).

There are also some nice implications for weird edge cases that weren't handled properly previously but now are. Some situations I came across in my testing:

- A CB with 9 interceptions wins MVP, but finishes 2nd in DPOY to a DL with 28 sacks. Why? Because the CB also had 2 kick return TDs, which count for MVP, but not for DPOY.

- A WR who also played CB won MVP due to getting credit for both offensive and defensive contributions, but just one of those alone was not enough to win OPOY or DPOY.
