---
layout: post
title: FBGM updates to keep you busy on Super Bowl bye week
date: 2026-02-01
tags:
  - post
  - Customization
  - Game Simulation
  - Football
---

Lately I've been working on a bunch of little improvements for FBGM and I'm releasing them all today, since there are no real football games today so maybe you are looking for something else to do :)

The new features fall into a few different categories:

<!--more-->

# Game simulation improvements

- Fast WR were overpowered and have been nerfed a bit.

- WR snap counts are a bit more equitable, because previously basically only your top 3 WR would get a significant number of targets, but now the 4th and 5th WR get some too.

- Tackling (particularly from linebackers) is more important, especially for forcing fumbles.

- Kickers/punters get injured less often.

- Previously kick and punt returns were completely random, but now they depend on the ratings of the returner (sorry guys, it's a bit embarrassing to admit that one!)

- In the rare case that a FG is missed from inside the 20 yard line, the ball is placed at the 20 (I was not aware of this rule until someone emailed me about it!)

- Due to some of the game sim changes mentioned above, some positions may now be more/less important than before, so I recalculated the team ovr formula, which the AI uses in some places for roster building such as the draft. I think the biggest change is that WR and LB are now more valuable.

# Better clock management

These were partially implemented before, but sometimes didn't work correctly. Now they should always work.

- Don't punt if you're losing and the other team can kneel out the clock (or come very close to that)

- Don't start kneeling if you might run out of space before your endzone before the clock runs out

And one more fix to the UI only, which makes it more clear if the coach AI is doing something stupid or not, which will hopefully motivate me to improve it in the future:

- When timeouts are called, the play-by-play log shows whether it was done for clock management or for some other reason (which you could imagine as running out of time to change personnel on defense, or avoiding a delay of game penalty on offense). The purpose of this is to make it more clear what is happening when a timeout is called in a weird situation - is it a bug in the clock management logic (they exist, the logic is pretty rudimentary now!) or did a team just run out of time and have to take it?

# New settings

- Added an option to disable 2-point conversions.

- Added "Overtime Type" settings for regular season and playoffs, to let you pick between sudden death, sudden death (except FG on first possession), and both teams must possess. Default is both teams must possess for both the regular season and playoffs, which is the NFL's new rule as of this season.

# Other

- Fixed the team rushing/receiving stats table (it was missing some columns).

- Added player "awards" for league leaders in sacks, interceptions, and total (non-passing) TD. Also correctly give these awards to all tied leaders not just one random one (this last improvement applies to all sports, not just FBGM). These changes are not retroactive, they only apply to seasons you sim in the new version.
