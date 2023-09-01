---
layout: post
title: Bold league leading stats on player profile pages
date: 2023-03-05
tags:
  - post
  - Stats
  - UI
---

Inspired by [basketball-reference.com](https://www.basketball-reference.com/players/c/curryst01.html), on player profile pages I added bold/highlighted text for each stat a player leads the league in. Most players don't lead the league in anything, in which case there is no change for them. But for the top players in your league, it gives you a quick glance at just how dominant they've been.

<figure class="overflow-auto"><img src="/files/bold-league-leaders-1.png"></figure>

It works on all the stat tables on the player page - regular stats, advanced stats, playoff stats, etc. It also works on player ratings, and even ages to show you the oldest player in the league.

I know this seems like a simple little feature, but there's actually a lot of details involved in implementing this, so I figured I would blog about it!

<!--more-->

The basic problem is pretty simple. Calculate the league leading value for each stat, and then use that to see if the current player is the league leader. (You could instead calculate the player ID number of the league leader at each stat, but in the case of ties, it's more efficient to just store the value of the stat since that is only one number and there may be a lot of players tied for some stats, such as games played.)

Most stats are pretty simple, but some are a little tricky. Like some need to be filtered based on some requirements, for example the FG% leader can't just be shooting 1-1, you need some minimum number of shots. Some need to be sorted in the opposite order, like ERA in baseball. Some need special pre-processing to get a numeric value to compare, like "QBRec" in FBGM is stored as a string containing the entire record like "9-5" so that needs to be parsed and then we need to determine how to find the "best" value. (This is why the new feature doesn't work for baseball defensive stats - they are stored differently than other stats because they are per-position, and I got lazy!)

But most of that was at least partially already done, like the existing League Leaders page already had to deal with the same issues. So it wasn't hard to just add the same handling for more stats.

And that did work. Problem is, it's a little bit slow to compute, mostly because for past seasons we need to read players from the hard drive to see who the leaders are, since only current players are cached in memory. That means we also need to cache the league leaders, so they aren't recomputed every time. This is a little complicated for a few reasons

One complication is that the current season needs to be treated differently, since any cached league leaders are invalid once another game is simmed. For that, I made it cache the current season only in memory, and invalidate that cache every time a game is simmed. It only writes the cache permanently to disk after the season ends. Also, to help with performance, it only updates the leaders cache when you're viewing a player profile page, since that's the only place it's used. That means there is no performance hit for simming when viewing any other page. It is a bit slower to sim while viewing player profile pages now, but you might not even notice the difference.

Another issue is upgrading existing leagues. It's easy to build a cache season-by-season, but it'd be pretty slow to do it all at once while upgrading existing leagues with hundreds or thousands of seasons. A solution to that is to only compute the leaders on-demand. Like if you view a player who was active between 1970-1983, then check if you have the leaders for those years cached already. If not, generate them only for the years that are missing. That way the cost of calculating thousands of seasons of leaders is spread out over many pageviews where it will be less noticeable.

Real player leagues in BBGM pose another problem. If I use the dyanamic leaders calculation mentioned above, it will only work for leagues with all historical stats. But the default (for performance reasons) is to include only current active players and all of their stats, meaning you would not know who the leaders are for any past seasons becasue they could be retired players not present in the league's history. To solve that, I precomputed all the leaders for BBGM's historical seasons. This also improves performance for leagues with all historical data included, since it doesn't have to dynamically recompute the same leaders in every single league you make.

Yet another challenge is God Mode. Normally when you see player ratings, they have some uncertainty added to them based on your scouting budget. But in God Mode, you see the real ratings. And you can switch God Mode on and off within a league. This means that the league-leading values for ratings might change when you toggle God Mode. So I need to store two versions of each ratings leader, one normal and one for God Mode.

And finally, there is a little UI issue in dark mode. For whatever reason, bold black text on white background seems to stand out more than bold white text on black background. So I made the leaders highlight slightly yellow in dark mode, to make it more visible.

<figure class="overflow-auto"><img src="/files/bold-league-leaders-2.png"></figure>

I think that's about everything. It's just a little UI feature, but little UI features can be a lot of work!
