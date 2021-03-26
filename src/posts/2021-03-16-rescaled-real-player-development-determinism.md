---
layout: post
title: Rescaled real player development determinism
date: 2021-03-16
tags:
  - post
  - Player Development
  - Real Player Development Determinism
  - Real Players
---

The "real player development determinism" (RPDD) setting has existed for [a little while now](/blog/2020/06/league-creation-options/), but it behaves somewhat unintuitively. You may have noticed that if you set it to anything above about 30%, the results feel about the same. That's weird. 30% should not be almost exactly the same as 100%.

Why does it work that way? Because of the stupid way I implemented it. The initial implementation worked like this, to find the new ratings for every player in a new season:

1. Run the normal player development algorithm
2. Combine that with the player's real ratings for the new season - RPDD% comes from the real ratings, and (1-RPDD)% comes from normal player development.

That may sound okay at first glance, but the problem is that every single year you're averaging a player's real ratings into the random ratings, and their real ratings tend to be correlated pretty well across years, so the real ratings will come to dominate the random ratings.

That's no fun.

<!--more-->

The legendary Nicholas I. Dobson (aka [nicidob](https://nicidob.github.io/)) of course had some thoughts on this. He proposed a couple potentially better ways for implementing RPDD:

Idea #1: Switch from combining the ratings (as mentioned above, `ratings = RPDD * realRatings + (1-RPDD) * ratings`) to just combining the progs (`ratings = ratings + (RPDD * realProgs + (1-RPDD) * progs)`).

This would get rid of that constant averaging with real player ratings that grows to dominate player ratings even at relatively low values of RPDD.

However it would introduce another problem. In real player rosters, sometimes players experience very big ratings jumps. That's fine if it's going from a 40 to a 60. What if it's going from an 80 to a 100? That could happen if we were blindly applying real progs to random ratings, which could result in overpowered players.

Idea #2: Keep two sets of ratings per player: one influenced by RPDD, and one not (let's call it "random"). Then to update the random ones, use normal player development. To update the "influenced by RPDD ones", take a weighted average between real player ratings and random ratings.

That would not have the same problem as idea #1. But it would introduce some complexity with tracking two sets of ratings. Yeah it'd only need to be done in leagues with RPDD, except if it was toggled on and off at different times, but that could be tracked too... meh, I don't really want to deal with it.

Instead I did something much simpler, and possibly stupider. I kept the orignal method, but squared the RPDD factor. So now 0.5 will behave like 0.5<sup>2</sup>, which is 0.25. In my unscientific testing, it feels about right. It's a good mix of reality and fantasy.

So for existing leagues, if you want them to continue behaving as they have so far, take the square root of your current RPDD setting. I could have made it upgrade automatically, but I figured most people will actually prefer the new value, since if they set it to 0.5 they probably didn't actually want it to be so similar to 1.
