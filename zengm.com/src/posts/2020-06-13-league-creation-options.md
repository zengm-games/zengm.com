---
layout: post
title: "A bunch of new options for league creation: challenge modes (no draft picks, no free agents, no trades, no visible ratings), player development realism, and more"
date: 2020-06-13
tags:
  - post
  - Challenge Mode
  - Customization
  - New Feature
  - Player Development
  - Real Player Development Determinism
  - Real Players
---

Today I added a bunch of fun new features to Basketball GM and Football GM. They're all available when you create a new league, by clicking the "More options" link at the bottom.

Different types of leagues will have different options available. This is what you see when creating a new "real players" league in Basketball GM, which has almost all of the new options available:

<p><img src="/files/league-creation-options.png" class="img-fluid"></p>

Some of those options (challenge modes and real player development determinism) are also available in God Mode, where you can change them in any existing league.

What exactly do all of these new options do?

<!--more-->

- **Randomization** - This is the only option that's not new, but I'll still explain it here for completeness. You can choose to "shuffle rosters" (randomize which players are on which team) or choose "random debuts", which is a very fun feature. Random debuts means every player's draft year is randomized. Starting teams are random combinations of current and future players, and future draft classes contain a random selection of real players.

- **Real player development determinism** - By default, BBGM's player development algorithm does not take into account what we know about a real player's future performance. Instead it's based on their current state, and future development is like some hypothetical alternative universe. That behavior corresponds to 0% in this setting. If you increase determinism to 100%, real player development will be based entirely on their real life development curve. Anything in between is a mix.

  In other words, if you set this to 100%, start a real players league in 1970, and sim until 1975, all the player ratings will be the same as if you had just started the league in 1975. There is no randomness in player development. Set it to 50% and it's a mix - players will develop kind of like they did in reality, but with some randomness. Set it to 0% and you get the normal BBGM default, where a player's future career arc is hard to predict ahead of time.

  Setting it to 100% is particularly useful if you're interested in exploring "what if" scenarios with real players. And intermediate values could be fun by making career arcs feel a little more realistic without being too predictable. Still, I think that 0% is the best setting for most people, and that will remain the default.

  This setting has no impact on randomly generated players. It also has no impact on real players in BBGM who are older than they were when they retired in reality. Player development for all those players will just be like normal BBGM.

- **Challenge modes** - These are all ways to make the game harder. And if you really want to get crazy, enable more than one at the same time!

  - **No draft picks** - Your team will not be given any draft picks. You can still trade with other teams to acquire their picks.

  - **No free agents** - You are not allowed to sign free agents, except to minimum contracts.

  - **No trades** - AI teams refuse to make any trades with you.

  - **No visible player ratings** - All player ratings are hidden from the UI, except for retired players. [Skill labels](/blog/2014/02/what-do-skills-mean/) are still visible. For draft prospects, you can also see their rank in their draft class.

- **Equalize region populations** - This sets each team region to the same population, which is the average of all regions. It also disables population growth, so all populations will remain equal forever.

  This is useful if you want more parity in your league, or if you want to be able to play as your favorite city without having an advantage/disadvantage because of its size.

- **No starting injuries** - Real players rosters sometimes include injured players at the beginning of the season. Enabling this option heals those starting injuries.

- **Groundhog Day** - Next season will start immediately after the playoffs, with the same exact players and rosters as the previous season. No player development, no persistent transactions.

  This makes it easy to play the same season multiple times, without having to create a new league for each season.

Additionally, when creating a new "random players" league, you now have the option of specifying the starting season. This was always possible from a [league file](/files/starting_season.json), this just makes it easier.

With so many new options introduced at the same time, I'm sure there will be some bugs. Please [let me know if you notice any](/contact/)!
