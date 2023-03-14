---
layout: post
title: Better handling of players with gaps in their career in historical real players leagues
date: 2023-03-13
tags:
  - post
  - Basketball
  - Real Players
---

Just to be clear, this is about real players rosters in Basketball GM, for players who had some gap in the middle of their career where they didn't play. This is not about players who are drafted and have some gap between ther draft and their rookie season that is still [handled kind of strangely](https://basketball-gm.com/faq/#real-draft-classes).

So this is about players who were injured, suspended, unsigned, playing in another league, retired, or whatever - for an entire season or more. Previously BBGM kind of ignored those players. Like if a player played from 2005-2008 and then 2010-2013, if you started a real players league in 2009, that player would not be present in the league at all. But now those players are handled better!

<!--more-->

The first fix is to figure out how to give ratings to those players, since [for historical seasons ratings are based on stats](https://zengm.com/blog/2020/04/real-rosters-back-to-2005/), which is the original reason these players were not handled very well - they didn't have any ratings! I did the simplest thing possible here - linear interpolation between the seasons before and after the gap. So (for the example mentioned above with a gap in 2009) if spd was 60 in 2008 and 50 in 2010, I make it 55 in 2009.

Now we have ratings for all the gap years. But what do we do with the players, where do we put them? This is a little tricky because my data is imperfect, I can't perfectly distinguish between some situations like "this player was signed by a team but didn't play", "this player was a free agent and went unsigned", "this player chose not to play this season even though teams wanted to sign him", etc.

**Should a player be "injured" or eligible to play?**

I do know the reason players missed a season. If a player was injured, that's easy - just mark them as injured. Then they behave like any normal injured player in BBGM - they can be signed to a roster, but they can't play until the injury is over.

But there are some reasons players didn't play besides injuries. For instance, some players were suspended. That's similar enough to an "injury" as far as BBGM gameplay goes that I just mark it as an injury. Some players decided to play another pro sport instead of basketball. I figure those players should also not be eligible to play, since they made the conscious decision to pursue another equivalent pro sports career, and even a pro basketball contract might not be enough to get them to change their mind. For those players, they also are treated as "injured".

Most of the other reasons are either playing in a lesser pro basketball league, or pursuing some other career (I know that would never happen today, but it did in the old days!). For those players, I decided to treat them as not injured, since most likely they made those decisions because they did not recieve a sufficiently compelling contract offer. But if a team wanted to sign them, they probably would have said yes.

Of course the above is not always 100% true, but I think it's close enough to feel right.

**Should a player be on a roster, a free agent, or retired?**

Some players get "injured" (using the definition of "injured" from above) while they are under contract. In that case, they should remain on the roster of that team. From my data, it can be tricky to determine if a player is under contract because the contract data only goes back to 1980. So in addition, I also said that an "injured" player on the same team before and after his gap is assumed to have also been on that team during the gap. Surely this is not always true, but it probably usually is.

For players who are not "injured", they are placed into two categories: free agents or retired players. Most fall into the free agents category, and you will see them available to be signed. Unfortunately they are mostly low rated players, but it still adds some nice flavor to historical leagues to see them in the free agent pool.

Retired players are more fun. These are only players who are explicitly labeled as retired in my data, but then came back to play one or more seasons after a period of retirement. If you start a league in a season where some players are in that "early retirement" window, they will show up as retired players, not available to be signed. But when you reach free agency prior to their comeback year, you'll see them join the free agent pool. Some of these players are not very good at this point in their careers, so I made it only show you a notification when an above average player comes out of retirement. Seeing that "Player Name has come out of retirement and is now a free agent" notification pop up is pretty cool though! If you want to see what I mean, start a real players league in 2001 :)

Of course, with all these complicated changes to the real players rosters, it's possible I messed something up, so [please let me know if you notice anything weird](/contact/).
