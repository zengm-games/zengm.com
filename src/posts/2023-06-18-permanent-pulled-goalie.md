---
layout: post
title: The permanent pulled goalie bug
date: 2023-06-18
tags:
  - post
  - Bug Fix
  - Funny Glitches
  - Hockey
---

There are plenty of bugs in my game. Usually it's something like "when I click on X it shows an error message" or "when I change two settings at the same time, it breaks" or "the simulation is doing really stupid stuff". Usually bugs are not very fun, they're just annoying. Maybe the funniest bug previously was [when the effect of OL was reversed in Football GM, so playing a bunch of kickers at OL made your team dominate](/blog/2019/10/i-fucked-up-and-the-importance-of-sanity-checks/). The problem was that, in addition to being funny, it was also a game-breaking bug. Too serious to truly be funny.

Now I think I have seen (and fixed!) a funnier bug. This is a bug in [ZenGM Hockey](https://hockey.zengm.com/) that only rarely happens. It's so rare that in the 2+ years ZenGM Hockey has existed, nobody ever noticed it. But recently it was noticed for the first time... when it happened with 8 seconds left in game 7 of the conference finals in a multiplayer league!

<!--more-->

Here's the situation. ZenGM Hockey. Conference finals. Game 7. Washington leads Boston 1-0 from a goal in the 1st period. Now it's late in the 3rd period, so Boston [pulls their goalie](https://en.wikipedia.org/wiki/Extra_attacker) in desperation. _(For those of your who aren't hockey fans, when a team is losing late in the game, they often replace the goalie with another attacking player in a desprate attempt to score a goal to tie the game. Obviously the other team has a great chance to score if you have no goalie, they just need to hit the puck into the net, nobody is defending it. But if you're already losing by 1 goal, who cares if you wind up losing by 2 goals? It's worth the risk to get a better chance at tying the game.)_

And Boston pulling their goalie actually works! They score the tying goal with 1:25 remaining in regulation.

But then... the goalie doesn't get subbed back into the game! So it's a tie game with 1 minute left, and Boston is playing with an empty net! Finally with 8 seconds left, Washington scores the go-ahead empty net goal and wins a trip to the finals.

<figure><img src="/files/permanent-pulled-goalie.png" class="img-fluid"></figure>

So what happened? Is it just an aggressive strategy where sometimes teams pull the goalie in a tied game? No, that would be too crazy. I did not intend for there to be a pulled goalie in a tied game. It is indeed a bug.

When I first got the bug report, I almost didn't believe it. I had never heard of this problem before, and it seems like the kind of thing someone would notice.

First I thought, maybe there is a bug in how it identifies empty net situations? No, [that code is pretty clear](https://github.com/zengm-games/zengm/blob/8f0b2793c3f824852633b957fdb44e7f3f755572/src/worker/core/GameSim.hockey/index.ts#L1013-L1038). It only pulls the goalie in the last period of the game when the team is losing by 1 goal (last 2 minutes) or 2-3 goals (last 3 minutes). Any other situation, and that function will always return false.

Then I thought, maybe there is a bug in how goals are classified, like maybe the UI said it was an empty net goal but it wasn't? Again no, [when setting the type of goal, the first thing it checks is if the `pulledGoalie` variable is set, which is the only way a goal is labeled as empty net](https://github.com/zengm-games/zengm/blob/8f0b2793c3f824852633b957fdb44e7f3f755572/src/worker/core/GameSim.hockey/index.ts#L922). And `pulledGoalie` is only changed [immediately after pulling the goalie, or immediately after sending the goalie back on the ice](https://github.com/zengm-games/zengm/blob/8f0b2793c3f824852633b957fdb44e7f3f755572/src/worker/core/GameSim.hockey/index.ts#L1398-L1445), so a goal labeled as empty net was indeed an empty net goal. It really did happen, Washington really did make the finals because of a real empty net goal in a tied game!

But that last bit of code I linked to does contain the problem.

When a goalie is pulled, you have a new skater take the ice. Internally, each player on the ice needs to have an associated position, and in the case of a pulled goalie it always labels the new skater as an extra center. So then when it decides to put the goalie back in the game, it swaps the goalie with the 2nd center. **But if there is no 2nd center, it fails and the goalie never gets put back in the game!** And it is possible for there to be no 2nd center on the ice in a pulled goalie situation if one of your centers is in the [penalty box](https://en.wikipedia.org/wiki/Penalty_box)!

And indeed, in that Washington-Boston game mentiond above, there was someone in the penalty box when this all happened.

Before actually fixing the bug I wondered, how crazy is that situation? It is a pretty special situation. You need several things to happen:

1. A team pulls their goalie (okay, this isn't that rare, but it doesn't happen every game!)
2. That team actually scores the tying goal
3. That team has a player in the penalty box, and the player they leave off the ice due to this happens to be a center, leading to the goalie staying pulled
4. The other team takes advantage and scores (otherwise you probably wouldn't notice)

\#4 is actually quite rare because often there is not a lot of time left in the game when the tying goal happens.

In total, in a league with default settings, this scenario happens roughly once every 5 seasons. So it's not like this has never happened before. Currently about 1000 seasons of ZenGM Hockey are simmed every day, so it's happened many times. But usually it would happen in some meaningless regular season game between two teams that you don't care about, so it makes sense that nobody noticed it before.

For it to happen in game 7 of the conference finals... well that constraint makes it a lot less common, maybe once every ~500 seasons you would see it in a game 7 playoff game. That is pretty rare, especially when you consider that in a normal single-player game, you probably are not even looking that closely at most of the game 7s between AI teams.

Okay, so it's a super rare bug that happened to first be noticed in a super important game. But how do I actually fix it?

When a penalty happens, it does a line change, putting in a new line that is randomly missing one of the forwards. The missing player could be a center or a winger - the bug in question only happens if it's a center. The line change code also looks for a pulled goalie and puts an extra forward out as a 2nd center - except if a center was selected to be missing from the line due to a penalty, then this is actually the 1st center!

The solution is to pick some other player to sub off if there is no 2nd center. I guess that could still fail in theory if all 6 players were in the penalty box, but that situation is already not supported by the game :)

I also made one other change, which I should have done before, and would have helped me notice this bug much earlier. In the case where something weird happens and it either can't find a goalie to put in the game or can't find someone to sub off, previously it would [just silently ignore that situation](https://github.com/zengm-games/zengm/blob/8f0b2793c3f824852633b957fdb44e7f3f755572/src/worker/core/GameSim.hockey/index.ts#L1430-L1432). Now I made it [crash the game when that happens](https://github.com/zengm-games/zengm/blob/cf824fb6a1eeb3bbadb38f4291e7178b8af66d3e/src/worker/core/GameSim.hockey/index.ts#L1427-L1439), so I'll either notice it from my error log or from someone complaining about it. This makes a lot more sense than silently ignoring it, I'm not sure why I wrote it that way originally. I must have been thinking "oh this will never happen so I don't need to worry about it". As we see here, sometimes that type of thinking can come back and bite you in the ass!

And finally, adding a bit more to the chaos of all this... consider that there were also games (probably about once every 10 years) where this bug benefited the team it affected. As in, they pulled their goalie, tied the game, kept their goalie out, and wound up scoring the winning goal!
