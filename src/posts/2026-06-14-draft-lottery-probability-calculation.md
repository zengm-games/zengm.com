---
layout: post
title: Improved draft lottery probability calculation
date: 2026-06-14
tags:
  - post
  - Draft Lottery
  - Statistics
  - Technical
---

In [my previous blog post about the 3-2-1 lottery](/blog/2026/05/nba2027-draft-type/), I wrote about how the probabilities for each pick change depending on how many teams trigger the top-1/top-5 constraints:

> [The probabilities] depend on how many teams in the lottery have constraints on winning the #1 or a top 5 pick, and whether those teams have 1, 2, or 3 chances. In theory I could find every possible scenario and precompute them all, but that's a lot of scenarios! (Homework assignment for you: how many possible scenarios is it, exactly?)

See that little combinatorics puzzle at the end? Well only one person messaged me with an answer, wiigeneral from Discord. And after correcting a small mistake, he got it right: there are 491 scenarios.

Then we talked a little more about the challenge of generating these full tables of lottery probability odds:

<!--more-->

<figure class="overflow-auto"><img src="/files/draft-lottery-probability-calculation-1.png"></figure>

There's two ways that ZenGM does it:

- **The slow accurate method:** exhaustively calculating all the conditional probabilities. When there are a small number of lottery selections, that is pretty fast. But as the number of lottery selections increases, it gets quite slow. So for larger lotteries, this doesn't work and a faster algorithm is needed.

- **The fast inaccurate method:** Monte Carlo estimation, which basically means simulate the lottery 100k times and see how many times each team wins each pick. Since simulating the lottery is extremely fast, this is fast enough, even at 100k iterations. But it's not completely accurate, the numbers change a little bit every time you run it, which is annoying. To fix that would require more iterations, but then it'd be too slow.

The 3-2-1 lottery has 16 lottery selections, which is way more than the 4 the old lottery had, and 16 is way too many for this to work. So instead of the slow accurate method, it used the fast inaccurate method.

So I asked wiigeneral, can you come up with something better? And a few days later, he did! He rewrote the slow accurate method to be something more like... **the fast but still accurate method**. Rather than naively calculating these giant conditional probabilities, he used dynamic programming and bitmasks to do the same exact computation much faster. It handles the 16 teams in a default 3-2-1 lottery with no sweat.

Then he added another clever performance improvement by noticing that many rows in the table are exactly identical. For instance if you look at the lottery table above, the first 3 rows are identical, and several other sets of rows are too. So when it's calculating these probabilities, it only has to calculate one of the identical rows, and then it can copy the values to the others. This doesn't matter much performance wise for a typical example like this with 16 teams, but it does make it still run very fast even in weird leagues with hundreds of teams in the lottery. That may sound silly, but BBGM is very customizable and people do some crazy things with it!

In some cases it will still switch back to the old fast inaccurate method, but I think that will only happen if you have some weird custom lottery without many repeated "chances" so that it can't use the aforementioned optimization.

There's also some chance my testing has missed something and that this update causes performance issues in your league when viewing the draft lottery table. If that happens, [please let me know](/contact/)!

But overall I'm just really happy to have gotten this contribution from wiigeneral. This is really brilliant work. Definitely one of the coolest external contributions to ZenGM. Thank you wiigeneral for making the ZenGM draft lottery probabilities a little more accurate!

[Here's the code](https://github.com/zengm-games/zengm/blob/615328b5926a1a16d793444d3ae2989cbfe65684/src/worker/core/draft/draftLottery.ts#L355-L661) if anyone is curious.
