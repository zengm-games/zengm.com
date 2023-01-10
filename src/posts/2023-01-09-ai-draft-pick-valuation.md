---
layout: post
title: Improvements to AI valuation of their own draft picks in trades
date: 2023-01-09
tags:
  - post
  - AI
  - Trades
---

There have been a lot of blog posts about the trade AI in the past - just click that Trades tag above if you don't believe me! And yet, the trade AI remains flawed.

The most ambitious (and so far failed) attempt at improving the trade AI came from [nicidob](https://twitter.com/nicidob), where he tried to come up with a model to predict how the various "assets" a team owns (not just players and picks, but also cap space) contribute to the likelihood of winning a championship over the next several years.

<!--more-->

This is a really cool idea because it naturally explains all the strategies real teams use. Like a contender is willing to trade a draft pick for a veteran role player because they have a shot at a title and the role player helps that. It'd have the opposite effect for a rebuilding team - they need that draft pick to turn into a future star, and a veteran role player actually hurts their chances at tanking for a good pick.

Unfortunately, we never quite got this algorithm working to the point where I was happy with it, IIRC mostly for two reasons:

1. It was a complicated model, which made it difficult to tweak its behavior.

2. It was not strictly superior to the current trade AI. Certainly you could find cases where it was better, but you could also find cases where it maybe behaved worse. That made me anxious about if it was actually an overall improvement or not.

So I wrote all that just to give some context to a new update to the trade AI today, which ultimately culminated in [this pull request from sumitde22](https://github.com/zengm-games/zengm/pull/439). His idea was to fix a more narrow issue in the trade AI, which would avoid the two problems mentioned above.

The problem sumitde22 noticed was that AI teams were not valuing draft picks correctly in trades involving both picks and players. The AI values picks by estimating how good a team is, and from that estimating what number the pick might be, and from that estimating how good of a prospect is available in that draft class. But when it does that first estimation of how good a team is, it does it with the team's current roster. That is not accurate for trades involving players too, because after the trade is complete, the roster has changed and the team might be better or worse than before.

This led to an exploit that I think many people have used - trade for some good players from a top team, and also ask for some first round draft picks. The other team thinks those draft picks are not very valuable because they are a good team, not realizing that they will no longer be a good team after the trade completes.

sumitde22 initially wanted to recompute draft pick estimates whenever a trade proposal changed, but we found that to be a bit too slow for AI-to-AI trades that run in the background during the season. To work around that problem, he made it recompute draft pick estimates only for trades involving the user. I think that is a good compromise - the AI is not smart enough to purposely use the exploit mentioned above, and all AI teams are equally likely to luck into the exploit, so in the long run it should mostly even out.

Many thanks to sumitde22 for going back and forth with me about this for the past couple weeks. This is also what led me to notice the bug I recently fixed in ZenGM Baseball that gave a 20% performance improvement.
