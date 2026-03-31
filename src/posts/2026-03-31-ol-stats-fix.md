---
layout: post
title: Adding OL stats accidentally decreased the importance of OL
date: 2026-03-31
tags:
  - post
  - Bug Fix
  - Football
  - Game Simulation
  - Stats
---

The [offensive line stats](/blog/2026/03/offensive-line-stats/) recently added to FBGM have been very popular. They've also caused a bit of confusion for some people about if they changed the importance of OL in the game.

Previously, individual blocking matchups didn't exist, and instead it was some aggregate team-level "pass/run defense vs pass/run blocking" value. When adding OL stats I wanted them to be real, so I rewrote that code to simulate the blocking of individual OL so I could record PBW and RBW stats and have them actually be real meaningful things.

<!--more-->

The way I did this was logging that team-level value along with how many PBW/RBW a team got on each play, and then doing linear regression to find a formula to predict the old team-level value from the new PBW/RBW values. I tested this by simming some new leagues in FBGM and observing that indeed the performance of teams seemed similar before and after the change. I also did the same with some popular user-made FBGM rosters I thought that was good enough!

Unfortunately, some people noticed some strange behavior.

First was a few members of [the NZCFL](https://discord.gg/3MqFwwq), a multiplayer college football leauge simmed using FBGM. Because it's a college football league, there is a large disparity in talent between the best and worst teams, leading to some teams that win almost all of their games and some that lose almost all of their games. They noticed that instead those results were being compressed, that good teams weren't as good and bad teams weren't as bad. Maybe the really good/bad OL that some of those teams had was not as important any more?

They were correct. I figured this was because my regression and testing were considering only "normal" FBGM leagues, similar to what you get in a new league wtih default settings. The NZCFL has a very different talent distribution, so the old team-level value was way more extreme than anything you would normally see, and my new PBW/RBW formula simply could never take on such extreme values.

After a large amount of very annoying testing, I found a way to adjust my PBW/RBW formula so that it extended beyond its initial range and could produce a similar range of output as the old team-level system.

I thought that fixed it. But on [the ZenGM Discord server](https://zengm.com/discord/) I saw [a post from Jeb!](https://discord.com/channels/290013534023057409/1488007032870277241/1488007032870277241) containing some simulation results that seemed to show OL were not very important even in a normal league. He simmed a bunch of games and used linear regression to see how much each position contributed to winning. This is similar to how I calculate the team ovr formula for FBGM, with the biggest difference that I do a much larger sim to produce a better estimate. Jeb!'s sample size seemed not enough to conclude much, compared to that.

However... I had never rerun my team ovr calculation after making these changes! Why? Some combination of laziness (I have to let it sim for like 12 horus to generate enough data) and I thought my initial strategy (implementing the PBW/RBW effects by matching the old team-level values) meant that it wouldn't be necessary to recalculate team ovr since OL should be behaving the same. But this new analysis (even if not perfect) combined with what the NZCFL guys noticed made me rerun it.

So I did yesterday, and Jeb! was right, OL importance was way down after the OL stats update.

This raised a couple questions.

**Why didn't I notice this myself?** Okay, I should have run the team ovr formula and tested in weird leagues, then I would have. But it's not like I did no testing. Well, there's a reason I need so much data to calculate team ovr, it's that there is a fair amount of randomness in the sport of football. Also even though OL are important, they are just one of several important positions, so somewhat diminishing their importance has a somewhat subtle effect on outcomes, except in the case of a weird league like the NZCFL.

**Why didn't my PBW/RBW-based OL sim code work correctly?** To be honest, I'm not sure. The explanation for why it didn't work for the NZCFL made sense to me. Why it also isn't working right in normal leagues is less clear. I could speculate, but ultimately I'm still not really sure.

So ultimately I decided to roll back the game sim changes, while keeping the OL stats. That means PBW/RBW will still be calculated just like they have been the past few weeks, but they will no longer directly impact game sim, instead they will be "fake". I really don't like doing that. However it is true that they still will correlate with performance, since PBW/RBW are calculated from the same player ratings that go into the team-level blocking value. So they aren't completely meaningless, but still it's not an ideal situation.

Eventually I want to come back and do a better job of truly implementing OL stats. However after all this I'm kind of sick of working on this, so I think I will leave that for some time in the future.

Many thanks to all the people who helped me by reporting the weird behavior they saw!
