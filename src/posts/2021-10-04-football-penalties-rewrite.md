---
layout: post
title: I rewrote the football game simulation engine to fix weird bugs and improve penalties
date: 2021-10-04
tags:
  - post
  - Football
  - Game Simulation
  - Penalties
---

One frustrating thing about Football GM, both for me and for users of the game, is all the game simluation bugs. There are fewer than there used to be. I try to track them down and fix them when people report them to me. But sometimes, that doesn't work very well.

Like I got a bug report that sometimes the ball carrier would cross the first down line, fumble, the offense recovers the fumble behind the first down line, and yet it still counted as a first down.

I investigated it, found the part of the code that was doing the wrong thing, and... I couldn't fix it. The bug was ultimately caused not by a little typo or mistake, but a fundamental problem in how game simulation worked. Specifically, the problem was that there was no sense of history. All of the "state" of the game (possession, down, distance, score, etc.) was stored just once. As the game progressed, state was updated. But what if you need to go backwards? Like the aforementioned first down line example. Or, even more troubling, penalties. With penalties, there is always the possibility that anything that happens in the game could be reversed. I had some hacky code to handle some of that, but it was limited, mostly by the fundamental problem mentioned above.

<!--more-->

The previous paragraph is written in the past tense because I just rewrote the football game simulation engine. My goal was not to add any new features or improve realism or anything like that. My goal was to eliminate all game simulation bugs. Or, more conservatively, to at least get to a state where game simulation bugs are realtively easy to debug and fix, rather than finding myself in a situation like above where the only solution is a long, complex, painful rewrite of core parts of the game.

The main innovation of the new system is to only update game state (possession, down, distance, score, etc.) when a play ends. While a play is ongoing and some of that stuff may change, it keeps track of the new state separately from the state before the play. It also keeps a log of everything that happens in a play - every state change, every stat recorded, every penalty. Then when a play ends, that all gets reconciled and ultimatley the main game state is updated.

This makes a lot more sense than the old way. It's basically how real football works.

This new game simulation engine automatically fixes a lot of little bugs, like the first down fumble bug mentioned above. It also lets me improve penalty handling a lot. No longer do I need to figure out the impact of a penalty right when it happens. Instead I can just note that a penalty occurred and then at the end of the play go back and figure out what it means.

That allows for a lot of fun stuff with penalties. Multiple penalties on the same play are now handled with ease. The play-by-play for penalties is more exciting too - it shows when a flag is thrown, and then announces the penalty only after the play, just like in real life. This includes rolling back stats and scores from the box score, if they are negated by a penalty.

And maybe the coolest part... this allows teams to intelligently decide whether to accept or decline penalties, based on looking at the complete result of the play. That would have been incredibly difficult to do before, but now it just works. (Well, there will be some cases where my ad hoc formula for determining the best outcome fails, but it will be rare.)

Same thing for other tricky situations, like multiple penalties on the same play (currently capped at 2 per play) and penalties on plays involving possession changes (sometimes the possession change needs to be undone, sometimes not).

Finally, a new God Mode setting "Penalty Rate Factor" lets you control the rate of penalties, which is useful both for testing out the new functionality and for customizing your league:

The only bad part of all this is the likelihood that I introduced some new bugs along with all these changes. I did a lot of testing, and beta testers on [Discord](/discord/) helped a lot too. But I'm sure it's not perfect. If you notice anything funny, [please let me know](/contact/). Hopefully I am correct about the new game sim engine resulting in bugs being easier to fix.

And I also hope that this is a better foundation to build on in the future, because there are still a lot of other improvements I want to bring to Football GM, and honestly these fundamental issues with the game simulation engine were really blocking me from doing a lot of it. I didn't want to keep building on the old engine, but rewriting it would be hard. Well, that excuse is no more!
