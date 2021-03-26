---
layout: post
title: GM History page
date: 2020-08-20
tags:
  - post
  - New Feature
---

Back in [the old days](https://basketball-gm.com/old/), there was no way to switch your team in Basketball GM. If you got fired from your job, it was game over. Try again a new league. In part that was just because I hadn't gotten around to adding that feature yet. But also I thought it might be a good way to ensure a league database never grows too large, because at some point you were bound to get fired.

This turned out to not be a very popular feature. People found it too harsh to be forced to quit playing their league. So eventually I made it so you could switch to a new team after getting fired, and also added the ability to switch at any time in God Mode.

This introduced another problem. The game wasn't really designed to support switching teams, so there was no way to easily view your performance was across all the teams you managed in league history. But today there is!

Now you can go to Teams > GM History to view a summary of your overall performance as a GM, tracking all the seasons for all the different teams you managed. Here's what it looks like:

<!--more-->

<figure><a href="/files/gm-history.png"><img src="/files/gm-history.png" class="img-fluid"></a></figure>

One caveat with this. Previously, your past teams were not tracked at all. So for seasons simulated prior to this update, the GM History page will assume that you managed your current team since the beginning of the league. Only future team switches will be tracked. If you want to change that, see [the "Change GM History teams" section on this page](/basketball/manual/worker-console/).

There's also another new feature! Like I mentioned above, the original ways to change your team were either to get fired or use God Mode. There of course is another way that real GMs switch teams - they do a really good job and get hired by another team. No, this is how it happens in Basketball GM too:

<figure><img src="/files/job-offers.png" class="img-fluid"></figure>

It's based on the score you see in your annual performance evaluation. The higher your score, the better your odds of getting offers from other teams, up to 50% for a perfect score.

One other edge case is switching your team in God Mode, because that allows you to switch teams at any time, including multiple times during the same season. If you do that, the team logged in the GM History page will be whatever team you controlled at the end of the season.
