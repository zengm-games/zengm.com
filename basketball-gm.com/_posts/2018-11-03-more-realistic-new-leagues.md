---
layout: post
title: More realistic contracts and draft history in new leagues
date: 2018-11-03
tags:
- League Creation
- Realism
---

In the bad old days, before about a year ago, new leagues started with a bunch of randomly created players. The age and talent distributions were somewhat arbitrary. After playing for several seasons, those distributions would shift, which was kind of annoying. In practice, there was more talent at the beginning of a new league than in a league at its "steady state" many years in, which I will call an "established league" in the rest of this post.

This has been fixed for about a year. I fixed it by generating new leagues with simulated draft classes of players, so that the age and talent distributions would be exactly the same in a new league and a established league. It was a great success! But there were still some differences between new leagues and established leagues.

<!--more-->

Although I was simulating draft classes, I was still randomly assigning players to teams and giving them contracts based on their talent. This is not quite what happens in established leagues! In established leagues, rookies are on rookie contracts. In the first free agency period of a new league, you might see a 20 year old budding star available to sign. That should not happen! He should still be on his rookie contract.

So I took the simulated draft classes a step further. For each simulated draft class, it now actually simulates the draft. Players are drafted, first round picks get three year contracts, second round picks get two year contracts, and undrafted players become free agents. No more 20 year old star free agents!

Additionally, when you create a new league, you will see the actual draft results of all the randomly generated players. Previously it would just label everyone as "undrafted" in a new league. Now you can actually go back and view past drafts. There's a few caveats..

* Players who are no longer in the league at the time it starts will not be listed in the draft history.

* The order of teams is randomized each year, so you will probably see teams jumping around in the draft order more than you'd expect.

And as one more cool little detail, players drafted by a team are more likely to play on that team. The probability a player is still on the team that drafted him depends on both how many seasons ago he was drafted and how high of a pick he was. So a first round pick from 2 seasons ago is very likely to still be on his draft day team, but that is much less likely to be true for a second round pick from 5 seasons ago.

None of this *really* matters except for the part about rookie contracts being more accurate to make free agency more realistic early in new leagues. But, at least for me, every little bit of detail and realism makes the game feel a little more immersive.

Please let me know if you notice anything else that is different between new leagues and established leagues, I really would like to make them as close to identical as possible!
