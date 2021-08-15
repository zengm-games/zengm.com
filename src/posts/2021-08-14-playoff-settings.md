---
layout: post
title: 'New playoff settings: "Split By Conference", "# Guaranteed Per Division", and "Reseed Rounds"'
date: 2021-08-14
tags:
  - post
  - Playoffs
  - Settings
---

I just added three new playoff settings in version 2021.08.14.1172. The first two in this screenshot have been there for a while, but the last three are new.

<figure><a href="/files/playoff-settings.png"><img src="/files/playoff-settings.png" class="img-fluid"></a></figure>

How exactly do they work?

<!--more-->

- <span class="text-highlight">Split By Conference</span> - Previously, if you had two conferences, it would try to split the playoff bracket in half, one side for each conference. This just exposes an option to allow you to disable that if you want, so you can have a two conference league where the playoffs just include the top N teams regardless of conference.

  I know it would be nice to support this in other situations, like if you have more than two conferences and you still want to break up the playoff bracket by conference. That's still not supported, but eventually will be.

- <span class="text-highlight"># Guaranteed Per Division</span> - Previously, for Football GM and ZenGM Hockey, it was hardcoded that the top team in each division would make the playoffs, and division winners would get the top seeds. Now that is configurable. You can set how many of the top teams in each division you want to have guaranteed playoff spots, or set it to 0 to disable that behavior.

  The defaults for Basketball GM (0) and Football GM (1) are unchanged, but the new default for ZenGM Hockey is 3, which was not possible previously.

- <span class="text-highlight">Reseed Rounds</span> - In a normal playoff bracket, matchups in the next round are based on the matchups in the previous round. But imagine and 8 team bracket, where the 8 seed upsets the 1 seed and all the other favorites win. Now the 2 seed has to play the 3 seed in the next round, but the 4 seed gets an easier matchup with the 8 seed. Is that fair? Or would it be more fair if the best seed always played the worst seed, and the matchups were 2-7 and 3-4?

  That's what this setting does. Enable it and every round of the playoffs will be "reseeded" so the best team seed plays the worst seed. This is now the default for Football GM, but you can enable it in the other games if you want.

I know there's like a million more playoff settings that people might want. This is not the end of playoff customization, it's just the first step. And I am aware that I have not yet mentioned the most requested playoff feature, a play-in tournament like the NBA. Don't worry, we'll get there :)
