---
layout: post
title: Women's leagues are now part of every ZenGM game
date: 2023-02-25
tags:
  - post
  - Women
---

Every ZenGM game now supports women's leagues! You can set the gender of a league by changing the new Gender setting in the Players section of the league settings, or by clicking one of these handy links that presets the gender to female:

- [Basketball](https://play.basketball-gm.com/new_league/random#gender=female)
- [Football](https://play.football-gm.com/new_league/random#gender=female)
- [Baseball](https://baseball.zengm.com/new_league/random#gender=female)
- [Hockey](https://hockey.zengm.com/new_league/random#gender=female)

<!--more-->

<div id="female-face" style="width: 200px; height: 300px; cursor: pointer; user-select: none;"></div>

<script>
window.onFacesJS.push(function () {
  var div = document.getElementById("female-face");

  function genFaceAndDisplay() {
    var face = genFace("basketball", undefined, "female");
    faces.display(div, face);
  }

  genFaceAndDisplay();
  div.addEventListener("click", genFaceAndDisplay);
});
</script>

Women's leagues in ZenGM are the same as men's leagues, just with some cosmetic differences. That means ratings are the same and stats are the same. For this reason, there is no real support of a mixed women+men league because the players are not rated on the same scale. But you can use God Mode to create a player of any gender in any league, and you can switch the gender of an existing league if you want, just for fun.

The purely cosmetic differences between male and female leagues are:

- The [cartoon face generator](https://zengm.com/facesjs-female/editor.html) now supports female faces. Thank you [Lia Cui](https://liacui.carrd.co/) for helping with the artwork!

- The names database for female players is smaller than for male players, and it includes fewer countries (although I think it still provides pretty good variability)

- The listed heights and weights of women are lower than men (although the `hgt` rating is the same, as mentioned above - not the same scale!)

- Gender appropriate pronouns are used (hopefully) everywhere. Please let me know if you notice one I forgot to fix!

- In Basketball GM, dunks are much less common in women's leagues. This doesn't affect game simulation at all - the dunks are just replaced with equivalent layups.

Besides that, it's the same game you already know, just with female players instead of male.
