---
layout: post
title: Team ratings and improved power rankings
date: 2019-11-20
tags:
  - post
  - Advanced Stats
  - New Feature
  - Statistics
---

In sports games like Madden and NBA 2k, teams generally have a rating on a 0-100 scale. Basketball GM never had a similar feature... until today! Now you can view team ratings on the Roster and Power Rankings pages. Eventually I hope to put them in even more places.

So, how are the team ratings generated?

<!--more-->

I got the itch to do this while working on [the new player ovr rating formula](/blog/2019/11/game-simulation-ovr-beta/). In short, the new ovr formula is proportional to an estimate of a player's +/-, independent of teammates. This reminded me of [how FiveThirtyEight does their NBA projections](https://projects.fivethirtyeight.com/2020-nba-predictions/76ers/). They estimate +/- for each player, take a weighted sum of the players on a team based on projected playing time, convert that into an average point differential, and use that to predict how many wins a team will get.

Since the new player overall ratings are similar to +/-, I can do a very similar thing to predict how good a team will be. And I did, with a couple simplifications.

First, I targeted a 0-100 scale rather than "projected number of wins" or "projected point differential", just because that's what you tend to see in other video games.

Second, I didn't want to have to estimate rotations. I don't have an easy way to do that now, and I wanted the team ratings to be simple. Instead of estimating rotations, I took data from many seasons of play and [built a linear regression model](https://github.com/dumbmatter/gm-games/tree/22a8daadb71eb558d5571f25a7b483e1e0d76e19/analysis/team-ovr-basketball), fitting the ovr ratings of the top 10 players on each team against their average point differential. This results in an esimated point differential which is very easy to compute. And it works pretty well, the r<sup>2</sup> is 0.71. Then I just take that point differnetial and translate it to a 0-100 scale, where -20 is 0 and +20 is 100.

This linear regression approach was also easy to apply to [Football GM](/football/), although [I had to also include players positions](https://github.com/dumbmatter/gm-games/tree/22a8daadb71eb558d5571f25a7b483e1e0d76e19/analysis/team-ovr-football) to get a similar r<sup>2</sup> because football is not nearly as positionless as basketball.

Another cool FiveThirtyEight-inspired feature is to incorporate injuries into team ratings. This is very easy with my linear model - if a player is injured, just leave them off the list of top N players used to calculate the team rating!

Like I mentioned above, team ratings are now viewable on the Roster and Power Rankings pages. The power rankings are also much more meaningful now - in the past, they were pretty stupid. And it's also now possible to view the power rankings for past seasons.

As always, feedback is welcome on [Reddit](http://www.reddit.com/r/BasketballGM/), [Discord](https://discord.gg/caPFuM9), [Twitter](https://twitter.com/basketball_gm), and [email](mailto:jeremy@zengm.com).
