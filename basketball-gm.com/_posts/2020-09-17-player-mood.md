---
layout: post
title: New, completely redesigned player mood feature
date: 2020-09-17
tags:
- New Feature
- Player Mood
---

Basketball GM has always had a concept of player mood. It was the red/yellow/green rectangle you saw on the free agents page, along with descriptive text like "Insulted by your presence" on the negotiation page. But it had a lot of drawbacks.

One major problem with the old mood system was that it did not give you much information. Why is a player happy or sad? Who knows. Behind the scenes there was a logic to it, but it wasn't displayed to the user, leaving you to guess why a player felt a certain way.

Even worse, mood was not displayed during the season. So you'd go into free agency with no idea whether you'd see the dreaded "Refuses to negotiate" message next to a player's name. That made it very difficult to plan ahead for players who are planning to leave.

You may have noticed that the previous paragraphs are all written in the past tense. That's because Basketball GM now has a brand new mood system, that fixes those major problems from the old system and introduces some nice new features too!

<!--more-->

First, I want to be clear... **player mood only affects contract negotiation**, both the probability that a player will negotiate with you, and the amount of money he asks for. There is no "team chemistry" or "player is upset so he plays worse"... yet :)

Additionally, I am aware of concerns about micromanagement. I don't want it to be essential to micromanage this stuff. If you want to ignore player moods, you probably can get away with it without suffering too much. If your team is successful, players will want to play for you. In a big market? Even better. That gets you most of the way there. It's not like "players who want to play in a big market will *only* play in a big market" or "players who want to win will *only* play for an established title contender" - in addition to not being fun, that wouldn't be very realistic either. You can also disable player mood traits in God Mode, if you want, which makes the new mood system work pretty similarly to the old one, just with more transparency about what's going on behind the scenes.

With that out of the way, take a look at the UI for the new mood system, from your roster page:

<img src="/files/mood-1.png" class="img-responsive" />

There are 3 things you see from left to right: mood score, mood traits, and probability they will be willing to re-sign.

The **probability they will be willing to re-sign** is based on a player's current mood score and how good the player is (better players can be more choosy). It is a representation of their current state, not a projection of what they might think when their contract actually expires. So for a player with some time left on his deal, this number can change.

**Mood traits** give players a little bit of personality by altering how important different factors are in their mood score. There are 4 possible values:

* Fame (F) - Player prefers a large market, an engaged fan base, and lots of playing time.
* Loyalty (L) - Player wants to stay in one place for a long time, doesn't care much about market size, and doesn't like to see you trade away too many of his teammates.
* Money ($) - Market size and team success are not very important, but nice team facilities give a little boost. Least likely trait to refuse to negotiate.
* Winning (W) - Team success matters a lot. Willing to accept less playing time and a small market.

Mood traits are "all or nothing" - every player with the "Money ($)" trait gets the same adjustment to his mood score. There are no partial traits. Additionally, mood traits do not change over time, although you can edit them in the player editor in God Mode. You can also completely disable mood traits in the God Mode options.

If you click the mood button, you see a popup with more detail, including the individual components that sum up to the overall **mood score**:

<img src="/files/mood-2.png" class="img-responsive" />

Currently these components are:

* Market size - players generally prefer bigger markets.
* Facilities - based on your facilities spending over the past 3 seasons.
* Team performance - regular season and playoff success.
* Hype - viewable from the Team Finances page, this is how excited your fans are.
* Loyalty - players who have been on your team for multiple seasons might be loyal to your franchise.
* Trades - if you trade away tons of players, players will look at that negatively.
* Playing time - players want to play, so if a player doesn't get enough minutes (either due to tanking or because the team has too many other good players), he will be annoyed.
* Rookie contract - players on rookie contracts are eager to sign their next contract. This gives BBGM something like the NBA's restricted free agency, because it results in your drafted players being less likely to refuse to re-sign.

(Yes, this was inspired by the greatest video game of all time, Civilization. Maybe the next update will include "sees your luxuries that he does not have as a ripe target for attack.")

This will hopefully help address some exploits that have long existed in BBGM. One was that you could easily tank by just benching all your good players. If you do that now, your good players will not be happy about it. Another exploit was that you could keep acquiring new players and immediately flip them for draft picks. Now if you do that too much, free agents will be wary of signing with you because they figure they might be next!

Besides that, the other components are fairly similar to how the old player mood system worked. It's just that now you'll be able to see this information ahead of time rather than being blindsided when your star refuses to negotiate.
