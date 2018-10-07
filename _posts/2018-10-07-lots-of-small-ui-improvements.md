---
layout: post
title: Lots of small UI improvements
date: 2018-10-07
tags:
- New Feature
- UI
---

Today I released an update to Basketball GM containing a lot of small improvements to the UI. Most of them are small tweaks that, when seen in aggregate, will hopefully just make the game feel a bit cleaner and smoother.

But there's also some [sexy](https://www.youtube.com/watch?v=pwOtuV2WNuY).

<!--more-->

One of the most common requests I get is to make an app. My response is always that I don't have time to maintain multiple versions of BBGM, so I am going to focus on making the web version run great everywhere. Part of the problem on mobile was the menu. Basically, it was horrible. Now, it's not. You can click the menu button in the top left and it'll slide in a scrollable pane on the left that lets you navigate much more quickly.

Or, if you're fancy, you can swipe to open or close the menu:

![Swiping left/right to open/close the mobile BBGM menu](/files/bs4-swipe.gif)

I am aware that swiping left/right is not the most convenient thing to do in mobile Safari because it uses that motion for navigating through your browser history. However, you can still open the BBGM menu on Safari with a swipe, just don't start it on the edge of the screen. Or just use the menu button.

Another long-requested feature is some kind of "dark mode" or "night mode". [A user even made a custom stylesheet to do this](https://www.reddit.com/r/BasketballGM/comments/61jfn9/because_the_sheer_whiteness_of_this_game_hurts_my/), but since it requires installing a browser extension to use, its audience was limited.

Now, you have the option to select a dark theme or a light theme:

![Switching between the dark and light themes](/files/bs4-theme.gif)

Please let me know if you notice any problems with the UI or if you think of something that could be improved more. I am not a designer!

In addition to the visible stuff, there are some backend changes too - moving from Bootstrap 3 to Bootstrap 4, making much better use of Sass, and cleaining up a lot of things. Even though you might not notice them, in general refactoring/maintaining/improving existing code is extremely important. When I look back at the state of the BBGM code base years ago, many of the big gameplay improvments that have happened since then were enabled by less glamorous work on the internals of the code. Fortunately, I am crazy enough to find that kind of stuff fun!
