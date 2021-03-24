---
layout: post
title: A few small improvements
date: 2019-08-17
tags:
  - post
  - AI
  - New Feature
  - UI
---

No huge news here, sorry, but there are a few minor improvements in [version 2019.08.18.0097](/manual/faq/#latest-version):

1. A lot more tables (such as Draft Summary) are searchable, filterable, and downloadable. There's still a few that aren't. Let me know if that's a problem. Also let me know if I messed anything up with this change, since the table component is used in many many places!

2. In the past, when you got fired, the AI would never actually change your finance settings back to something reasonable. So if you made them unreasonable, the results would look silly. Now the AI resets their finance settings every year.

3. The Hall of Fame cutoff adjusts based on the number of games in a season and the length of a quarter. Previously, short leagues would have empty HoFs and long leagues would have tons of HoFers.

   Specifically, the cutoff is multiplied by `sqrt(quarterLength / 12) * numGames / 82`. The square root is to account for fatigue in games - shorter games mean the starters play a higher fraction of the game (and the cutoff should be a bit higher) and longer games mean the opposite.

As always, [let me know](/contact/) if you notice any problem with this stuff, or if you have any other feedback!
