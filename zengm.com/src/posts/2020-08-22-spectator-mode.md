---
layout: post
title: Spectator Mode
date: 2020-08-22
tags:
  - post
  - New Feature
---

Different people play Basketball GM in different ways. Although most people play it to manage a team and try to win, some people play it just to watch what the AI does or explore "what if" scenarios. And that's a completely valid way to play the game. As a big Civ 4 fan, I enjoy [Sullla's Civ 4 AI Survivor series](http://www.sullla.com/civ4survivorindex.html), which is based on that same idea of just watching the AI play in some contrived scenario.

Basketball GM has long supported this type of play with the Auto Play feature, where the game will simulate a big chunk of time with the AI controlling all teams. The problem was that the UI was only good for big chunks of time. Want to watch individual games, see the draft pick by pick, or see how long the top free agent lasts before signing? That is all nearly impossible with Auto Play.

To address this shortcoming, today I released a new feature called Spectator Mode. It's similar to Auto Play in that the AI controls all teams. But it's different in that you control the pace of play, just like normal in BBGM. Want to stop for game 7 of the finals, see the draft lottery, or watch the expansion draft? You can do that all in Spectator Mode.

<!--more-->

To enable Spectator Mode, go to Tools > God Mode and scroll down to the new "Game Modes" section:

<img src="/files/spectator-mode.png" class="img-fluid" />

When Spectator Mode is enabled, you'll see a very clear visual indicator - the Play button changes from green to red:

<img src="/files/spectator-mode-play.png" class="img-fluid" />

One other minor change... during the draft, I added a "Sim to end of draft" button, so that in Spectator Mode you can just quickly sim through the draft without stopping to watch each of your team's picks:

<img src="/files/to-end-of-draft.png" class="img-fluid" />

I also made that button available outside of Spectator Mode, if you don't care about later rounds of the draft and you just want to let the AI finish it for you.

As always, [please let me know what you think of this feature and what other improvements you'd like to see](/contact/)!
