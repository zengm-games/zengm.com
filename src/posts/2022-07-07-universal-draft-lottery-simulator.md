---
layout: post
title: The Universal Draft Lottery Simulator
date: 2022-07-07
tags:
  - post
  - Draft Lottery
---

Earlier today I released an update allowing the draft lottery to be customized, rather than only having a handful of preset options. You can set the number of picks to determine in the lottery, and set the odds for each team.

Previously, my draft lottery odds calculation code didn't support this kind of thing. Originally it was 3 hardcoded nested loops to handle the 3 picks in the NBA draft lottery. Then when the NBA added a 4th lottery pick, I added another conditional nested loop. At this point it was starting to get pretty ugly. Now the MLB has a 6 team lottery? I'm not doing 6 nested loops. I decided to rewrite it to support any number of picks. That made it easy to support the new custom lottery settings.

While doing that, I figured this might be a fun thing to play with on its own. So I took my lottery code and put it in a little self-contained website called the [Universal Draft Lottery Simulator](/universal-draft-lottery-simulator/). Kind of silly, I know. But I bet someone will have some fun with it!

Also, [it's open source](https://github.com/zengm-games/universal-draft-lottery-simulator).
