---
layout: post
title: Draft order now matches the NFL/NHL in Football GM and ZenGM Hockey
date: 2021-03-18
tags:
  - post
  - Draft
  - NBA
  - NFL
  - NHL
---

As the maker of basketball, football, and hockey simulation video games, sometimes I get amused by all the silly little differences between the major American pro sports leagues. Maybe they need some kind of meta-commissioner to iron out all those differences. If duty calls, I would gladly do my part to help!

I'm writing this today because I just rewrote my draft order code.

For a long time, there have been options about how to handle the draft lottery. Those still exist. But what I'm talking about here are all the other draft order rules. Previously they were all implemented like the NBA, but now Football GM behaves like the NFL and ZenGM Hockey behaves like the NHL. (Basketball GM should be unaffected, barring bugs.)

What exactly is this new behavior? Behold, my hopefully comprehensive list of silly little draft order differences across American pro sports leagues:

<!--more-->

### Draft lottery

NBA: 4 non-playoff teams are selected

NFL: No lottery

NHL: 3 non-playoff teams are selected

### Non-lottery first round order

NBA: Based on regular season record

NFL: Based on playoff performance

NHL: Based on a weird combination of playoff performance and winning your division

### Tiebreakers

NBA: Completely random

NFL: Not random, but also not the same tiebreakers they use for playoff eligibility, for some reason.

NHL: Not random, but also not the same tiebreakers they use for playoff eligibility, for some reason. (And neither the playoff or draft tiebreakers are the same as the NFL, of course.)

### Ties in the lottery

NBA: Lottery odds are evenly distributed to tied teams.

NFL and NHL: Lottery odds are not evenly distributed to tied teams. Hey, we found two leagues that do the same thing about one of these issues!

### 2nd+ round draft order

NBA: Based entirely on record.

NFL: Exactly the same as the 1st round, except for ties.

NHL: Same as the 1st round, except the lottery teams are instead ordered just by points.

### 2nd+ round tiebreakers

NBA: Swap the order that the picks went in the first round (incorporating lottery results).

NFL: Rotate them each round (like 1-2-3, 2-3-1, 3-1-2, 1-2-3, etc)

NHL: Same order as the 1st round.

At the end of the day, most of those differences are completely arbitrary and not very important. But now BBGM/FBGM/ZGMH has all of them. Fun stuff. I'm honestly not sure if that was sarcastic... it actually was kind of fun to code it!

One caveat: the basketball/football/hockey differences are hardcoded in BBGM/FBGM/ZGMH (except the "ties in the lottery" one, that you get based on the "Draft Type" setting in your league). Maybe it would be fun to make them all options? I'm not sure if I care enough to do that, or if anyone cares at all. Nobody's ever asked me for that feature, although I bet somebody will now that I've written this :)

The more important thing is, I probably messed something up while changing all this stuff. Please [let me know](/contact/) if you notice anything strange!
