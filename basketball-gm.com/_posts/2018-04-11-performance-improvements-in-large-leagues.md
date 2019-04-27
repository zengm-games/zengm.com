---
layout: post
title: Performance improvements in large leagues
date: 2018-04-11
tags:
- Performance
---

This probably won't be noticeable unless you have played hundreds, or even thousands, of seasons in the same league. I know most people don't do that, but some do. And for those who enjoy BBGM so much that they play thousands of seasons, I feel that I am obligated to make things work well for you.

Things still aren't perfect, but they're better. For example, viewing the Hall of Fame in a league with 3000 seasons played used to take about 5 minutes on my computer. Now it takes 2 minutes. The performance increase was by [denormalizing part of the database](https://en.wikipedia.org/wiki/Database_normalization), allowing an N+1 query to be removed (getting player stats for each of N players). With a relational database that could be done with a join, but BBGM is built on IndexedDB which does not support joins. Humorously, this part of the database was originally denormalized, and I had only normalized it because that improved performance. But after [Project Iversion](https://basketball-gm.com/blog/tag/project-iverson/), normalization is actually worse than denormalization in this case.

<!--more-->

But why does it still take 2 minutes? Mostly I think it's because there is no index on "Hall of Fame status", so to display the Hall of Fame it has to scan through every retired player. That means it will get slower and slower the longer you play. My thinking was to cache current players in memory, which makes things involving only current players fast. Like viewing stats for this year, or simulating games. That is most important. But eventually it might be worth it to add more indexes that would only be used for pages displaying historical data, like the Hall of Fame.

Another thing I noticed while playing in my 3000 season league was that it spent a lot of time in the "Processing" step before the draft. Why? Similar to the Hall of Fame, actually. As you may have noticed, retired players eventually die of old age. You can see this on their player pages. For some reason, I made the killing happen before the draft. In new leagues this is very fast, but as you play thousands of years, it was scanning over all retired players to see which ones to kill.

I sped this up by using an index that already existed, on player draft year. I figure if someone was drafted more than 110 years ago and isn't dead yet, they deserve to live forever, so instead of scanning 3000 seasons worth of players (or more), it now only scans 110 seasons. Predictably, this makes it about 30x faster, which ends up saving you a minute or two each season.

I'm eagerly waiting for someone to notice an immortal player :)

The downside of all this is that leagues with many seasons are the ones that will take the longest to upgrade when you load them in the new version. Please be patient, it will work! If not, [try this](https://basketball-gm.com/manual/debugging/).
