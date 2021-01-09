---
layout: post
title: New option controlling how draft prospect ratings are generated in Real Players leagues
date: 2021-01-09
tags:
- New Feature
- Real Players
---

In Real Players leagues, player ratings are based on player stats. It's not perfect, but it works fairly well.

Setting ratings for draft prospects is a more controversial topic, because there's no perfect way to do it. With hindsight, we know some top picks were busts and some late picks were stars. How should those players be rated as draft prospects? Should the future star be rated high like we know he eventually became, or low like he was percieved at the draft?

Previously, BBGM did real draft prospect ratings based on rookie season stats, which in practice usually turns out to be a compromise between those two extremes. Overall I'm pretty happy with that as the default, but I recognize that there is no one true way to set draft prospect ratings, it really comes down to personal preference.

That's why today I added an option for this when creating a new Real Players league. From [the league creation screen](https://play.basketball-gm.com/new_league/real) you can find it under "More options".

<!--more-->

You can set real draft prospect ratings to be generated based on rookie season stats (how it always worked previously):

<img src="/files/real-draft-prospect-ratings-1.png" class="img-responsive" />

Or you can set them to be generated based only on real draft position:

<img src="/files/real-draft-prospect-ratings-2.png" class="img-responsive" />

The goal of this setting is to make draft results look a lot more like they did in reality. So that #1 pick who turned into a bust will still be the top prospect in the draft. That undrafted player who turned into a star will have very low ratings and probably amount to nothing.

How is this implemented? First, it finds the typical player available at each pick in the draft. Then for each draft prospect, it takes his rookie ratings and increases/decreases them until his "player value" (based on age, ovr, and pot) is equal to that of the typical player at that draft position. Since rookie ratings are the starting point, that means that it will retain information about what "type" of player each prospect is. Like a PG with a high passing rating may see that rating adjusted a little to fit his draft position, but he'll still wind up as a PG whose best skill is passing.

Those are the only two options for now. I'm aware that you may want others. For instance, you might want ratings based on peak career ratings. Or some combination of these existing options. We'll get there eventually :)
