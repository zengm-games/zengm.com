---
layout: post
title: Draft day trades
date: 2018-05-11
tags:
- New Feature
---

This feature has been requested a million times, but today it's finally here: draft day trades! You will see it in all your leagues (if not, refresh the page until it says version 2018.05.11.1253 at the bottom), there are some new buttons on the draft page to make it easy.

Ever since the beginning, trades have not been allowed during the draft. The reason for this was a bad design decision I made: when the draft order was set, I moved the draft picks to a special table containig the picks and order for this year's draft. This worked, but it was needlessly complicated (extra table for no reason, why not just leave it in the main one and filter for this year?) and it meant that code for trading picks didn't work once the draft started.

I finally went back and got rid of that bad design, but it took a lot more time than it would have if I just did it right in the first place!
