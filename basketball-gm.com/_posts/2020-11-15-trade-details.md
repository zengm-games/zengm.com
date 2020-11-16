---
layout: post
title: Improved trade details and a new Trade Summary page
date: 2020-11-15
tags:
- News Feed
- Trades
- UI
---

When you make a trade in [Basketball GM](https://play.basketball-gm.com/) or [Football GM](https://play.football-gm.com), a summary of that trade is logged and shows up in the transactions list and the news feed. A mildly annoying thing about that is how it handles draft picks. Sure it'll say the trade included a 2021 2nd round pick, but if you check back after the 2021 draft, there's no new information. It doesn't say which player was selected with the pick, which makes it difficult to evaluate trades.

I've gotten many requests to do something about that, and I'm happy to announce that I have finally done something!

<!--more-->

First, news feed and transaction log entries for trades will now update after draft picks are made to include which players were picked:

<img src="/files/trade-details-1.png" class="img-responsive" />

This also shows up in the Transactions section on player profile pages, even for players selected with traded picks. For example, this screenshot is from Silas Thurmond's profile page, showing that the pick used to draft him was acquired in a prior trade:

<img src="/files/trade-details-2.png" class="img-responsive" />

See that little (Details) link at the end of the log entries in both of those screenshots? That links to a new Trade Summary page:

<a href="/files/trade-details-3.png"><img src="/files/trade-details-3.png" class="img-responsive" /></a>

The Trade Summary page includes all of the traded assets, the results of traded draft picks, and a quick summary of which traded players had more productive careers after the trade (using WS in BBGM and AV in FBGM).

There is also a link to the Trade Summary page from the Roster page, in the Acquired column for players acquired in trades:

<img src="/files/trade-details-4.png" class="img-responsive" />

Previously those links went to the roster of the other team at the time of the trade, but now they go to the Trade Summary page.

All of these improvements only apply for trades made from now on. Old trades from before this update will continue to be displayed like they were previously.

I hope this new feature lets you have a lot of fun evaluating old trades and seeing who really came out on top!
