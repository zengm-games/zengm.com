---
layout: post
title: Holds and blown saves in ZenGM Baseball
date: 2024-10-11
tags:
  - post
  - Baseball
  - Game Simulation
  - Stats
---

Until this update, ZenGM Baseball did not track blown saves (BS) or holds (HLD). Now it does.

You might be surprised to know that [blown saves and holds are not "official" stats, and there are not agreed upon definitions for those stats, and different sources handle them differently](https://tht.fangraphs.com/the-unofficial-rules-of-holds-and-blown-saves/). For that reason, I am writing this blog post to explain exactly how it works in ZenGM Baseball.

<!--more-->

A common definition of hold is that it happen when a pitcher is in a "save situation", records at least one out, and leaves the game while still having the lead. But this is not actually true.

A save situation when a pitcher enters the game with a lead, and at least one of these statements is true:

- The lead is 3 runs or less, and there are at least 3 outs left to pitch.
- The tying run is either on base, at bat, or on deck. In other words, the lead is `(# of baserunners) + 2` or less.
- There are at least 9 outs in the game.

That last situation is pretty uncommon these days - closers don't pitch 3 innings to end games. But technically, that would be a save, even if they were up by 20 runs when he entered.

That last situation also seems to be ignored by everyone for holds. For a hold, it needs to be one of the first two situations. So that's what I did for ZenGM Baseball.

Then for a blown save, that is when a pitcher enters the game in a save situation (including the uncommon 3rd situation) and gives up the tying run.

All of this is very confusing and I probably make some mistakes or missed some edge cases. If you notice something, [let me know](/contact/).

And also, here are some examples of what you'll now see in ZenGM Baseball.

Here's a nice traditional hold for maintaining the lead in the 7th and 8th innings:

<figure class="overflow-auto"><img src="/files/holds-and-blown-saves-1.png"></figure>

This next one looks similar, but there's no save! Why? Because the offense increased the lead to 4 in the top of the 9th, so it was no longer a save situation by the bottom of the 9th!

<figure class="overflow-auto"><img src="/files/holds-and-blown-saves-2.png"></figure>

Here is a more interesting game - a couple holds, followed by a blown save and then a comeback win. The holds count regardless of what happens afterward.

<figure class="overflow-auto"><img src="/files/holds-and-blown-saves-3.png"></figure>

And here is an example of a pitcher getting a blown save and a loss at the same time, which is a fairly common occurrence. "BL" means blown save and loss.

<figure class="overflow-auto"><img src="/files/holds-and-blown-saves-4.png"></figure>

It is also possible to have a blown save and a win in the same outing, which can happen if the pitcher's team regains the lead before another pitcher enters the game. This will show up as BW, but is a lot less common than BL.

While it is logically impossible to have a hold and a win at the same time (since there is already some earlier pitcher getting the W if it's a save situation),a hold and a loss can happen at the same time. This is possible because for both blown saves and holds, it's not about earned runs, it's about what happens while the pitcher is actually in the game. Which is the opposite of how it works for wins and losses. So if a pitcher enters in a save situation, then leaves while still leading by 1, he gets a hold. But if he's responsible for 2 runners on base who eventually score, he'll also get credit for a loss. Not a common situation, but when it happens, it will show up as HL.

I should also mention that ZenGM Baseball is a little weird about wins and losses to begin with. In MLB, the starting pitcher must pitch 5 innings to be eligible for a win. I think that rule is a little archaic given how often starters come out early these days, so ZenGM Baseball does not follow that rule. That means more relievers are eligible for holds, since for it to be a save situation there needs to be some prior pitcher getting credit for a win.

And finally, one other place this information now shows up is on player game logs. There is now a "Decision" column for pitchers which shows the same info about the decision that is in the box score:

<figure class="overflow-auto"><img src="/files/holds-and-blown-saves-5.png"></figure>
