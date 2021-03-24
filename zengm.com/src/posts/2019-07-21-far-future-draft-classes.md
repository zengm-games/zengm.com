---
layout: post
title: Far future draft classes
date: 2019-07-21
tags:
  - post
  - Customization
  - New Feature
---

For a long time, Basketball GM has let you view draft classes up to three years in the future. Similarly, for people making custom roster files, it's been possible to define up to three years of draft classes in the file.

But what if you want more? Like if you want to make a file for the NBA in 2003, with every draft class up to today? Previously that wasn't possible, but now it is.

<!--more-->

As described [on the players customization page of the manual](/basketball/manual/customization/players/), you can specify a player in any future draft class by setting his team ID to -2 and setting his draft year to whatever you want it to be.

Previously, each draft class had a distinct team ID number (-2, -4, and -5 for 1, 2, and 3 years in the future respetively -- the old format is still supported for old league files with a `version` under 33, so don't worry, your existing league files will still work). IIRC, I did this because I had an index on team ID already and in IndexedDB it's kind of annoying to query things that don't have an index. But that's not a good reason, because the added complexity of shuffling players around between team IDs and keeping the team IDs in sync with the draft year caused a variety of bugs over the years, and also prevented me from easily adding support for additional draft classes. So finally, after years of annoyance, I bit the bullet and did it the right way.

In God Mode you can edit future draft classes by creating/editing a player, setting Team to Draft Prospect, and setting Draft Class to whatever year you want.

You still can't easily view draft classes more than 3 years into the future. I think that is actually sensible, because players beyond that will be so young that you won't really have any idea how good they are.

Also, roster makers, this feature would be great for easter eggs! In Basketball GM, there's already a small chance of Donald Trump or LaVar Ball appearing. You could add your own easter eggs that appear hundreds of seasons in the future.

As always, [let me know if you have any problems](/contact/). I tried to do a lot of testing, but this did require code changes in many different places, so I could have made a mistake.
