---
layout: post
title: Exporting player bio info is less confusing
date: 2026-01-18
tags:
  - post
  - Customization
  - Player Names
  - Settings
---

This is a niche feature so probably not of interest to most people, but it needs a blog post to explain!

You can edit generated player biographical info (countries, names, colleges, etc.) by going to League Settings > Players > Biographical Info. There is a semi-nice UI to edit it there within the game, but you can also import/export biographical info.

Previously, if you clicked "Export" in a league with default settings, you'd get a blank file. The reason is that internally it only explicitly records settings that are different than default, to save space. So if your settings are all default, there is nothing to export.

<!--more-->

But that behavior was kind of confusing, because one of the main reasons to export is so you can manually edit the data (such as is described [here in the manual](/basketball/manual/customization/names-countries-colleges/)). So you want the data, even if it's the defaults!

I could have made it just export everything... but the problem with that is there would be a lot of repetition. Like by default all countries have the same list of college. Does it make any sense to repeat that list of colleges 100 times for 100 countries? Not really.

So what it does now is only export the unique stuff. Specifically that means it will always export certain "global default" values (colleges, fractionSkipCollege, races) and also certain country-specific values (names, fractionSkipCollege, races). In addition to exporting any edited values, like it did before.

I think this is the best of both worlds - all the stuff that people probably want to manually edit, but no colleges repeated 100 times.
