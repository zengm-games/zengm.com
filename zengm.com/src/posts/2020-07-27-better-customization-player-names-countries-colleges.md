---
layout: post
title: Better support for customization of player names, countries, and colleges
date: 2020-07-27
tags:
  - post
  - Customization
  - Player Names
---

Basketball GM has long supported customizing the names and countries of randomly generated players, which is useful for people making custom league files. For instance, if you want to simulate a league in France, it makes sense to mostly generate French players.

The problem with this feature was that it kind of sucked. The file format was confusing and required a lot of repetitive work. Basically it was designed to make my life easy, rather than making it easy to use. That's the opposite of how I normally try to operate.

Today I have finally rectified the situation. There is a new format for customizing randomly-generated player names and countries. Don't worry, all your old league files will continue to work like normal. But in the future you'll be able to use the new format, which is both easier and more powerful. [Here is the documentation.](/manual/customization/names-countries-colleges/)

<!--more-->

Specifically, it is now possible to do these previously-impossible things:

1. Easily specify the countries you want included in your league, without having to manually specify all the player names
2. Easily change the fraction of players that come from each country
3. Add custom names for some countries (either overriding a built-in country, or adding a new country) while still using the built-in names for other countries
4. Customize the list of colleges assigned to players, either globally or for specific countries
5. Customize the rate at which players skip college, either globally or for specific countries

You might think adding all that functionality would make it more complicated... but no, [it's actually much simpler to work with now](/manual/customization/names-countries-colleges/).

But wait, there's more! I merged the names databases from Basketball GM and Football GM, so both games now have a richer set of names. And I added some user-contributed names to spice up the variability in some countries and also add some brand new countries. If you'd like to help with that, please [let me know](/contact/).

And I'm not done! This is just the first phase. Soon there will be some other fun updates related to this.
