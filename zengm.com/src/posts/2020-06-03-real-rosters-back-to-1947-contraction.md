---
layout: post
title: Real rosters back to 1947, contraction, and more
date: 2020-06-03
tags:
  - post
  - New Feature
  - Real Players
---

Last month when I added [real historical rosters](/blog/2020/05/beta-real-rosters-back-to-1956/), I didn't go all the way back to the beginning of the league in 1947, I stopped in 1956. Why 1956? Because that's the first year where all the teams remain active until today. Prior to 1956, [it was common for new teams to join the league and existing teams to fold](https://en.wikipedia.org/wiki/List_of_National_Basketball_Association_seasons). I did not have a good way to support contraction of teams in Basketball GM, because many parts of the code assumed that all teams were active.

Today that has changed. Basketball GM now supports "inactive" teams, which means it can simulate contraction like occurred prior to 1956. I have extended real rosters back to 1947 and added pre-programmed contraction and expansion for those crazy early years.

<!--more-->

In addition to pre-programmed contraction, you can use God Mode to make contraction happen at any time in any league. Just go to Tools > Manage Teams and switch a team's "Status" from "Active" to "Inactive". When you inactivate a team, all of the team's players will become free agents, so it's probably best to do it right after the playoffs end so those players can be signed by other teams during the normal free agency period.

To activate a team, you can also do that right on the same Manage Teams page. But that will result in the activated team having an empty roster, so it's generally better to activate a team with an expansion draft. When you go to Tools > Expansion Draft, all inactive teams will be shown as candidate expansion teams.

Regardless of how you activate an inactive team, it will retain all its prior history, which you can view at Team > History and on the redesigned Team Records page.

To view the new Team Records page, go to League > History and then click "Team Records" at the top. This isn't a brand new page, but what is new is support for viewing records broken down by different eras of franchise history, inspired by [Basketball Reference](https://www.basketball-reference.com/teams/):

<p><img src="/files/team-records.png" class="img-fluid"></p>

You can also hide all the historical teams by clicking the "Hide historical teams" button at the top, which will then make it look mostly like the old Team Records page.

In addition to all those changes related to historical play and contraction, I made a couple minor "quality of life" improvements that I know some of you will appreciate. If you use God Mode to retire a player, it checks for Hall of Fame eligibility and notifies you if he makes it. And when you edit a player's contract, it also updates the "Salaries" table on player pages and the "Career Earnings" frivolity.
