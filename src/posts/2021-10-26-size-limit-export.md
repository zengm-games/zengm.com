---
layout: post
title: No more size limit for exporting leagues
date: 2021-10-26
tags:
  - post
  - League Import/Export
  - Technical
---

Previously, exporting leagues only worked for small leagues. After you played a couple hundred seasons, it no longer worked unless you deleted some historical data. A similar problem existed for importing large league files, although that was probably not noticed much due to the issue with exporting.

That's why there have been no updates the past couple weeks - I have been trying to fix all these import/export issues. It's actually pretty tricky, because it requires rewriting a lot of my code and also working around missing features and bugs in various browsers. But I think I am finally happy with it, so it is now released in version 2021.10.26.0638.

As an added bonus, you can also see [progress bars when importing/exporting leagues](https://i.imgur.com/EavYpvJ.png), which is nice for large leagues:

<!--more-->

<figure><img src="/files/size-limit-export-1.png" class="img-fluid"></figure>

I should also note that the new league import/export code is somewhat slower than it used to be, but hopefully it doesn't feel too bad to you.

A little more technical detail for those interested...

There are three different ways that BBGM can download a file:

1. The old way. Read it all into memory before starting the download. This is simple and works in all browsers, but it breaks when a league is too large because there may not be enough memory to store it all. That's the problem I'm trying to address here.

2. The good new way. There is [an API](https://web.dev/file-system-access/) to allow web apps to stream file downloads. That means you don't have to read it all into memory before you start the download, you can write it to disk bit by bit. This is more complicated to work with (imagine solving a puzzle by looking at all the pieces spread out on the table, vs. solving a puzzle by looking at one piece at a time in isolation) but it has no size limit. The problem is, [it's only supported in desktop Chrome and Chrome-based browsers, which is currently just 30% of all Internet users](https://caniuse.com/native-filesystem-api). So it can't be the only option.

3. The hacky new way. There is [a library](https://github.com/jimmywarting/StreamSaver.js) which lets other browsers stream data to a file. Problem is, it's a bit unreliable. In my testing, I found it sometimes doesn't work in Firefox (reload usually fixes it) and it didn't work at all in mobile Chrome (not sure why yet).

To support all users, I need to support all 3 of those options. If your browser supports #2, then that's what it will always use, since that is the best way. Otherwise, unfortunately I think there is no choice but for me to let you pick between #1 and #3:

<figure><img src="/files/size-limit-export-2.png" class="img-fluid"></figure>

...since #1 will fail with some leagues and #3 will fail with some browsers, and I don't think there is a way for me to reliably predict when they will fail.

Of course, with all these changes behind the scenes, I am worried that I broke something. Please [let me know](/contact/) if you notice anything weird.
