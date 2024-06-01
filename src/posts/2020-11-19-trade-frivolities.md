---
layout: post
title: "Trade frivolities: biggest trades and most lopsided trades"
date: 2020-11-19
tags:
  - post
  - Frivolities
  - New Feature
  - Trades
  - UI
---

Following up to the [recent](/blog/2020/11/trade-details/) [updates](https://www.reddit.com/r/BasketballGM/comments/jvn292/since_its_now_trading_season_i_added_some_charts/) that added a lot of detail to historical trades, today I added two new frivolities, in a brand new Trades section:

**Biggest Trades:** Trades involving the best players and prospects.

**Most Lopsided Trades:** Trades where one team's assets produced a lot more value than the other.

You can find them within a league at Tools > Frivolities.

<!--more-->

Biggest Trades uses an extremely simple formula to identify the biggest trades, but it works well enough. It scans over all past trades, finds the player in the trade with the maximum value of (ovr + 0.25 \* pot), and then uses that to sort all the trades. This does include draft picks, but only after a player is actually selected. Here's what it looks like:

<figure class="overflow-auto"><img src="/files/trade-frivolities-1.png"></figure>

For Most Lopsided Trades, it finds the trades where one side produced a lot more value after the trade (based on total win shares in BBGM, and approximate value in FBGM). This is the same metric displayed on the [Trade Summary](/blog/2020/11/trade-details/) page. Here's what it looks like:

<figure class="overflow-auto"><img src="/files/trade-frivolities-2.png"></figure>

In total, I think all of these historical trade updates this week are going to make it a lot more fun to review the history of your league. If you do that and find an interesting trade, post about it on [Reddit](https://www.reddit.com/r/BasketballGM/), [Twitter](https://x.com/basketball_gm/), or [Discord](/discord/)!
