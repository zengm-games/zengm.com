---
layout: post
title: All league settings can be edited before creating a new league
date: 2021-04-12
tags:
  - post
  - Settings
---

Editing settings in a league has always been a little disjointed. There were some options available on the league creation screen, but others were only available within a league on the League Settings page.

Now that has changed in version 2021.04.12.0826. The entire League Settings UI is available before creating a league by clicking the "Customize Settings" button.

This isn't just good for consistency. There are also a couple concrete benefits of the new UI:

1. Some settings really only make sense to change before creating a league because they affect player generation, such as "# Players On Court" or "Age of Draft Prospects".

2. Some settings are now available to change outside of God Mode only prior to creating a league.

<!--more-->

Why? Some settings can potentially give the user an advantage if changed during a league, but don't give any advantage prior to a league's creation. For intance, if you could change the number of playoff teams during a season, you could use that to give yourself a better chance at winning by setting it to whatever your rank is. But before you create a league, you don't have any idea if some particular playoff setting will help or hurt you. On average, it gives no advantage.

For similar reasons, these settings are now editable outside of God Mode when creating a new league, but require God Mode in an existing league:

- \# Playoff Games
- Tiebreakers
- Points Formula
- \# First Round Byes
- Draft Type
- \# Tradable Draft Pick Seasons
- \# Draft Rounds
- Rookies Can Refuse To Negotiate
- Player Mood Traits
- Trade Deadline
- Real Player Determinism

What category a setting falls into (always requries God Mode, never requires God Mode, or requires God Mode only within an existing league) is up for debate. Feel free to [make a case for a setting to be changed](/contact/), I spent a lot more time implementing this feature than thinking about how to categorize settings. You could also argue that there should be another category, like "requires God Mode except in the offseason"... we'll get there eventually!

Another thing that would be nice for the future is to allow customizing player names, countries, and colleges from within the game UI rather than forcing you to [edit a league file](/basketball/manual/customization/names-countries-colleges/). Like some of the things mentioned above, this feature really only makes sense if it is available prior to league creation, and now that is possible.
