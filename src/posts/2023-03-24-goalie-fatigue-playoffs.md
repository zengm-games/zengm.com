---
layout: post
title: Goalie fatigue in the playoffs
date: 2023-03-24
tags:
  - post
  - Hockey
  - Goalie Fatigue
  - Playoffs
---

In the initial release of ZenGM Hockey, starting goalies played literally every game, which was unrealistic. So shortly after that [I added goalie fatigue to ZenGM Hockey](https://old.reddit.com/r/ZenGMHockey/comments/m370eg/in_the_regular_season_goalies_now_need_rest_days/). But I never actually explaind how it works.

Goalie fatigue works by tracking the number of consecutive games played by goalies, and then decreasing their goalie rating by some amount. That amount is the number of consecutive games played prior to this game, multiplied by a random number between 0 and 9% (the randomness is just so the outcome doens't look too uniform). So after playing 3 games, a goalie will be somewhere between 0% and 27% less effective than normal. If that happens to make them worse than their backup, the backup plays. This is nice because it lets star goalies play more, and it also gives you a good reason to have a quality backup - not just because the backup sometimes plays, but because the more your backup earns playing time, the better your starter will play with a little more rest.

<!--more-->

But I disabled this feature for the playoffs. Why? I was worried that people would be annoyed at their star goalie taking a rest day in a critical playoff game, and also IRL top goalies sometimes do play every game in the playoffs. The problem with that is it made top goalies overpowered. With no fatigue diminishing their abilities, they would perform way better in the playoffs than in the regular season. So some kind of playoff fatigue is needed to make it feel more realistic.

What I settled on was making goalie fatigue 50% as strong in the playoffs as in the regular season, to simulate how players try harder in the playoffs. So that 9% number mentioned above is actually 4.5% in the playoffs. This means starters play more in the playoffs than in the regular season, but backups do play some games. For top goalies who are much better than their backups, the randomness does come into play. Sometimes they will go the entire playoffs without rest, but sometimes they will take 1 or 2 games off.

Another wrinkle is how playoff series are handled. For any playoff series that does not go the full distance (7 games by default), goalie fatigue gets reset before the next round. This gives a nice bonus in game 1 to teams who ended their series early when they face a team that just won a grueling 7 game series - they will have a fully rested goalie, but their opponend will not. I think this makes the playoffs feel both more realistic and more exciting, as now it's not just about who wins a series, the length of the series matters too.
