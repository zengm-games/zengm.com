---
layout: post
title: Some small improvements
date: 2024-12-23
tags:
  - post
  - Bug Fix
  - UI
---

I've been working on some stuff, but it's not done yet. In the meantime, I've continued to do little fixes as I normally do, but nothing was big enough to make it to the [changelog](/changelog/) until today's update about the contract negotiation UI.

That's often how it is - small bug fixes or improvements don't get entries in the changelog because I don't want to bother you about every little thing. But since there haven't been other updates lately they'd been building up a bit more than normal, so I figure I'd share what these kinds of little improvements typically look like.

These are the small changes in the latest update:

<!--more-->

- Slightly increased the "value" (used in logic for trades, free agency, and draft) for kickers and punters in FBGM.

- Made the "Hall of Fame Threshold Factor" setting also affect AI teams retiring jersey numbers.

- Made it impossible for min contract free agents to refuse to re-sign, which happened too much in some situations (especially on high difficulty settings) and could potentially leave you in an impossible situation (below the minimum roster size with no one willing to sign).

- Fixed a bug in the "Most Years on One Team" frivolity where a player being traded back to the same team in the same season would count as 2 seasons.

- On the Watch List, if you have enabled the setting to use multiple colors for differnet lists, it now has the ability to clear only one color at a time:

  <figure class="overflow-auto"><img src="/files/small-improvements-1.png"></figure>

- Restored the decimal place to ORTG and DRTG stats. That's how it was originally, but then at some point I changed it to no decimal place because that's what basketball-reference.com does for player stats. Then someone pointed out that basketball-reference.com uses one decimal place for the team versions of those stats. My games don't currently support different rounding for team/player versions of the same stat, so I figured I might as well just include the decimal place always. It's not hurting anyone.

  Also, independent of what basketball-reference.com does, I think it makes sense to have a decimal place. Many stats are commonly reported with 3 siginificant figures, like 48.2% FG% or 14.3 PPG. For ORTG and DRTG, they are generally a little above 100, although sometimes below. When above 100, 3 significant figures is no decimal place. And when below, it's one decimal place. So since it's usually above 100, maybe it should be rounded? But it's never above 200 (unless you use weird settings) so that first digit is not providing any information really. So even when above 100, one decimal place probably makes sense.

- Added player contracts to the Compare Players page. This will compare either single season contract values or career totals.

- Fixed a bug where editing a player would sometimes alter his contract.

  Originally all contracts were always rounded to the nearest $10k. But at some point, after adding all the financial and inflation settings, that became silly - the amount of rounding should be dynamic, depending on your settings. I thought I had updated it everywhere, but I missed the Edit Player page, so that was still rounding to $10k.

- Fixed the Upcoming Free Agents page to not include "Is loyal to the franchise" for their current team, since when they are free agents that will no longer apply. This bug only happened during the re-signing phase, because I was lazy about distinguishing between "free agent available to sign with any team" and "player you are re-signing to your team".

- Remove -0 (negative zero) being displayed for some stats, since although [computers do generally have a concept of negative zero](https://en.wikipedia.org/wiki/Signed_zero), most people are not aware of that and will just think it looks weird.

- Fixed a bug in Football GM where safeties happening on completed passes resulted in "Penalty overturned score" rather than "Safety!" showing up in the play-by-play.

  This happened because I was logging the points for the safety after I was logging the result of the completed pass, so the score from the safety was not being applied until the next play. And since the next play is not a safety, it falls back to thinking it is "Penalty overturned score" because it displays that whenever there is a scoring change on a play that is not a normal scoring play (TD/FG/XP/2P/SF), since that is the only other time a score changes. That's probably not the ideal way to implement things, but it works! Except for this bug where it didn't work. But now that's fixed, and hopefully there are no other boogs.

- Fixed a bug in ZenGM Baseball where a strikeout and a throw out (of a stolen base attempt) happening at the same time at the end of the inning (i.e. 1 out before the pitch) would not advance the batting order, so the guy who struck out would be up again at the start of the next inning. This happened due to dumb logic saying "if a throw out ends an inning, don't advance to the next batter", which obviously needed an additional check to handle this specific case.

- Basketball GM box scores include all players, and anyone who didn't play is listed as DNP. In the other sports, box scores only show players who actually played. But behind the scenes, I was actually storing data for all players in all box scores for all sports.

  Now for non-basketball sports, it only stores the players who actually played. This saves a bit of storage space (and JSON export file size, if you're including box scores) for Football GM and ZenGM Hockey, since in those sports most players play. But in ZenGM Baseball, most players usually do not play in a given game, so this optimization actually saves quite a bit of space.

- In ZenGM Hockey, the Goalie of the Year (GOY) award has always been determined by GPS (goalie point shares), which is a cumulative stat, meaning that it favors players who play more games. Originally this was fine because goalies played all games (except when injured). But after adding goalie fatigue so that backups play some, that's no longer true. And teams with better backups will rest their top goalie more. Which results in those goalies getting fewer GPS and fewer GOY awards, which seems unfair.

  To fix this, I instead pick GOY by looking at GPS per game played, and scaling it up to either 75% of the season, or the number of games actually played (if fewer than 75% of the season). That's confusing to write in words rather than code, but basically it means it gives equal footing to every goalie who played at least 75% of the games.

- For teams that have changed their name/region/logo, previously the Daily Schedule page for past seasons would incorrectly show the current values of those things, rather than the values at the time of the game. That's fixed now.

  This is a common bug, and it happens some other places too. In the old days there was no way to change any of that info, so the code was originally written without that concern. But gradually I am fixing various places. In this case, the "score box" component that is used on the Daily Schedule page (and a few other pages) did not support historical team info, because originally it was only used for games in the current season. But since I added the ability to view past seasons of the Daily Schedule, that is no longer true.

- And finally there's the thing I mentioned at the beginning, the improved contract negotiation UI:

  <figure class="overflow-auto"><img src="/files/small-improvements-2.png"></figure>

  This has a number of changes. The player's picture is shown. Some of the extra info (like free agent salary cap rules) is hidden by default but still available under the question mark. Contracts that are not allowed to be signed due to salary cap rules have their "Sign" button disabled with a tooltip explaining it, rather than forcing you to click the "Sign" button to see if it's allowed. And cap space is shown, rather than just payroll and salary cap. Overall it's more information, but it actually takes up less space than the old UI!

Most of these ideas and bug reports came from [#feature-requests in the ZenGM Discord server](/discord/), [email](mailto:jeremy@zengm.com), and [the monthly suggestions thread pinned to the top of /r/BasketballGM](https://reddit.com/r/BasketballGM/). I am always listening!

Hopefully 2025 will bring some more exciting improvements than little stuff like this. But I can at least promise you that little stuff like this will always be happening.
