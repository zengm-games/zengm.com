---
layout: post
title: 'New "Season Preview" page lets you quickly see the top players/teams as well as who is getting better and who is getting worse'
date: 2021-11-15
tags:
  - post
  - New Feature
  - Season Preview
---

Compared to other popular sports sim games like Football Manager and OOTP Baseball, the ZenGM games let you sim through many seasons a lot faster. I know some people like to take things slow and play very carefully. But on the other end of the spectrum, a lot of people sim through the season, sim through the playoffs (maybe game by game if your team made it, and maybe watching live sims of elimination games), only look at the draft prospects available around their pick, only look at the free agents that they can afford to sign, and only look at the roster of their own team.

One downside of playing like that is you lose perspective on what's happening in the league. When I added the [news feed](/blog/2020/06/news-feed/) I was trying to address that, but if you play fast the news feed can sometimes just look like a whole mess of unimportant notifications.

So here's another try at helping people understand what's going on in their leagues: the new season preview page! This shows up at the beginning of each regular season, and you can access past ones at any time by going to League > History > Season Previews.

Here's what it looks like:

<!--more-->

<figure><a href="/files/season-preview.png"><img src="/files/season-preview.png" class="img-fluid"></a></figure>

There is nothing new here, this is all information that you could have found before. But you would have had to look in several different places to find it.

First you have "Top Players", which is the same list you see by going to Stats > Player Ratings and sorting by ovr, except it also shows you the change in ovr and pot since last year for the top players.

"Improving Players" and "Declining Players" show the same information for the top 10 players who are improving or declining. How is that defined exactly? You might think it'd make sense to just look at the biggest changes in ovr, but that kind of sucks cause you wind up with a bunch of 2nd round picks improving from 25 to 40 ovr, and a bunch of old guys declining from 40 to 30 ovr. But both of those changes are less important than the best player in the league getting a +4 or -4.

I played around with potential formulas by hand and found ones that work pretty well. For improving players it's `ovr + 2 * Δovr` and for declining players it's `ovr - 3 * Δovr`. The different coefficients are because players tend to improve faster than they decline.

Then below the players is a section for teams. This is all based on team ovr and the change in team ovr compared to last year. And unlike for players, the improving/declining teams are determined just by looking at the change in ovr since last year.

Overall, I hope this new season preview makes it easier for people to keep tabs on what's going on in their league. Especially people who play through seasons quickly.

I do recognize that this is not necessarily the most beautiful UI. But it is pretty information dense. Maybe I should make something prettier? Feel free to [make suggestions](/contact/) about that, or about other stuff you'd like to see in the season preview, or about anything else really :)
