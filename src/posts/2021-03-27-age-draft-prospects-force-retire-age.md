---
layout: post
title: 'Two new league settings: "Age of Draft Prospects" and "Force Retire at Age"'
date: 2021-03-27
tags:
  - post
  - Customization
  - Draft
  - Settings
---

If you've been keeping a close eye on [the changelog](/changelog/) you may have noticed some work done by @domini7. The new features described in this post are his magnum opus. Thanks @domini7, I love you! If anyone else wants to get involved, [head over to GitHub](https://github.com/zengm-games/zengm).

Today there are two new league settings available in all leagues.

**Age of Draft Prospects**: Allows you to change the age of generated draft prospects.

**Force Retire at Age**: Allows you to set a maximum age limit for your league.

Both of these options are available to be edited at Tools > Settings in God Mode, but you might be better off editing the `draftAges` and `forceRetireAge` settings in a [league file](/basketball/manual/customization/game-attributes/) so that they apply for randomly generated players in new leageus. (At some point I will make it possible to edit these before league creation from the UI!)

You may think something like, "hey, this will let me simulate a college or high school league!" Well, ages are part of that, and this does help. But there's still a lot of other differences between pro and college sports, so that's not _really_ what this is about. It's really about letting you do whatever weird shit you want to do. Seniors league? Sure. Dystopian future where babies are raised to play basketball? Why not. Have fun.

How does it work?

<!--more-->

For age of draft prospects, it changes the age at which players are generated. Players younger than default will be generated with lower ratings to account for the increased development they will experience as young players. And older players will get a boost, to simulate development they missed.

That does pose a problem with very old players, because under normal player development, all really old players will have basically 0 for every rating. That's no fun if you want a league of entirely old players. So when generating old draft prospects with this method, it will not apply an aging penalty to them, depending on the minimum draft age value. By that I mean, if you set the draft age range to [20, 50], 50 year olds will be horrible because they are being generated on the normal player ratings scale. But set it to [50, 60], it will treat 50 years old as the baseline, and older players will generally have lower ratings to simulate aging beyond that.

This does imply that weird things will happen if you change this setting in an existing league, because then new players at age X may have very different ratings distributions than old players at age X. But I'm not sure what a better solution would be (other than completely redefining the 0-100 rating scale so there are no limits, which is probably too big of a change to ever happen).

Another caveat: you can't control the distribution of ages. There is an internal formula to determine how many players of each age belong in a draft class, and it's hardcoded. It will result in the full range of ages being used, but it's biased towards producing more younger players. That's how it works in default leagues, to simulate the best players going pro earlier. But it may not make sense for whatever weird league you want to create. It also means this can't be used to do something like "let a few younger players enter the draft" - if you lower the minimum age, you're going to see a bunch of prospects at that age.

The "force retire at age" feature is a lot simpler. Player hits the age limit? Player retires. That's that.

Overall, it is possible that these features won't work exactly how you want, but I think they'll still be fun.

Please [let me know](/contact/) if any of the above limitations cause you problems. But overall, I think the tradeoffs described above make sense and allow you to do some pretty fun custom leagues. I hope you agree, and please post any fun stuff you do on [Reddit](https://www.reddit.com/r/Basketball_GM/).
