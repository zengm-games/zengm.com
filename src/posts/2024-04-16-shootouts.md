---
layout: post
title: Shootouts - in all sports!
date: 2024-04-16
tags:
  - post
  - New Feature
---

In the NHL, there are no ties. Games still tied after overtime end in a shootout, where players from each team take penalty shots to see who the winner is. So it makes sense to add that to ZenGM Hockey. And I did, in the latest update. But I did even better than that. I added shootouts to every sport!

<!--more-->

Since AFAIK there have never been shootouts in any baseball/basketball/football leagues, it was up to me to decide how to do it, and this is what I came up with:

- **Baseball:** A home run derby! Each team sends up their best power hitter, and the one who hits the most HRs in a given number of strikes (thrown by a pitcher from their own team) wins.

- **Basketball:** A three-point contest! Each team picks their best shooter and they take the same number of shots from 3 to determine the winner.

- **Football:** A field goal contest! Teams take turns attempting 50 yard field goals.

- **Hockey:** Like in real life, penalty shots.

Here's what the relevant settings look like:

<figure class="overflow-auto"><img src="/files/shootouts-1.png"></figure>

You really need to consider both the overtime and shootout settings, since both relate to what happens when a game is tied. If "Max # Overtime Periods" is blank, then it will keep playing overtimes until the game is decided one way or the other. For there to be a shootout, "Max # Overtime Periods" needs to have some value in it, such as 0 which means no overtime.

Then, if you have a value of 0 in "# Shootout Rounds", games will end in a tie after all the overtime periods are over. But if you have a value greater than 0, there will be a shootout with the specified number of rounds. If the game is still tied after that, then additional rounds will be played until there is a winner. There can be no ties when a shootout happens.

ZenGM Hockey is the only game where shootouts are enabled by default in new league. For other sports (and for existing ZenGM Hockey leagues), if you want shootouts, you'll have to enable it in the settings as described above.

There are separate settings for the playoffs, since you might prefer having more overtime periods in the playoffs where games are more important.

One other change to the settings... the Game Simulation section was getting large, so I moved all the gameplay tendency settings (like the Three Point Tendency Factor) to a separate Tendencies section.

The shootout looks like this in the play-by-play:

<figure><img src="/files/shootouts-2.png" class="img-fluid"></figure>

That's for basketball, but it's similar in the other sports.

One cool feature you might notice there is that the shootout ends when it's impossible for one team to win - in this case Denver is down 4-1 but only has 2 shots left, so there's no point taking them.

In this basketball example, each team takes all their shots at once. It's the same for baseball, which is how home run derbys generally work in real life. But for football and hockey, I decided to have teams alternate, which is how hockey shootouts work in real life.

For games with a shootout, you'll see the number of shootout points in parentheses after the normal score, like this:

<figure><img src="/files/shootouts-3.png" class="img-fluid"></figure>

And in box scores of old games, you can see the full shootout result (including which players took the shots) in different places depending on the sport. For basketball, it's shown below the box score, similar to where game-winning shots are scored.

For other sports, it's shown in the scoring log, in a separate section which shows all the made/missed shots. Here's an example for football:

<figure><img src="/files/shootouts-4.png" class="img-fluid"></figure>

You can even see the missed kicks highlighted in red. There's also one other new feature here - missed field goals during regulation are now shown in the scoring summary. I figure there usually aren't many missed FGs during each game, and often they are quite important, so it makes sense to include them here.

There are a couple limitations of shootouts currently. You may be curious about shootout stats, like a player's shooting percentage during shootouts. Currently that's not tracked anywhere, shootout results are only stored in the box scores. And for leagues with points formulas for standings (default in ZenGM Hockey), you might want to assign a different number of points to shootout wins (SOW). Or you might want to use SOW as a tiebreaker. Currently that's not possible for the same reason - shootout stats are only stored in box scores. Eventually I'd like to add both of those features.

Anyway, I hope ZenGM Hockey users enjoy this, and I hope people with crazy custom leagues in other sports enjoy it too! [Let me know](/contact/) if you have any issues with this new feature.
