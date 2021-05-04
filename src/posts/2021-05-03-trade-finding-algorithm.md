---
layout: post
title: Trade finding algorithm improvements
date: 2021-05-03
tags:
  - post
  - AI
  - Trades
---

This is about the trade _finding_ algorithm, not the trade AI itself. There are no changes to which trades will be accepted or rejected. But there are some changes to the algorithm powering the trading block, AI-AI trades, and the "What would make this deal work?" button.

The end result of these changes is that the AI is more upfront and consistent. It gives you its best proposal right away, rather than trying to be cute and maybe sometimes not tell you right away. And when you spam that "What would make this deal work?" button, it will keep giving you the same answer unless something has changed.

I think it feels a lot more reasonable this way, and I hope you agree. Read on for all the details.

<!--more-->

Previously there was some randomness in the trade finding algorithm. Sometimes it would make a proposal that was less than its best offer. Sometimes by quite a bit. You could argue this is realistic, and that's what humans do in negotiation... but let's be real, this silly little video game I wrote is not nearly sophisticated enough to be playing those games. It just winds up feeling stupid and annoying. So that's gone.

And there was another annoying issue with the trade finding algorithm. If you clicked the "What would make this deal work?" button multiple times, it would keep adding things to the trade, which doesn't really make any sense. Like, I already asked you what you wanted, why are you telling me something different every time I click when nothing changed?

Before explaining how I fixed that, let me explain how the current trade finder works, which is basically [forward selection](https://en.wikipedia.org/wiki/Stepwise_regression).

It takes some initial assets as a starting point - whatever the user selected in the trade. Then:

1. Check if the current trade is favorable to the user or to the AI. This will determine what "direction" it's trying to move the trade - take a trade the AI likes, and find something that might be palatable to the user without making it a bad trade for the AI? Or take a trade the AI dislikes, and try to find a way to make the AI like it?

2. Compute how the "trade value" will change when each asset (all players and picks on both teams, except excluded ones) is added to the trade.

3. Add an asset to the trade. If trying to make it better for the user, add the best asset possible that still leaves this trade good for the AI. If trying to make it better for the AI, try to add an asset that most narrowly tips the trade in favor of the AI (or if none exist, just add the best asset for the AI).

4. Keep adding assets until we reach a stopping point. When making a trade better for the user, this means stop if adding any more assets would make the trade worse for the user or make it a trade the AI would refuse. When making a trade better for the AI, this means stop if that we've reached the point where the AI thinks it's winning the trade (if this can't be done, then the AI says "I can't afford to give up so much.").

5. If we're trying to make the trade better for the user, we're done! Just return the assets found so far. But if we're trying to make the trade better for the AI, we're not done. Re-run this whole algorithm, starting from the assets found so far, but now going in the direction of making the trade more favorable to the user.

That last sentence in step 5 is new, and brings the aforementioned stability of the "What would make this deal work?" button. Click it multiple times and you get the same proposed trade, because the trade finder algorithm always ends in the same place, after searching for how to make the trade good for the user. Without that step, multiple clicks would make it oscillate back and forth - make it a little better for the AI, make it a little better for the user - by adding scrubs and second round picks to the deal.

I think this new behavior makes more sense. The old behavior wasn't what anyone wanted, it was just a bad algorithm.

You may notice that the algoirthm described here treats the user and AI a bit differently. If you add a positive asset on your team and ask the AI to make it work, the AI will never ask for more positive assets from your team. But it could throw in some more positive assets from its team when the opposite situation arises, in that new part of step 5.

There's no real reason for that, in theory you could allow overshooting in both directions. It'd just make it a bit more complicated, and I'm not sure it's necessary to produce a good result. But it is necessary to have it in this direction, otherwise you'd too often see it say things like "I'm gonna need your best player" - now at least it'll say "I'm gonna need your best player, but I'll throw in a couple picks".

I guess ideally it'd use something smarter than forward selection to build trades, and then this wouldn't be an issue, but that would be even more complicated.

Anyway, this blog post wound up being longer than I intended, and I'm worried it's completely unintelligible. Hopefully not! But if it is, hopefully the improvements to the trade finding algorithm work well for you :)
