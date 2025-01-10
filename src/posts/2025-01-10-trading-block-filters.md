---
layout: post
title: Trading block filters
date: 2025-01-10
tags:
  - post
  - New Feature
  - Trades
  - Trading Block
  - UI
---

The trading block is one of the most commonly used features in BBGM, and one of the most common feature requests for the trading block is to add some way to filter trades. Currently teams give you a mix of different types of assets, but in some situations maybe you want to trade for draft picks, or maybe you want to trade for a point guard, or maybe you want to trade for some interior defense. Previously there was no good way to do this, but now there is! Behold, trading block filters:

<figure class="overflow-auto"><img src="/files/trading-block-filters.png"></a></figure>

<!--more-->

I think this is mostly self explanatory - select the things you want, and the AI will try to give them to you. But I figured I'd write up a fully explanation of how it works, for those who are interested.

First, we have to consider how the trading block works with no filters applied. The AI teams will convert your offer into a numeric value for how good your assets are. It also knows how it values its own assets. So it tries to add its own assets to the trade, right up until the trade is no longer worth it. And it does this starting with its best players first.

So imagine you offer a 60 ovr player. The AI maybe has some players who are better than that - right off the bat, it removes those from consideration. Then, from the remaining players, it picks the most valuable one that is still not as valuable as your 60 ovr player. Maybe a 52 ovr player. Then it repeats this exercise, still asking "what's the best player I can add to the trade without making it unfavorable to me?". Maybe it adds a 45 ovr player or something. Then it repeats, and maybe doesn't find any other player it can add before the trade becomes unfavorable. And that's the offer then - 52 ovr and 45 ovr for 60 ovr.

The filters are all different types of modifications to that basic algorithm.

The "Position" filters will look for a player matching the selected position as the first asset in the trade. After the first asset is added, then it just continues like normal, adding other players and draft picks. I could have implemented it such that it would only look for players at the selected position, but I figured that would often make it hard to find balanced trades because there are only so many players at each position.

The "Skill" filters change the order that AI teams add players to the trade. Instead of adding the best asset possible, the AI will add the player with the highest ratings for the selected skills (not just the players who actually have the skill labels). The list of candidate players is the same - the AI still won't make an offer it deems unfavorable. It just adds them in a different order, resulting in different offers.

The "Assets" filters are really two different things. "Draft picks" works similar to the "Position" filters - it filters the list of assets to be only draft picks, and only will consider players once there are no more draft picks the AI is willing to give up. The "Prospects" and "Best current players" filters are similar to the "Skills" filters - they adjust the order that AI teams add players to the trade. "Best current players" means the order is based on ovr rating and current stats. "Prospects" means it's based on a combination of ovr and pot, so that players with pot > ovr get a bonus.

The tricky part is, what happens when you select multiple types of different filters? There's no perfect way to do this, because you might want different mixes of things. Like maybe you want players with the "3" and "Dp" skills, but you think "3" is more important. There's no way to say that, it'll treat them equally if you select both. Or maybe you want prospects and draft picks, but you prefer one over the other. Again, no way to specify. But overall, it does at least make some attempt to give you everything you ask for.

Does this new feature make the game easier? Maybe. Any trade you find with the filters a trade the AI would have accepted previously too, so it's not like this allows you to make trades that used to be impossible. This is just saving you the effort of manually searching for that trade. Which does make the game easier, especially since you might now be able to make some good trades that you didn't want to go through the effort of finding before.

However in general, the AI is happy for you to do this! Any deviation from the unfiltered trading block algorithm will generally result in the AI making an offer that it thinks is worse for you, since it was already trying to give up as much as possible.

But humans are smarter than computers. Well, at least we're smarter than some computers. Such as computers running the BBGM trade AI, which certainly some of you know how to exploit :)

If this does wind up making the game too easy, that will just give me more motivation to improve the trade AI. Using a difficult UI to hide the reality of a poor AI is never a good solution!
