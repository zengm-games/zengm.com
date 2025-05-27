---
layout: post
title: Import Real Players, and how you can use it to create custom historical teams
date: 2025-05-26
tags:
  - post
  - Basketball
  - New Feature
  - Real Players
---

Today I added a new feature to Basketball GM called "Import Real Players". It works similar to the old "Import Players" feature, except instead of you providing a file containing some players to add to your league, it just shows you a list of every single real player in the BBGM historical database. You can pick any age, or even have multiple versions of the same player, at the same age or different ages.

I think that's all pretty straightforward - just enable God Mode go to Tools > Import/Export Players and click Import Real Players.

But I also wanted to write this blog post to explicitly describe how to use this feature for one cool application that several people have asked me how to do over the years. How can you create an entire team (or even an entire league) made up of some particular set of real players?

<!--more-->

First, create a league and enable God Mode.

Leagues always include players (unless you have some weird custom file), so then you'll need to delete players. You can do that using the [bulk actions](https://zengm.com/blog/2025/01/bulk-actions/) feature.

To delete all the players on a team, go to its roster page, click ... in the top right of the table, click "Bulk select", click the checkbox on the left side of the header row to select all rows, and then click the Delete button:

<figure class="overflow-auto"><img src="/files/import-real-players.png"></figure>

If instead you want to delete all players from all teams, do the same thing on any table that shows all players, such as Player Bios.

Now with your teams empty, go to Tools > Import/Export Players > Import Real Players. There you can select which players (and which ages) you want on your empty teams.

That's it! I hope you have fun playing around with this, I think it opens up a lot of fun possibilities. Technically all of this was possible before, but it would have required a lot of manual work creating leagues, exporting players, importing from different files... this new UI may not be perfect for all use cases, but it's much better than it used to be!
