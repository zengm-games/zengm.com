---
layout: post
title: Automatic ticket prices
date: 2021-05-25
tags:
  - post
  - AI
  - Finances
  - UI
---

Over at [zengm.com](https://zengm.com/) it says:

> Simulation games need depth, but they need the right amount of depth with a UI to help you make sense of it. We seek to avoid mandatory micromanagement as much as possible. Video games should be fun, not tedious.

One area where my games have failed in that regard is finances. Finances can be optimized through micromanagement, and that sucks. Today one area of finance micromanagement has been removed: ticket prices.

<!--more-->

## Auto ticket price

At Team > Finances, there is a new checkbox for "Auto ticket price":

<figure><img alt="Screenshot of the auto ticket price checkbox" src="/files/auto-ticket-price-1.png" class="img-fluid"></a></figure>

When enabled, it will automatically set the ticket price to the highest value that will still usually result in a sellout (there is still game-to-game randomness, so it won't quite be 100% sellouts).

<span class="text-highlight">It's now enabled by default for all leagues</span>, since it's so useful that I think almost everyone will want to use it.

There is one tricky part with all this. In the past, teams often set their ticket price very stupidly - either so high there were empty seats, or so low that it could have been raised while still selling out (especially in FBGM and ZGMH). So when I enabled auto ticket prices for all teams, they started making a lot more money. That goes both for AI teams and for user-controlled teams that just kept the default ticket price.

To counteract that, I globally decreased the demand for tickets, resulting in lower attendance for the same ticket price. The end result is that leaguewide teams now make about the same amount of revenue that they did before this update - they make less because demand is lower, more because ticket price is optimized, and the net result is about 0, although there may be some individual winners and losers.

If you didn't previously micromanage your ticket prices, you won't notice much of a change. But if you did previously micromanage your ticket prices, this update will make the game harder for you, because there is no longer any advantage to be gained by doing that.

Another fun thing about this feature: teams will change their ticket prices throughout the season, based on all the factors that influence demand for tickets (hype, population, and facilities spending rank over the pats 3 seasons).

Also, ticket prices are now shown at League > Finances, although only for the current season because past ticket prices are not yet stored. It's kind of fun to be able to see the leaguewide ticket price distribution in one place.

And one other improvement deserves its own section in this blog post:

## Playoffs ticket price adjustment

Just as in real life, tickets to playoff games are more in demand than tickets to regular season games. This results in higher attendance to playoff games. But what if you're already selling out regular season games? Then playoff games will still sell out, even if you raise the price a bit. It's always been a good strategy to raise your ticket price in the playoffs and make some extra money.

But how much to raise it? And what if you forget to raise it, or forget to drop it back down next regular season? Annoying stuff.

Now, ticket prices automatically increase in the playoffs, by exactly the amount that demand increases. During the playoffs, it's shown like this at Team > Finances:

<figure><img alt="Screenshot playoff ticket price indicator" src="/files/auto-ticket-price-2.png" class="img-fluid"></a></figure>

This applies regardless of if you have the "auth ticket prices" option enabled. Even if you manually set a ticket price, it will still optimally increase in the playoffs.

If you'd been manually raising ticket prices in the playoffs, you should stop doing that now.

Overall, I think these updates get rid of a bit of annoying micromanagement and make the game feel a bit more intelligent and dynamic. There's still a lot of work left to do on improving the rest of the finances system, but hopefully you agree this is a good start!
