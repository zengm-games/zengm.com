---
layout: post
title: Start real players leagues at different times (preseason, playoffs, draft, after draft) in any season
date: 2020-10-17
tags:
  - post
  - New Feature
  - Real Players
---

Portland fans, have you ever wondered what would happen if this draft went differently?

<figure><img src="/files/start-any-time-1.png" class="img-fluid" /></figure>

Dallas fans, have you ever wished for another shot at these playoffs?

<figure><img src="/files/start-any-time-2.png" class="img-fluid" /></figure>

One of the fun things you can do in Basketball GM is re-run historical situations. But the ones above were tricky to do, because although you could create a league with real rosters from 1984 or 2007, you could only start at the beginning of the season. Play the whole season again and maybe Portland doesn't wind up with the #2 pick, or maybe Dallas doesn't play Golden State in the first round.

That's why today I'm releasing a new feature. In addition to being able to start each historical season in the preseason, you can also start at the beginning of the playoffs, the draft, or after the draft:

<figure><img src="/files/start-any-time-3.png" class="img-fluid" /></figure>

This is also true for the current season, so you can create leagues starting today, right before the 2020 draft.

[Go give it a try now](https://play.basketball-gm.com/new_league/real), or read on for more details.

<!--more-->

## Starting in the preseason

...this is how it's always worked! Nothing new here.

## Starting at the playoffs

If you start at the playoffs, real team records and playoff seeds will be used to set up the first round of the playoffs. Rosters are a little different too. I did my best to figure out each player's team at the beginning and end of the regular season. It's not perfect, but it works pretty well. So if you start at the playoffs, you start with playoff rosters.

One thing missing is player and team stats from the regular season. I do want to include them at some point, I just had to draw the line somewhere to release this feature, otherwise it would be stuck in development forever. Stats can take up a lot of space too, so it's a concern for mobile performance... that's a lot of extra data that will need to be downloaded. But I will do it eventually!

## Starting at the draft

If you start at the draft, then the order of picks in the draft also matches reality. This was always true for 2020 rosters, but previously was not the case for historical seasons. Why? Because while I can look at draft results and easily see which team owned each pick, I don't have data on when exactly they were traded. Like if a league starts at the beginning of the 1992 season, I don't know which future picks have already been traded and which have not yet. So I just gave everyone their picks and called it a day. But if you're starting right at the draft, then I do know which teams controlled which picks, and I can assign them to the correct teams, at least for the current season.

In addition to the correct ownership of picks, the positions of picks are also included. So this is after the draft lottery. In the future I'd like to add the ability to start before the draft lottery.

Real playoff results and awards for the current season are stored and viewable too.

Starting at the draft makes a lot of sense, I think. A lot of teams change their GM at this time so the new GM can have a full offseason to assemble his roster. (RIP Daryl Morey, but since [you already know about Basketball GM](https://old.reddit.com/r/nba/comments/1ki6w2/iam_the_houston_rockets_gm_ama_offseason_addition/cbp7ei9/?context=1) I'm sure you'll be able to keep yourself busy.)

## Starting after the draft

If you start after the draft, the results of the real draft are stored and drafted players are added to their teams.

## Other changes

Since this has been in development for a little while, today I'm also releasing some other changes that I've been working on:

- Updates to the 2020 rosters, including roster moves, ratings tweaks, and new draft prospects.

- Added "Won Championship" entries to player awards for past seasons in real players leagues (this isn't necessarily perfect, it's based on the same method to determine playoff rosters mentioned above).

- Some improvements to the trade AI, particularly related to how it values draft picks. [[1]](https://old.reddit.com/r/BasketballGM/comments/ja6095/want_to_test_some_improvements_to_the_trade_ai/) [[2]](https://old.reddit.com/r/Football_GM/comments/ja60au/want_to_test_some_improvements_to_the_trade_ai/)

[Feedback is welcome on any of these improvements, or anything else on your mind!](https://basketball-gm.com/contact/)
