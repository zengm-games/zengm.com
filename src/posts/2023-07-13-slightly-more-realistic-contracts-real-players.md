---
layout: post
title: Slightly more realistic contracts for real players
date: 2023-07-13
tags:
  - post
  - Contracts
  - Real Players
---

When you make a real players league in BBGM, it does try to use real contract data. But for several reasons, the contracts in BBGM cannot be exactly like real contracts. BBGM contracts are simpler than real contracts: no player/team options, no extensions, no non-guaranteed contracts, etc. And the real contract data I have only goes back to like the 1980s, so any time before then we are flying blind.

Anyway, there are a bunch of problems, and I'm only here to solve one of them right now. The main part of this problem is that the real contract data I am using doesn't have the start/stop dates of contracts, it's just the dollar value each year. From that, I need to kind of guess where a player actually signed a new contract. Mostly I do this by looking for big increases/decreases in contract value. That identifies a lot of them, but not all.

<!--more-->

The pathological case is a player that signs similar contracts for a very long time, such as a star player who keeps signing max contracts for 20 years. It's impossible to tell when contracts actually expired from that data. The best I can do is just cut the contract off after like 5 years. This kind of sucks, but it's about the best I can do with the current data.

Another problem - what should contract values be in BBGM? In BBGM, all contracts have the same value every year, but in real life they rarely do. Easy answer is to just average them together, so like a real 2 year contract that is $10M year 1 and $11M year 2, just call it $10.5M/year for 2 years in BBGM.

Those two problems are related, because when you take the average, you need to first decide what years to use in the average. Previously, I was using all the years that can't be distinguished as separate contracts. In the example above of a player on a max contract for 20 years, the average would include all 20 years. That really didn't work very well, because the value of a max contract changes a lot over 20 years, so starting a league early in that player's career would result in a contract that is much too high, and the opposite would happen for leagues started late in his career.

Without requiring more data, a much better solution to this problem would be to not use that entire 20 year period, and instead only use the years that are actually in the current contract (which, as mentioned above, is a maximum of 5 years). You still lose some accuracy from not being able to have a contract that changes in value every year, but it's a lot closer to reality.

So, that's what I did in the latest version of BBGM. As an added bonus, it also lists accurate year-by-year values for past seasons prior to the first season in your league, rather than showing all the averaged values like it did previously.

This is what the difference looks like, for a league starting in 2023. Notice how in the new version, only 2023 and after contain the averaged contract data, and how the average of those last 3 years is way different than the average of 18 years in the old version:

<figure><a href="/files/slightly-more-realistic-contracts-real-players.png"><img src="/files/slightly-more-realistic-contracts-real-players.png" class="img-fluid"></a></figure>

I am aware that none of this makes me look particularly good. I probably should have done this solution in the first place. It's slightly more complicated code, but it works a lot better. But, that's kind of how everything is. Every thing I add to BBGM, part of me is like "damn I really should have done this like 5 years ago". And yet my list of things I'd like to add to the game keeps growing :)
