---
layout: post
title: Real players in Basketball GM
date: 2020-04-25
tags:
  - post
  - New Feature
  - Real Players
---

Basketball GM has always been made up of randomly generated players on fake teams. Real teams and players were only available as unofficial third-party custom rosters. A lot of people have done great work there, especially [alexnoob](https://github.com/alexnoob/BasketBall-GM-Rosters/releases) and [nicidob](https://nicidob.github.io/rosters/). But it's still not the same as having real rosters integrated into the game itself.

Today, I'm releasing a new version of Basketball GM that, for the first time, includes real players built-in. Just pick whichever option you want <a href="https://play.basketball-gm.com/">when creating a new league</a>:

<p><a href="https://play.basketball-gm.com/"><img alt="Screenshot of new league creation optoins" src="/files/dashboard-new-league-buttons.png" style="max-width: 100%" /></a></p>

<!--more-->

## Teams

When creating a "real players" league, you get a different set of default teams, to match real professional basketball teams. This includes 20 teams carried over from the Basketball GM defaults, and 10 new teams:

- Brooklyn Bagels
- Charlotte Queens
- Indianapolis Crossroads
- Los Angeles Legion
- Memphis Blues
- Milwaukee Maulers
- New Orleans Bayou
- Oklahoma City 66ers
- Orlando Juice
- Utah Missionaries

Thank you to the [people who suggested these names](https://www.reddit.com/r/BasketballGM/comments/g66uz4/team_name_suggestions_for_other_cities/). If you think you have a better idea for one, please [let me know sooner rather than later](/about/), because once I get a logo made for a team I will be much more reluctant to change it!

## Players

Making a simulation game involving real players is hard. The simulation engine is never going to exactly represent reality, and neither are the ratings you assign to players. Getting close enough to allow people to suspend their disbelief is difficult. It's a huge challenge even for sports games made by huge corporations with tons of people working on then. And here I am, just one guy!

I started with alexnoob's rosters. They are the most popular, most comprehensive, pretty darn good overall, and he graciously gave me his blessing to do it. I did make a few changes:

1. I noticed that his roster has a lot of good role players, which makes it too easy to create deep teams of quality players and results in a glut of talented players in future free agent classes. To work around this, I very stupidly [applied a penalty to ratings based on a player's overall rating](https://github.com/dumbmatter/gm-games/blob/3b198218e85e533b28e1a0aa0725cd09b5c5ec7e/tools/process-rosters/index.js#L9-L38). Top players are left alone, but role players are nerfed.

2. Based on legal advice, I redacted some information from his rosters. The built-in realistic rosters do not include player pictures, team names, or team logos.

3. I added a special case to the tragic deaths code so that real players are never killed. I love dark humor as much as the next guy, which is why tragic deaths are in the game in the first place. But I am not comfortable doing that to real players without their consent. If any real NBA player is reading this (ha!) and you want to experience tragic deaths in Basketball GM, [let me know](/contact/) and I'll make an exception for you!

## Other changes

While working on adding real players ot the game, I made a couple other improvements that I should have made a long time ago.

Old players have long been undervalued by the AI in BBGM. If you can remember back many years, you would recall that they used to be overvalued, and they became undervalued as I overshot when trying to adjust that. I have no excuse for why I let it sit like that for years. But along with this update, I made the AI value old players a little bit more.

I also changed the player value formula to value stats and ratings equally. Previously, it was highly tilted towards stats. I did it that way because a player can overperform or underperform his ratings. But with [last year's improvements to the overall rating](/blog/2019/11/game-simulation-ovr-beta/), it makes sense to use ratings more when judging players, to account for scenarios where a player's past stats will not be representative of his future performance. For instance, when switching to a new team or when ratings increase or decrease in the offseason.

Both of these changes are things that I have been aware of for a long time but never got around to addressing. With real players in the game, I'm almost forced to address them. It's harder to ignore a problem if it affects a real player in an obviously unrealistic way.

## The future

I'm not basing this on alexnoob's rostes to say "alexnoob's rosters are perfect" or "alexnoob is the greatest roster maker in the history of roster makers". It's really just a way to do an initial release with some pretty good rosters. That allows me to set up the infrastructure for creating leagues with real players and get some feedback from users.

In the future, I will likely do things [more like nicidob](https://nicidob.github.io/automatic_bbgm/), leveraging automation and statistics to generate rosters not just for the current season, but for any past season too.

But I'm going to take my time. I don't want to rush into anything. I'm going to gradually build up some good tools for roster building, analysis, and tweaking. I'm also going to add support to Basketball GM for team relocation, expansion drafts, rule changes (e.g. no three point line), and changes in play style.

Basically, I don't want to just dump a ton of garbage on you. I want it to be good. By now, after all these years, I hope I've earned a reputation for high quality work. I want to do everything I can to maintain that reputation. And hopefully these new 2020 rosters I just added will do that!
