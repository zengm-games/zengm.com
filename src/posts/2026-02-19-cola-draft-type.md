---
layout: post
title: "New anti-tanking draft type: Carry-Over Lottery Allocation (COLA)"
date: 2026-02-18
tags:
  - post
  - Customization
  - Draft Lottery
  - Settings
---

Tanking has been a big issue in the basketball world for many years, and it's probably never been more prominent than right now. This has led to many proposals to replace the draft lottery with a better system that discourages tanking. IMHO most of those ideas have serious flaws. The best one I've seen is called the [Carry-Over Lottery Allocation (COLA)](https://arxiv.org/html/2602.02487), and now it's available in BBGM (and the other ZenGM games):

<figure class="overflow-auto"><img src="/files/cola-draft-type-1.png"></figure>

I want to explain more about how COLA works and how it's implemented in BBGM, but first I think I need to explain what it's trying to accomplish.

<!--more-->

Teams tank because they have an incentive to tank. If a team is bad enough, they are rewarded with top prospects.

You could imagine a system that simply did not reward teams for being bad. BBGM has some of those already: "Random", "No lottery, best to worst", and "No draft, rookies are free agents" all remove any incentive for tanking. But they also get rid of one nice thing about the current draft system: it encourages parity by giving good young talent to bad teams.

This makes you wonder... can you have the best of both worlds? Somehow bad teams get good young players, but also there is no incentive to tank?

Many "clever" proposals for this don't actually eliminate tanking. But COLA does, or at least comes very close. It does this by giving all lottery teams the same number of chances.

But won't that do a bad job a putting good young prospects on bad teams? No, because there is one more trick! Lottery chances are not just based on the current season. For teams who do not win the lottery, their chances roll over to the next year. This is kind of cool because it means that if a team keeps getting unlucky in the lottery, their odds of a good outcome next year keep going up.

Specifically, the winner of the 1st pick loses all their lottery chances for next season. The 2nd pick loses 75%. The 3rd pick loses 50%, and the 4th 25%.

So in practice, the teams with the highest lottery odds will be the teams who have been in the lottery a lot recently without winning it. In some sense, that actually is more "fair" than the current lottery based only on a single season.

In addition, lottery chances decrease based on playoff success. The champion loses all their lottery chances (a small price to pay for a ring, right?). The runner up loses 75%, semifinal losers lose 50%, and quarterfinals losers lose 25%. The effect of this is to bias the lottery towards teams that have not had much playoff success, which is another way COLA is arguably better than the current system, which doesn't really have a mechanism for this. Right now you could win a championship one year, and then win the lottery the next year if your star gets injured and you tank. With COLA, that would be basically impossible.

But what if there is a really strong draft? Wouldn't teams want to tank so they miss the playoffs and are eligible for the lottery? [The paper](https://arxiv.org/html/2602.02487) has a complicated mechanism for handling this situation, and ultimately for strong draft classes the cutoff for lottery eligibility is moved up, such as to the 2nd round of the playoffs so the 8 first round losers are still in the lottery. For my implementation in BBGM, rather than have the complexity of a moving cutoff, I made it just always use the 2nd round of the playoffs as the cutoff. At that point, it seems much less likely a team would want to tank for the draft rather than be one of the final 8 teams competing for a championship.

What about a weak draft? If you win the lottery you lose all your chances, but maybe you'd rather keep them for next year and a stronger draft class? Well you can do that by opting out of the lottery. There is a small penalty to do this, but then you keep the rest of your chances for next season. In BBGM, you can do this on the Draft Lottery page during the lottery phase:

<figure class="overflow-auto"><img src="/files/cola-draft-type-2.png"></figure>

When switching to the COLA draft type, or when starting a new real players league with historical data, it will go over the past 20 seasons of data to initialize the current lottery chances, based on past lottery results and playoff success. So right when you start a real players league you can see the teams who have not had much recent lottery or playoff success at the top of the lottery odds - Sacramento, Chicago, Brooklyn, Utah, etc.

If reading all this hasn't left you convinced, go try [the original paper](https://arxiv.org/html/2602.02487), I am leaving out a lot of details.

Another interesting piece of trivia about the COLA method... the first author if the paper is Timothy Highley, a math professor at La Salle University. Many years ago he [actually contributed some code to BBGM](https://github.com/zengm-games/zengm/pulls?q=is%3Apr+is%3Amerged+author%3Atjhighley), specifically the heigh distribution that is still used for generating players, and one tragic death:

> PLAYER_NAME cannot be found and is presumed dead. Neighbors reported strange lights in the sky above his house last night.

And now COLA is his third contribution, although indirectly since I'm the one who actually implemented it in BBGM.

This also reminds me of [when I added the Elam Ending to BBGM back in 2020](/blog/2020/08/elam-ending/), hoping that I could do my small part in raising awareness of how basketball could be improved. The Elam Ending sadly seems to have lost momentum since then. But maybe we can make it happen this time with COLA!
