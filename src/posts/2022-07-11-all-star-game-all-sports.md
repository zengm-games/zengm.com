---
layout: post
title: All sports have an All-Star Game, and more All-Star settings
date: 2022-07-11
tags:
  - post
  - All-Star
  - New Feature
---

The All-Star Game has been in Basketball GM for [a few years now](/blog/2019/09/all-star-game/), but I never got around to putting it in the other sports. Well, now I have. Plus some new All-Star settings for BBGM too.

The biggest difference between basketball and the other sports is that positions matter a lot less in basketball. You can throw 5 guys out there and it might not be ideal, but they can play. For other sports, the All-Star Game needs to be pretty rigid by position for it to feel credible. And that's how it works, you'll see the best players at each position selected as All-Stars in other sports.

There's some new customization features too, available in the new "All-Star" section of the League Settings page:

<!--more-->

Previously, the All-Star teams in BBGM were only generated one way, with a modern NBA-like draft. Now there is a setting to let you do it by conference (only works if you have exactly 2 conferences) or by just assigning the top players to teams regardless of conference.

By conference is now the default in football/baseball/hockey. Draft is still the default for BBGM, except for real players leagues before 2017 which default to by conference and then switch to draft in 2017, just like the NBA did.

You can also customize the number of All-Stars, which previously was not possible.

You always had the option of setting the All-Star Game to happen at any time during the season. Additionally, you can now set it to happen right before the finals start in the playoffs, similar to how the NFL does it. A problem with the NFL is that nobody on the finals teams plays because they need to rest for the real game. I am taking advantage of the fact that my games are all make believe to impose that no injuries or fatigue can occur during an All-Star Game in the playoffs, so that all the best players can play without any downside. (There is still a small injury risk for a regular season All-Star Game, but less than a normal game.)

I did have to make a bunch of code changes to support all this new stuff, so if you notice anything behaving strange, it's probably a bug! Please [let me know](/debugging/).
