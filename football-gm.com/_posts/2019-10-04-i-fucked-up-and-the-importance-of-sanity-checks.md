---
layout: post
title: I fucked up, and the importance of sanity checks
date: 2019-10-04
tags:
- Bug Fix
---

Previously, some of you had noticed something strange about team construction and game simulation in Football GM. If you made a team of all one type of player, that team would actually perform pretty well, usually making the playoffs. Obviously that doesn't make any sense.

Looking at it more closely, I noticed that only passing stats were behaving strangely. A team of all kickers was horrible at running and at stopping the run. But they were incredible at passing! So I took a look at the passing code. Turns out the problem was just a small typo. [The effects of pass blocking and pass rushing were reversed for calculating the completion percentage and distance of passes.](https://github.com/dumbmatter/gm-games/commit/05aa4ca97bf055792a4e656852dcd4af6d1d8336) My bad. Small fix.

But this is actually really important, and not just for silly things like a team of all kickers!

<!--more-->

As an example, in my test league there was an Argentinian quarterback named Patricio Lescano. Great accuracy, decent power, poor vision. Overall, a solid quarterback. Before the bug fix, he led his team to the playoffs with a very respectable quarterback rating of 93.7. After the bug fix, his quarterback rating fell to 67.3 and his team naturally missed the playoffs.

Why? Because he had a horrible offensive line. So he went from having a significant boost due to the bug, to having a significant penalty. His yards per completion dropped from best in the league to worst.

Most teams won't experience such a large change after the bug fix, but some will.

Additionally, linemen will now be much more impactful, since before good linemen actually hurt you in the passing game and now they correctly help you.

This highlights the importance of sanity checks. A team of all quarterbacks is silly, but the game should still do reasonable things when presented with silly situations. If not, it could be a deeper bug that actually impacts other situations too. Just like this bug.

So here's the final analysis of that sanity check. Before the bug fix, a team of all QBs was pretty good and put up ridiculous passing stats. After the bug fix, that same team goes 0-16, losing every game by an average score of 149-2.

It's possible that game simulation still needs more tweaking after this fix. Linemen are more important now, but maybe they are too important? [Let me know what you think.](/contact/)

I apologize for whatever chaos this bug fix imposes on your leagues :)
