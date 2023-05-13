---
layout: post
title: ZenGM Baseball
date: 2022-06-22
tags:
  - post
  - Baseball
  - Milestone
---

When I was a kid, I was obsessed with baseball. My dad says this dates back to watching the Mets win the 1986 World Series when I was a baby, but I don't remember that. I do remember my favorite childhood book. This was back before normal people had the Internet, and sites like baseball-reference didn't exist yet. But I had this giant book of baseball stats going back to the beginning of professional baseball. Just page after page of tables - standings, stats, playoff results, awards, etc. I would sit there reading those tables of stats without ever getting bored.

Baseball simulation games are the type of thing that a kid like me would get obsessed with. Except, they didn't exist yet. Well, they did exist even before computers as [tabletop games](https://en.wikipedia.org/wiki/Strat-O-Matic), but I didn't know about them. The first real baseball simulation game that I heard of was Baseball Mogul back in the late 90s. It's [still being updated today](https://www.sportsmogul.com/), you should check it out. I've talked about Baseball Mogul before as a big inspiration for Basketball GM, since as a got older I grew to like basketball more than baseball and I wanted a similar game for basketball.

And yet, baseball still exists, and there's still nothing quite like watching a good baseball game. After making football and hockey versions of Basketball GM, it's only natural to use that infrastructure for my first love, the only remaining major American sport.

So here it is: [ZenGM Baseball](https://baseball.zengm.com/)

I've been working on this the past few months, which is why updates to the other games have been slow. Expect those updates to return to their normal pace soon.

ZenGM Baseball is definitely not perfect. But I did get a lot of help beta testing it from users on [Discord](/discord/), so hopefully it's at least somewhat good. As always, [feedback is welcome](/contact/).

<!--more-->

Since last year the new game was ZenGM Hockey, I think it's interesting to contrast baseball and hockey simulation. In some sense, baseball simulation is easier. The most important part of baseball is the individual interaction between the pitcher and batter, which is easy to simulate. And every interaction in baseball is pretty well specified. Like if you know the state of the game, you know the right play at all times.

Hockey's kind of the opposite. It's a fluid, creative game where different people do different things at different times. That sounds hard to simulate.

But actually, that makes hockey simulation kind of easy. Just simulate some vague outcomes, and it feels close enough to reality. But if you did that in baseball, it'd feel unrealistic. You need to see batters taking strikes on 3-0 counts. You need to see runners tag up on fly balls, if the circumstances are right. You need to see the runner on 1st base take off on a 3-2 pitch with 2 outs. And on and on. The more of those little details left out, the less it feels like baseball.

So ultimately, I found ZenGM Baseball harder to make than ZenGM Hockey, because there's just more stuff that I need to include in the game. The development time bears that out - I did hockey in about 2 months, but baseball took 4. (Of course, both of those development timeframes are much faster than they'd be if I was starting from scratch, but instead I'm starting with my existing codebase.)

What's next for ZenGM? Like I said above, updates to the existing games. Since they all share the same codebase, many updates will apply simultaneously to all 4 games.

At some point, when I want to make some big new thing, it'll probably be college versions of the existing sports. But I'm not sure when that will be. Next year at the earliest.
