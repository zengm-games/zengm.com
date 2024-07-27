---
layout: post
title: Advanced Player Search
date: 2024-07-20
tags:
  - post
  - New Feature
  - UI
---

I've been working on this new feature for the past few weeks and I'm really excited to announce it because it feels like more than just one new feature. The new "Advanced Player Search" page (available in the "Stats" menu) solves multiple feature requests that I've gotten many times over the years:

- Combine columns from various stats/ratings/bio pages all in one table (like if you're looking for a particular type of player to target in a trade, you can search based on ratings, stats, and contract at the same time)

- View total stats for a range of seasons (like "most points scored in the 2010s"), rather than just single season on career totals

- Efficiently search for player seasons in large leagues (like if you've played 500 seasons in the same league and you want to see all the players who have scored more than 20 ppg in a season)

<!--more-->

Here's how it looks:

<figure><a href="/files/advanced-player-search-1.png"><img src="/files/advanced-player-search-1.png" class="img-fluid"></a></figure>

What you see in that screenshot was not possible before. It's searching for a player based on specific criteria in stats, ratings, and contract value. This is really useful if you're trying to identify specific trade targets or free agents.

For free agents, you can filter for them either using the Team column in the table ("FA" means free agent, similar to on other tables). But you can also use the Bio > Team filter at the top:

<figure><a href="/files/advanced-player-search-2.png"><img src="/files/advanced-player-search-2.png" class="img-fluid"></a></figure>

You can add as many filters as you want by clicking the "Add filter" button. Currently they all are combined with "AND", meaning that all the fitlers must be true for a player to be shown. I could add "OR" ones if people would find that useful, I'm mostly just worried about making the UI too confusing.

Most of the filters are for numeric values, so it lets you search for values that are greater than, less than, or equal to a numeric value. There are a few non-numeric fields like name, country, and college which give you other comparison options:

<figure><a href="/files/advanced-player-search-6.png"><img src="/files/advanced-player-search-6.png" class="img-fluid"></a></figure>

But the filters are just one of the options here. You also have that whole first row of form controls, starting with a range of seasons to search. By default only the current season is selected, meaning it will search for active players. But if you change it, it will search for players from past seasons too.

Here's an example showing all of the players who averaged 10+ assists per game last decade:

<figure><a href="/files/advanced-player-search-3.png"><img src="/files/advanced-player-search-3.png" class="img-fluid"></a></figure>

Players appear multiple times in that table because it's showing individual seasons.

But you can also sum them up over an entire range! That's what the next field does, if you switch from "Single season" to "Totals" then you see a list of the players with the highest assists per game in the 2110s:

<figure><a href="/files/advanced-player-search-4.png"><img src="/files/advanced-player-search-4.png" class="img-fluid"></a></figure>

That is something that was not possible before! And there are some nice little details too, like the "Contract" column shows the total amount they were paid in that range, and the "Season" column shows the range of seasons they actually played (not necessarily the whole decade). And if you filter on Team (like mentioned above) it will sum up only the stats players accumulated with that specific team.

Some values are a little tricky to decide how to handle when you're looking at totals. For example, what should the ratings show for a player who played 10 seasons in the selected range and therefore has 10 different ratings? Currently it shows the ratings from the season where they had the highest ovr, but obviously that is a pretty arbitrary choice. Similarly with Age that is tricky to define. Currently it shows age at the end of the range, because I figured age at the max ratings season would be confusing. But really, it's all kind of confusing if you're doing stuff like that, so there's no great solution.

The next field after that just lets you switch between Regular Season, Playoffs, and Combined stats. That's similar to how other pages like Player Stats already work.

And the last field on that top row lets you switch between Per Game, Per 36 Minutes, and Totals. For example here is total assists rather than assists per game:

<figure><a href="/files/advanced-player-search-5.png"><img src="/files/advanced-player-search-5.png" class="img-fluid"></a></figure>

This is actually kind of annoying, because you can only set it once per search. So you can't filter on both a per game and a total stat at the same time, it's either all per game or all total. I'd like to eventually fix this, but it requires some changes to the internals of BBGM. (It's actually already fixed in other sports, so for those ones you won't see that form field at all.)

Then at the bottom there is an "Additional columns to show" section, which lets you pull in any combination of columns from the normal bio/ratings/stats tables, all at once.

So if you want to quickly look at ratings and stats in the same table (previously not possible!), you can just go to Advanced Player Search, check those two boxes, and click "Search". You don't have to define any filters, then it will just show all players:

<figure><img src="/files/advanced-player-search-7.png" class="img-fluid"></figure>

Alternatively if you'd just like to show a couple columns, you can add them as filters. Any column used in a filter will automatically show up in the table, right after all the "standard" columns (everything up to Pot is always shown), and before any of the "additional" columns.

If you just want to see a column without filtering, leave the filter blank. For example, this shows the Hgt rating and the TRB stat with no actual filtering done, since the filters are blank:

<figure><a href="/files/advanced-player-search-8.png"><img src="/files/advanced-player-search-8.png" class="img-fluid"></a></figure>

One last thing I want to talk about is performance. If you've only played a few seasons, that doesn't really matter. But if you've simmed hundreds or thousands of seasons, some pages in the game become absurdly slow and eventually crash. These are basically the ones that are trying to display data from the entire history of your league in one page, like the Player Stats page showing all seasons or career totals.

Advanced Player Search will generally be much faster if you can give it some filters. Like if you're interested in the top rebounders, give it some filter on total rebounds so it can quickly discard most players. It will still take some time to scan over the entire history of the league, but it won't be as slow as trying to load every single player in league history at once. And, assuming you give it sufficient filters to reduce the number of players to something manageable, it should never crash, even if you've played tens of thousands of seasons!
