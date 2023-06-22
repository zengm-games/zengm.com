---
layout: post
title: Finances revamp
date: 2023-06-14
tags:
  - post
  - Finances
---

The finances system in Basketball GM (and the other games) has been basically unchanged for a long time. I think there are various parts of it that don't really make much sense, or aren't very fun, or are exploitable, or are confusing due to poor UI. So I set out to fix all of those problems at once. The end result is not actually that different in terms of gameplay, but I think it does make things better in all of the aforementioned areas.

First, let me go over how the current finance system works and what I think its main problems are.

<!--more-->

## The old finances system

You have 4 expense categories (scouting, coaching, health, facilities) that all impact different areas of the game. The effects are based on the _rank_ of your total spending over the past 3 seasons. So once you're #1, it doesn't do you any good to spend more. And once you're last, you might as well spend $0 (which is basically an exploit that lets you save way too much money).

The reason for this average over the past 3 seasons is both for realism (you can't instantly improve any of these things, it takes time) and for gameplay (it would be unfair to switch categories between the min/max values and instantly reap the benefits). A problem with the 3 year average is that it's not transparent in the UI that that's how it works, or what the 3 year average value actually is, which is pretty dumb.

And why is rank what matters rather than the actual $ amount? The original idea was like... well there are a limited number of coaches in the world, and once you've hired the best one, there isn't anyone better than that to hire even if you offer more money. That makes a little sense, but only a little, because you can always hire more coaches and support staff. And it makes even less sense for the other categories.

In theory this rank-based system would introduce competition between GMs, where you may have to increase/decrease your spending to maintain the same rank. In theory maybe this is realistic, but in practice I don't think it's actually a fun idea for gameplay. It just means you need to constantly check your rank and adjust your spending a bit if it changes, like bidding in an auction on eBay. I am generally opposed to that kind of micromanagement. But that's all theoretical, it's never actually been an issue because AI teams never adjust their spending, they just set it and forget it! So... yeah, kind of feels like a dumb system.

## Expense levels

The new finances system is no longer rank based. Instead for each of the 4 expense categories you set a "level" between 1 and 100. That level directly corresponds to some dollar amount, which the UI shows you:

<figure><img src="/files/finances-revamp-1.png" class="img-fluid"></figure>

Why not set the dollar amount directly? Because in historical leagues in BBGM, or leagues where the inflation setting is used, the financial state of the game changes every year. $20M one year might be worth $21M the next, $50M in 10 years, and god knows what in 100 years. So for a lot of users, these dollar amounts are not very meaningful, only the relative value is.

So I think letting you just pick a number between 1 and 100 is easier. What does $15M/year vs $50M/year in coaching mean? I don't know, it depends. But level 10 is low and level 90 is high. Very clear, and the same in every league.

## Non-linear effects

So what do these expense levels actually mean?

As menitoned above, the expense levels correspond to a dollar amount in spending. That scale is linear - like the difference in cost between level 10 and level 20 is the same as the difference in cost between level 74 and 84.

What's not linear is the effect of each level. In the old system, that was linear, meaning that the increase/decline in some effect (such as injury duration, which is the effect of health spending) was the same as you moved through the ranks. But in the new system, there are diminishing returns at the high end.

I probably didn't explain that well, so maybe graphs will help:

<div class="d-flex mb-3">
    <div class="text-center" style="writing-mode: vertical-lr; transform: rotate(180deg)">
    Effect
    </div>
    <div class="text-center">
        <div class="fw-bold"><a href="https://www.wolframalpha.com/input?i2d=true&i=-%5C%2840%29Divide%5B2+*+%5C%2840%2931-x%5C%2841%29%2C30%5D+-+1%5C%2841%29+from+1+to+30">Old system</a></div>
        <img src="/files/finances-revamp-2.png" class="google-chart">
        <div>31 - Expense rank</div>
    </div>
    <div class="text-center">
        <div class="fw-bold"><a href="https://www.wolframalpha.com/input?i2d=true&i=1.1*Piecewise%5B%7B%7Btanh%5C%2840%29%5C%2840%293Divide%5Bx-1%2C99%5D-1%5C%2841%29%5C%2841%29%2Cx%3E34%7D%2C%7B%5C%2840%293Divide%5Bx-1%2C99%5D-1%5C%2841%29%2Cx%3C%3D34%7D%7D%5Dfrom+1+to+100">New system</a></div>
        <img src="/files/finances-revamp-3.png" class="google-chart">
        <div>Expense level</div>
    </div>
</div>

For low values, they are similar. But for high values, there are diminishing returns to spending more in the new system. Why? Because I want to make it a little harder to just buy success. You can buy a little bit of success, but not too much, and it'll cost you!

Another difference you may notice is where the lines cross 0 on the y-axis, which is where a neutral effect occurs. In the old system that happens right in the middle of the rank scale. In the new system, it happens at an expense level of 34. This is a consequence of the non-linear shape of the curve, I need to give it more room above average.

In practice, this means that when translating the old scale to the new scale (such as for upgrading leagues), the amount of spending needed to get #1 in the old system will only get you to level 68 in the new system, which gives you about 85% of the maximum effect. To get up to 100% of the old effect, you need to go to expense level 85, which is more expensive than being #1 in the old system.

The new system also overshoots the old one a little - look at the y axes, the new system now goes between -1.1 and 1.1 rather than -1 and 1. So while rich teams are punished by the new system being more expensive at the high end, they do benefit by having the possibility of getting that extra 10% of a benefit if they are willing to pay up to level 100.

## Effects UI

I understand that the previous section makes the new system sound more complicated. And I guess it is in some ways. But there are some UI improvements that I think make it much easier to work with than the old system.

As mentioned above, the old UI wouldn't even tell you the 3 year rank you currently have, which is what the game interanlly used to calculate effects.

The new UI tells you everything.

You see your current level, your average level of the past 3 seasons, your current annual cost, and most importantly, the actual in-game effects you are currently experiencing.

<figure><img src="/files/finances-revamp-4.png" class="img-fluid"></figure>

And if you want to see how changing your expense level will impact the effects, that also shows up when you change a level:

<figure><img src="/files/finances-revamp-5.png" class="img-fluid"></figure>

I think the UI improvements may be the most important part of all of this. Are you surprised by those effects? Think some are too high or too low? Well, those effects (except for the different shapes of the curves in the graphs above) are the same as they've always been, it's just that those numbers were never directly shown to you before.

## How AI teams set expense levels

This is a minor thing but worth mentioning - the expense levels are now shown in the League Finances table, giving you a quick overview of what the AI teams are doing:

<figure><img src="/files/finances-revamp-6.png" class="img-fluid"></figure>

Why does that matter? Because now AI teams adjust their expense levels. Year to year, you will see some AI teams deciding to change some of their expense levels.

Currently it's implemented pretty naively, just scaling based on their population rank and adding some noise. But in the future I could make it dynamic based on their current financial situation, like changing their expenses based on the previous season's profit/loss. I didn't want to do that right now because I figure there are enough changes here already.

## Upgrading existing leagues

By now you can probably imagine how existing leagues will be upgraded to the new system, but I just want to make it more explicit by explaining exactly how it works.

For each of the expense categories, the dollar amount each team is spending is converted into an equivalent level. For a league where the default dollar amounts were used, that means the new levels will be somewhere between 1 and 68. It'll only exceed 68 if someone was spending more than normal, but since it was rank-based before and the AI never changed their spending, that typically should not happen.

Then after the first season, the AI teams will be free to change their expense levels as they see fit, so you will likely start to see teams use the full 1-100 scale.

## Multiplayer leagues

I admit I don't pay too much attention to people doing multiplayer leauges. I love you guys, but my games are primarily single-player because personally I don't really enjoy multiplayer games! But I do want everything to work well for multiplayer leagues, so [please let me know](/contact/) if you have any thoughts.

My understanding is that most multiplayer leagues just set everyone to the same expenses, so nobody gains an advantage there and they don't have to micromanage eBay-style bidding wars for certain ranks.

With the new system, it might be feasible to let people pick their levels, since there is no longer a competitive aspect to it. Your expenses affect only your team, not other teams.

But if you still want everyone to get the same effect, now that's more straightforward too. Just decide the levels you want, and set everyone to those same levels.

## An exploit that maybe nobody used

I've mentioned a few times about how in both the old system and the new system, the effects of your expenses are based on the average of the past 3 seasons.

But what if there are no past seasons? For example, in a new league, or with an expansion team.

In the old system, if there are no past seasons, it just uses the current rank. So if you started a new league, you could get some huge swings in effect by changing your expenses. The sneakist way to exploit this would be to start with a new team after the season ended - either a real players league starting after the regular season, or taking control of an expansion team after the playoffs. Since expenses occur during the regular season, you could max out all your ranks and get the #1 effects instantly. Most importantly, you could get #1 progs for free, since the progs happen before you have to pay any expenses in the regular season.

I know that's a bit of a niche case, and I'm not sure if anyone even realized it was possible due to how the old UI did not show you much info about what was actually happening.

But in the new system, that exploit is no longer possible. When a new league is created, it remembers the initial expense levels and assumes the previous seasons were all at the same levels. So you can change your expense level, but it won't do anything until you actually start spending money and increasing the average over the past 3 seasons.

## Feedback?

This is a long complicated blog post for a somewhat mundane feature, so thank you for reading all the way down here! Feedback is welcome at [all the normal places](/contact/).
