---
layout: post
title: Recent development, some small improvements (including AV for kickers and punters!), and future plans
date: 2020-07-09
tags:
- New Feature
---

Football GM has been in an interesting place in 2020. I haven't given it a lot of direct attention. I've been a lot more focused on [Basketball GM](https://basketball-gm.com/). Despite that, Football GM has gotten a lot of improvements. This is because BBGM and FBGM are built from the same codebase. Except for very sport-specific things, any improvements are made in both games at the same time.

All of the recent improvements to FBGM ([individual player import/export](https://basketball-gm.com/blog/2020/06/import-export-players/), [challenge modes](https://basketball-gm.com/blog/2020/06/league-creation-options/), [the news feed](https://basketball-gm.com/blog/2020/06/news-feed/), [more frivolities](https://basketball-gm.com/blog/2020/05/new-frivolities/), etc) were made this way. I was focused on improving BBGM, and FBGM just automatically benefited.

<!--more-->

Sport-specific stuff matters too though. I know there are a lot of football issues with FBGM, and no amount of work on BBGM will address those. So I just want to let you guys know that I do plan on improving the actual football parts of FBGM. And as a show of good faith, today I released a bunch of small improvements.

In the title of this post I mention AV for kickers and punters. Obviously putting that in the title is a little tongue-in-cheek, but it still matters, even if only a little it. Turns out I had missed the [latest AV writeup from Sports Reference](https://www.sports-reference.com/blog/approximate-value-methodology/) which includes formulas for kickers in punters. That's fixed now.

In addition to AV for kickers and punters, I also just released these improvements:

- Offensive lineman have more realistic weights
- Players are less likely to play multiple positions by default (you can still control your team with the depth chart)
- Fixed bug in AV calculation that was elevating values for passing stats and decreasing values for rushing stats
- Decreased the baseline injury rate a bit
- Decreased the amount of quarterback runs
- Increased the amount of sacks that league leaders get
- Decreased passing stats for elite QBs
- Rebalanced the amount of runs/passes to be more realistic
- Added a link to the box score of each playoff game from the playoffs bracket (actually this one is cheating... it's not football specific, it's in BBGM too!)

Where next? Well, there is a long list of small bugs and feature requests, similar to the things listed above. I hope to continue working through them. There has also been [a little talk about real rosters lately](https://old.reddit.com/r/Football_GM/comments/hlban2/rough_draft_of_nfl_rosters/). Hopefully this turns out as great as it has for BBGM, however do keep in mind that it's a lot harder to make football rosters than basketball rosters. In football you have more players, more ratings, and worse stats to judge players on.

I'm not going to post a specific roadmap for my future plans because I am notoriously unreliable at predicting what I'm actually going to work on in the future. However you should expect that my time will at least be spent a little more evenly on both FBGM and BBGM.

As always, [your feedback is welcome](/contact/). Even if I don't immediately do what you ask me to do, I am listening.
