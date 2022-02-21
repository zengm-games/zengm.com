---
layout: post
title: New "command palette" allows easy keyboard navigation of your league
date: 2022-01-20
tags:
  - post
  - Command Palette
  - New Feature
  - UI
---

Inspired by [a really cool feature for GitHub](https://docs.github.com/en/get-started/using-github/github-command-palette), I just added a command palette to my games. Open it by pressing ctrl+k on a PC or cmd+k on a Mac. The command palette lets you efficiently navigate within your league while only using your keyboard. Here's what it looks like:

<!--more-->

<figure><a href="/files/command-palette-1.png"><img src="/files/command-palette-1.png" class="img-fluid"></a></figure>

At first glance, you may think this is just a way to access all the items from the Play menu and the other menus at the top of the screen with your keyboard. And you can do that, all of those actions and links are there. But so is a lot more.

<figure><img src="/files/command-palette-2.png" class="img-fluid"></figure>

First, you can search. It does a kind of fuzzy search (using [this great library](https://github.com/kentcdodds/match-sorter)) and sorts the results by relevance. So if you search for "fin", the league finances and team finances pages show up first. But also "Players > Draft Scouting" and "Tools > Default New League Settings" appear as well. Why? They don't have "fin" in them, but they do contain those three letters in order, albeit with some other letters in between.

That may sound a bit weird if you've never seen a search box work like this, but it's very nice to use. And if the search doesn't return the thing you want as the #1 result, you can use the arrow keys to scroll through the results.

You can also access more pages here than are in the menus. Normally, you'd have to to League > History > All-Star History to get to that page. 3 clicks, gross. Now just tyle ctrl+k and then "all" and hit enter:

<figure><img src="/files/command-palette-3.png" class="img-fluid"></figure>

There are also three special modifiers to search additional content. You can type `@`, `/`, or `!` into the search box to switch to one of these search modes.

`@` - player search

<figure><img src="/files/command-palette-4.png" class="img-fluid"></figure>

`/` - team search

<figure><img src="/files/command-palette-5.png" class="img-fluid"></figure>

- `!` - league search

<figure><img src="/files/command-palette-6.png" class="img-fluid"></figure>

Personally, I'm enjoying this feature a lot! I hope you feel the same way. And if you have any more ideas about stuff I could add to the command palette, please [let me know](/contact/).
