---
layout: post
title: Customizable tiebreakers
date: 2021-02-15
tags:
  - post
  - New Feature
  - Tiebreakers
---

New feature: customizable tiebreakers for where teams rank in the standings!

Previously tiebreakers were random. It's always a little frustrating to find yourself on the losing end of something and have the answer be "oh well it's just random". Makes you feel powerless. Especially in FBGM, where the last playoff team has a legitimate shot of winning a title.

In version 2021.02.15.1049 all leagues will be upgraded to the new default tiebreakers, which are:

<div class="row">
    <div class="col-sm-6">
<b>BBGM tiebreakers</b>
<ol>
<li>Head-to-head record</li>
<li>Division winner</li>
<li>Division record (same div)</li>
<li>Conference record (same conf)</li>
<li>Margin of victory</li>
<li>Coin flip</li>
</ol>
    </div>
    <div class="col-sm-6">
<b>FBGM tiebreakers</b>
<ol>
<li>Head-to-head record</li>
<li>Division record (same div)</li>
<li>Common opponents record</li>
<li>Conference record (same conf)</li>
<li>Strength of victory</li>
<li>Strength of schedule</li>
<li>Margin of victory</li>
<li>Coin flip</li>
</ol>
    </div>
</div>

Additionally, when you view the standings, there is now a "Tiebreaker" column showing how ties were resolved. (Continue reading for more detail on this.)

And at Tools > League Settings, you can edit the "Tiebreakers" setting to apply any ordered combination of those tiebreakers in your league.

<!--more-->

The way the tiebreaker system works is actually pretty cool. First it sorts all the teams by winning percentage. Then it goes through and finds any teams that are tied. For those teams, it applies each of the tiebreakers in order until it finds one team that beats all of the others. Then, if there were more than 2 tied teams, it takes the remaining tied teams and runs the same tiebreakers again on just that subset of teams. That is repeated until all ties are resolved.

Ah, but that's not all! The old tiebreaker system was very simple. Basically every single team got some "tiebreaker priority" value, and from that you could instantly resolve any tie because the same exact tiebreaking order was used to break ties between division, confernece, and leaguewide ties. But that is no longer possible with the new system. Imagine teams X and Y are tied within their division, and X wins the tiebreaker. So they rank higher in the division standings. But what if they're also tied with Z in the conference standings? Then there needs to be a 3-way tiebreaker, and that could wind up with X below Y in the conference standings, even while being above Y in the division standings.

Kind of confusing! But it makes sense if you think about it. So if you want to see what goes into the division tiebreakers, view the division standings. If you switch to the conference standings, those are the conference tiebreakers, and they might not be decided in the same direction as the division tiebreakers. Same with league standings. This is particularly important for the "division winner" tiebreaker because that means the league/conference tiebreaker results may depend on the division tiebreaker results.

This also required a minor change to the "clinched playoffs" system. Previously, "z" was used to indicate "clinched #1 overall seed and home court advantage". With the new tiebreakers, that is a much fuzzier concept if multiple teams are tied at #1. You could have a rock-paper-scissors scenario where no team has home court advantage in all possible finals matchups. To deal with this, I changed "z" to mean "clinched a #1 seed", which is still something that can be conclusively defined every season.

Now let me show an example of what it looks like, 4 games into a season where there are a ton of ties:

<a href="/files/tiebreakers.png"><img src="/files/tiebreakers.png" class="img-fluid" /></a>

Chicago and Detroit tied for #1, and Chicago got the tiebreaker because the won the division tiebreaker. Why did they win the division tiebreaker? If you switch the standings view from conference to division, it says it's because of their conference records.

Then the 3 through 7 seeds are tied. Atlanta has the best head-to-head record after pooling all 5 teams together. Miami and NY are the only of those teams that are division winners. (Yes, Atlanta finished behind Miami in the division, but ahead in the conference, because division winner is only #2 on the tiebreakers list). Miami and NY aren't in the same division, so it has to go to the conference record tiebreaker for them, which Miami wins. Then NY is a division winner so they go next. Then Toronto and Montreal get decided by conference record, since they have the same division record.

Down lower, out of the playoffs, the tie for 9-11 goes to Clevelend for the margin of victory tiebreaker. No head to head games, no division winners, different divisions, same conference records, so we wind up at the 5th tiebreaker. Then looking at just Tampa and Washington, they are in the same division so that tiebreaker gets used.

The last three teams are similar. Boston and Philadelphia are in the same division, but that tiebreaker can't be used in a three-way tie with Baltimore too, because Baltimore is in a different division. So it comes down to margin of victory for both of them.

Pretty complicated stuff! It's a hierarchy of recursive tiebreakers. So if you ask me to make it more complicated (such as slightly tweaking the order for no apparent reason in 2 vs 3 team ties like the NBA does) - probably not gonna happen. But I am open to smaller changes. And bug fixes of course :)
