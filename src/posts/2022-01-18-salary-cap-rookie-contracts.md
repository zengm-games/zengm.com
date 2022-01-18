---
layout: post
title: New settings allow you to disable the salary cap and have more control over rookie contracts
date: 2022-01-18
tags:
  - post
  - Finances
  - Rookie Contracts
  - Salary Cap
---

Previously you could choose between a soft cap and a hard cap. Now you have an additional options: no salary cap.

Previously rookie contracts were based on whether you used a soft or hard cap. For a soft cap, there was a predefined rookie scale. For a hard cap, there was no predefined salary, drafted players got signed like any other players (except in ZenGM Hockey where there was a predefined rookie scale here too). Now you get some options to control this. You can set if you want a predefined rookie salary scale or not, and you get some control over what exactly that scale is.

That's the big picture summary. More details follow. First, about the salary cap:

<!--more-->

Even if you set the "Salary Cap Type" to "None", there is still a "Salary Cap" setting and it still does matter. It kind of sets the overall economic state of the league. Like teams will still struggle to make profit if they exceed the "salary cap" even though there is no rule preventing them from going over the cap.

In real players leagues, just like what happened in history, leagues created before 1985 have no salary cap and will only recieve a salary cap in 1985.

The rookie contract stuff is a bit more complicated. There is a whole new section in the Leauge Settings page for it:

<figure><a href="/files/salary-cap-rookie-contracts.png"><img src="/files/salary-cap-rookie-contracts.png" class="img-fluid"></a></figure>

Well, the "Rookie Contract Lengths" setting is not new, but it fits better with these other ones. Because these settings all have something in common: <span class="text-highlight">they only do something if the "Rookie Salary Scale" is enabled</span>. If you disable that setting, then you get behavior similar to the old hard cap system: your drafted players will appear in your list of players to re-sign, and you have to negotiate their contract. That is now true even if you have a soft cap or no cap.

But if you enable the rookie salary scale (again, regardless of your salary cap type), then you get two new options that control it. "#1 Pick Salary, % of Max Contract" determines the salary of the #1 pick, specified as a percentage of the max contract limit. Based on that, the salaries for other picks are split into three groups that differ in how much each subsequent pick's contract decreases:

1. The top third of the first round. So the top 10 picks by default in BBGM. The last of these picks will have a salary halfway between the #1 pick's and a minimum contract, and it's linear in between.

2. The rest of the picks, up to "Rounds With >Min Contracts", which is 1 by default in BBGM, so the last 20 picks of the first round. These get linearly decreasing salaries until the last one is just slightly above a minimum contract.

3. The rest of the picks. By default in BBGM this means that all 2nd round picks get minimum contracts.

I feel like that sounds more confusing than it is. Basically, the top picks get the most money, and then after that it declines until at some point it reaches a minimum contract. You can control how high the #1 pick is and how long it takes until it switches to all minimum contracts.

But wait, there's more complexity!

When the rookie salary scale is enabled players will be automatically signed to rookie contracts, just like they normally have been in BBGM, _except_ if the salary cap is a hard cap. Because if it's a hard cap, you can't guarantee that there will always be enough space to sign them. So in that case, they will appear on the re-signing players list, but with contract values equal to the rookie salary scale.

Rookie contracts are not guaranteed until the regular season. It's been this way for a long time, the salary appears in italics on the roster page for those players. Originally this applied to hard cap leagues too, but at some point I got rid of that, thinking that... well, if you didn't want the player, you already had the option to not sign them. It wasn't automatic. But upon further consideration, I think that was wrong. Changing to a soft/hard/no cap shouldn't have such a significant impact on how you play the game. So now, all rookie contracts (whether rookie scale or not) are not guaratneed until the regular season.

I thought about making an option for this, to let you disable that behavior if you want. But that's kind of pointless currently. The AI is not smart enough to use these non-guaranteed contracts strategically, so if you don't want to be able to release rookies for free, then just don't do it! If I ever improve the AI here, I will probably add an option to control this.

Overall, this is a long blog post for features that most people won't use. Oh well. I just hope I didn't introduce any bugs. It was a bit messy to implement all of these changes. Please [let me know if you notice anything funny!](/contact/)
