---
layout: post
title: The AI will now trade more than 2 draft picks at a time
date: 2025-08-18
tags:
  - post
  - Trades
---

For a long time, the trade AI has been hardcoded to never trade away more than 2 picks in a single trade. I did this as a quick fix many years ago to prevent people from scamming the AI out of too many picks. Because [some people are able to aquire way too many picks even with this constraint](https://www.reddit.com/r/BasketballGM/comments/1mtzmfp/i_have_become_sam_presti_destroyer_of_worlds/). But ultimately it was an imperfect solution, for two reasons:

1. It treated 1st round picks and 2nd round picks the same. If it's okay to trade away 2 first round picks, it should definitely be okay to trade away 3 second round picks, but that was not possible. That was always just kind of dumb, and was only done to save a few lines of code.

2. Instead of a hard limit at 2 picks, I could just make the AI increasingly reluctant to trade away more. So maybe a great offer gets 3 first round picks, but 5 would be nearly impossible.

<!--more-->

So that's what I did in the latest update. Now there is no special logic applied to second round picks, you can trade for all of them if you want. And you can do the same for first round, but it's going to get pricey as you ask for 3+ first round picks in one trade.

Please [let me know](/contact/) if you think it's too easy/hard to trade for 3+ first round picks now.
