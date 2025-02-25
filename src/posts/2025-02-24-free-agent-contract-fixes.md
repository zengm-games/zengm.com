---
layout: post
title: Free agent contract fixes for football and hockey
date: 2025-02-24
tags:
  - post
  - Contracts
  - Finances
  - Football
  - Free Agency
  - Hockey
---

This started because of [a post on Reddit](https://reddit.com/r/ZenGMHockey/comments/1ittkdr/sims_in_hockey_are_slower_compared_to_baseball/) wondering why ZenGM Hockey was slower than the other games. I figured I should investigate. And I found some low hanging fruit! A significant amount of time during the regular season was spent computing free agent contract values for released players.

That sounds pretty silly, and it is. The reason it's possible at all is because of [how free agent contracts work](/blog/2020/08/smarter-contract-generation/). It's a somewhat complex and slow algorithm. So slow that it doesn't work at all in Football GM and ZenGM Baseball - for those I do a simpler method, which is just a simple formula based on how good/old a player is. But the complex algorithm works quite well in Basketball GM (fewer players), and it works okayish in ZenGM Hockey.

<!--more-->

So as a quick fix for hockey performance, I disabled the "good/slow" contract algorithm during the season, and instead use the "bad/fast" algorithm. (A similar change could be made for BBGM, but it doesn't really make a difference because the good/slow algorithm is much faster in BBGM due to fewer players.) In practice this usually doesn't even impact gameplay, because released players during the season are usually bad players who don't really matter. But it does affect performance a lot! **Simming through the regular season in ZenGM Hockey is now 40% faster.**

So that's pretty nice. And while I was working on the contract code, I figured I should take another look at a longstanding issue in the bad/fast algorithm that has impacted Football GM and ZenGM Baseball for a while.

The reason the good/slow algorithm exists is to be dynamic. In years where there are a lot of good free agents but teams don't have much money under the cap, free agents should ask for smaller contracts. And the opposite should happen if there are few good free agents and teams have a lot of money to spend. The bad/fast algorithm doesn't have any adjustment for those factors. The biggest problem from that is when you have players asking for too much money, and then they go unsigned.

But if the good/slow algorithm doesn't work well for sports with so many players like football and baseball, what can we do? I applied a simple adjustment to free agent contracts. First it checks how many roster spots are available (N) and how much cap space is available. Then it takes the top N free agents and adjusts their contract demands so that it roughly equals available cap space. Any players beyond that just ask for minimum contracts. The result of this is something kind of similar to the good/slow algorithm. It's not quite as good, but it's still fast!

That's the story for football, at least. For baseball, it doesn't really work. This is because by default in ZenGM Baseball there is no salary cap, so it's less clear how an adjustment like described above should be calculated. And that also means it matters less for baseball, so I decided to just leave baseball alone.

In summary, this is how free agent contracts work in all the games:

- Basketball GM: good/slow algorithm
- Football GM: bad/fast algorithm, with a quick and dirty adjustment for free agent market conditions
- ZenGM Baseball: bad/fast algorithm
- ZenGM Hockey: good/slow algorithm, except it uses the bad/fast during the regular season for released players

It does not thrill me that now all 4 sports are subtly different. Previously BBGM and ZGMH were the same, and FBGM and ZGMB were the same. But I think it's worth the complexity!
