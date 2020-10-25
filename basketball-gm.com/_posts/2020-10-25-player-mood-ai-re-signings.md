---
layout: post
title: Player mood improvements for AI team re-signings
date: 2020-10-25
tags:
- AI
- Player Mood
---

Today I released two improvements based on last month's [player mood update](/blog/2020/09/player-mood/) related to how the AI re-signs its players, in both [Basketball GM](https://play.basketball-gm.com/) and [Football GM](https://play.football-gm.com).

First, let me explain how AI re-signings used to work. It's always been a dirty little secret that the AI did not obey the player mood system. That was true of both the old and new player mood systems. Instead, there was a single formula to give "the probability a player re-signs with a team", meant to capture both if the team wants to re-sign the player and if the player is willing to re-sign. The end result of this formula was that high value players often became free agents, but there was no way to reliably predict which players would end up in the free agent market.

To improve on that situation, today's two changes are:

<!--more-->

1. AI teams obey the same player mood system that you do. If a player is upset and doens't want to re-sign, he will become a free agent. If a player is willing to re-sign, the AI team will re-sign him if he makes the team better. Thanks [nicidob](https://twitter.com/nicidob) for pushing me to do this - I was planning to do this ever since the original mood implementation years ago, just never did!

2. You can see players mood towards their current team, not just your team.

You can this new information by clicking any player's mood button, which now has two tabs, one for your team and one for the player's current team:

<img src="/files/player-mood-ai-re-signings-1.png" class="img-responsive" />

You can also see it on several pages, such as by going to Players > Free Agents > Upcoming Free Agents:

<a href="/files/player-mood-ai-re-signings-2.png"><img src="/files/player-mood-ai-re-signings-2.png" class="img-responsive" /></a>

So just at a glance, you know Jesse Williams and Jamari Terry are almost guaranteed to be on the market, Charlie Williams is almost definitely going to re-sign with his team, and several other players are in between. Very useful information when you're trying to plan for free agency!

Another effect of this change is that AI teams will be more likely to keep their good players. That will make the game more challenging (fewer good free agents, more good AI teams staying good) and more realistic (fewer AI dynasties bizarrely broken up by players leaving).

My hope is that these effects are balanced - a little harder from AI teams being smarter, and a little easier from being able to plan for free agency better. Overall, I think the AI feels less stupid and free agency feels less random. I hope you agree!
