---
layout: post
title: A few recent minor improvements
date: 2018-09-02
tags:
  - post
  - Bug Fix
  - New Feature
---

When I make a small improvement to Basketball GM, it feels silly to write a whole blog post about it. But if I don't, some people will never realize what happened. So maybe this is a good idea: a single blog post explaining several recent small improvements.

<!--more-->

**Fixed potential for future draft prospects.** Several people, including myself, had noticed that future draft prospects had unrealistically high potential ratings. I thought I knew why and it would be annoying to fix, but I was wrong. TheZAndMan over on [Discord](/discord/) noticed that the actual problem was that it was calculating the potential of the future rookie season based on a prospect's current age, not the age he will be when he is a rookie. This was still a little annoying to fix, but it's fixed.

**You can no longer make tons of money with crazy expensive tickets.** This is another one that many people had noticed in the past. If you set your ticket price very high (like a million dollars or so), you can make tons of money. The solution is obvious, make attendance decrease faster as ticket price increases. But for some reason I never got around to it until [this post on the subreddit](https://www.reddit.com/r/BasketballGM/comments/9bvt40/exploit_expensive_tickets_or_how_to_win_rings_on/) spurred me to do it.

**Finals MVP is actually the most valuable player of the finals.** Ever since the Finals MVP award has existed, it's been calculated from total playoff stats rather than just finals stats. That's because it was easier to implement, and because 99% of the time the playoff MVP and the finals MVP is the same person. But when a player gets injured in the finals, it looks very weird. People have been complaining about this for a while. [Here's the most recent example.](https://www.reddit.com/r/BasketballGM/comments/9cduno/finals_mvp_stats_bugged/) Finally, I have actually fixed it. The finals MVP is now the player with the highest total [game score](https://www.nbastuffer.com/analytics101/game-score/), with players on the winning team getting a 50% bonus. This is cool because now a player on the losing team can win finals MVP if he has an utterly dominant performance.

**You can play past the year 9999.** There was a nasty y10k bug due to part of the code sorting years alphabetically rather than numerically. It doesn't matter if the number of digits is the same, but then when you roll over to 10000 the shit hits the fan because 10000 comes before 9999 alphabetically but not numerically. Of course most users never play that far, but [/u/webuildmountains did, and I still doubted him](https://www.reddit.com/r/BasketballGM/comments/96n1oy/how_long_have_you_run_your_leagues/e42hr3s/)! Thankfully I eventually did look into it and see he was right. If humans survive to the year 10000, the y10k bug is going to be pretty rough. Code that worked fine for 8000 years will suddenly crap out.

**When viewing a message, it links back to the previous page, not just the Inbox.** When you get a message from the owner, you have to read it before proceeding. When you're done reading, you often want to go back to where you were before. Now there is a link at the bottom of each message to take you back to the previous page you were viewing. This idea also came from a user, but I forget who! My apologies for forgetting about you, whoever you are :)

I guess the common thread in all of these things is that if you keep bugging me about stuff, eventually I will listen!
