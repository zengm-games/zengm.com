---
layout: post
title: Updated default injuries
date: 2026-07-13
tags:
  - post
  - Injuries
  - Settings
---

The latest update to Basketball GM contains a new set of default injuries. This is based on work by [Xinwei Huang](https://github.com/Felix-hash9898) who analyzed injury data, largely the official NBA injury reports supplemented by some other data. Previously I was using the results from [this paper](https://pubmed.ncbi.nlm.nih.gov/23015949/) which is great, but it's based on data from 1988-2005 which is a little bit dated at this point.

That's probably the main thing you'll notice, that the injury names and durations feel more modern. Especially duration, injuries now last longer than they did previously, because that's what the data says these days. Hopefully this makes BBGM feel a little more realistic.

<!--more-->

For existing leagues with default injuries, they will have the new injuries applied. If you have edited the injuries in a league, then that league will not be altered.

You can import/export injuries from the League Settings page. Here are CSV files containing [the old injuries](/files/updated-default-injuries/old.csv) and [the new injuries](/files/updated-default-injuries/new.csv).

This update applies only to BBGM, not to the non-basketball sports. ZenGM Hockey already had a distinct list of injuries. Football GM and ZenGM Baseball previously were using the same injuries as BBGM, and I decided to keep them on the old BBGM injuries because I'm unsure if the new BBGM injuries are actually any better for those sports.

This update is just about improving the default injuries in the game, not about making any deeper changes to the injury system. I am aware that the BBGM injury system is probably a little oversimplified and there are several ways I would like to improve it in the future (this is just off the top of my head, not an exhaustive list):

- Injury frequency should depend on position - not important for basketball, but very important for the other sports!

- When severe injuries lead to ratings decreaing, that should depend on the location of the injury, rather than always affecting the same ratings

- It would be cool in historical leagues if injuries changed in severity over time, like I don't think people were coming back from torn ACLs in the 1950s

- Football and baseball should have their own sets of injuries and not just use the old BBGM ones, although without position-specific injuries it can never be very satisfying, which is why I haven't done it yet
