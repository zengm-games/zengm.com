---
layout: post
title: Randomize built-in teams when starting a new random players league
date: 2021-07-11
tags:
  - post
  - Customization
  - New Feature
---

There are now [50 different built-in teams](/logos/). But when starting a new random players league, you always get the same 30, unless you manually select some other teams.

Now in version 2021.07.11.0740, there is an easy way to randomize the teams in your league, and it's pretty cool how it works. Thank you [nicidob](https://nicidob.github.io/) for the idea!

Access it by clicking "Customize" next to the list of teams when creating a new random players league:

<!--more-->

<figure><img alt="Screenshot of creating a new random players league" src="/files/randomize-built-in-teams-1.png" class="img-fluid"></figure>

Then, at the buttom of the Customize Teams screen is where you find the new options:

<figure><img alt="Reset options" src="/files/randomize-built-in-teams-2.png" class="img-fluid"></figure>

The <span class="text-highlight">Default</span> option has been there for a while, it just resets the conferences/division/teams to defaults.

But the other two options are new. Here's how they work:

When you click <span class="text-highlight">Random built-in teams</span>, it replaces the teams currently on the Customize Teams screen with random teams. It does not change the number of teams or anything about the conferences/divisions.

The teams are selected completely randomly, each built-in team has the same chance of being selected. If you instead click <span class="text-highlight">Random built-in teams (population weighted)</span>, then teams in larger cities will have a higher chance for being selected. This may wind up with a more realistic result (like it's less likely to create a league without New York and Los Angeles) but then again you might want a league with more small cities in it. It's your choice!

After selecting the new teams, it needs to group them into divisions. This is done based on their latitude/longitude, with an algorithm similar to [k-means clustering](https://en.wikipedia.org/wiki/K-means_clustering) modified to keep the size of the clusters fixed, so that you ultimately wind up with correctly-sized divisions.

This works pretty well to group teams together into reasonable geographic clusters, each corresponding to a division. But how should the divisions be named? If you have custom names for your divisions, then there's not much it can do, since it doesn't know what those names mean. But if your division names are the default division names (such as "Pacific" or "Southeast"), it does know what those mean, and it does know the average latitude/longitude of those divisions. So if each of your divisions has the same number of teams, it shuffles the clusters around until they correspond well with the division names.

The end result works pretty well. Sure, not always perfect. Sometimes it might randomly pick a ton of teams from the east coast, and then it's going to have a difficult time reasonably filling up the divisions in the western conference. But division assignments in real pro leagues are pretty bad sometimes, so maybe that just makes it more realistic. And if you don't like the random teams it gives you one time, just click it again :)
