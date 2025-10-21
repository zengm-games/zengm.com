---
layout: post
title: Streaming JSON parsing with the Web Streams API
date: 2025-10-21
tags:
  - post
  - League Import/Export
  - Technical
---

As [I sometimes do](/blog/tag/technical/), this post is just me geeking out over some technical detail of the ZenGM codebase that doesn't directly impact gameplay. So maybe it's of interest to some fellow programmers or other people who just want to geek out with me, but for everyone else, I promise the next blog post will be about a new feature :)

ZenGM leagues can get quite large. So large that I need to be careful when importing/exporting them, because there may not be enough RAM to read a large league into memory. For this reason, I take advantage of [the Web Streams API](https://web.dev/articles/streams) to import/export leagues incrementally, meaning you just read in a little bit of the data and a time, process that data, and then discard it before going on to the next little bit of data.

<!--more-->

When importing a league, a critical part of that is parsing the JSON file, because the normal way you do that in web browsers (the good old `JSON.parse` function) does not support streams, it only works if you first read the entire JSON object into memory. Ideally there would be some other standard way to do streaming JSON parsing, but there's not. Okay, there's some libraries out there, but none are very popular and work how I want. So several years ago when I first made ZenGM support streaming league file import, I wrote my own. Or rather, I adopted it from some other streaming JSON libraries that work in other contexts but not in web browsers like I want.

This has worked fine for years, but it's always annoyed me for a little that there wasn't some nice solid library to use for this purpose. For some reason I decided to see if that changed recently, and turns out not really. So I decided to write my own, based on my old code in ZenGM, which I have now released as [json-web-streams](https://github.com/zengm-games/json-web-streams).

I won't rehash the README here, you can go over to [GitHub](https://github.com/zengm-games/json-web-streams) and read it if you want, but I think it's a pretty nifty library.

The first thing I did was add a bunch of tests (mostly from [this repo](https://github.com/nst/JSONTestSuite)) to see if my parser was actually correctly following the JSON spec. Well, I already knew it wasn't in some cases, it accepts some files that aren't valid JSON. But through some fairly thorough testing I found a few more edge cases where it failed and fixed all those. This may actually be a negative for ZenGM if people were taking advantage of those bugs to load invalid JSON files that will no longer work, but if that's a problem and people complain, I can always revert some of those changes to make it less strict.

But that was the easy part. The hard part was writing something that:

1. Has a nice API
2. Is flexible/generic enough that maybe other people will want to use it
3. Is not any slower than the old ZenGM parser

That's tricky to do! My old JSON parsing code had a really ugly and confusing API that allowed me to tightly integrate it with ZenGM, and that was great for performance. But nobody else would want to use it. (Heck I don't even want to use it, that's why I'm doing this!)

So I iterated on the API for a little while before landing on what you currently see in the README. Unfortunately, this nice API was slow. Yet I knew that in theory it was possible for the nice API to run as fast as my old code. It just required a lot of careful optimization, which took me several days to do. The biggest optimizations I made were:

- Avoiding creating a new array and destructuring another in a function that is called many many times. This is the type of that usually doesn't matter, but it does when you have a function that's called tons of times.

- Precomputing as much information as possible, so that I can minimize the amount of work done in that function that is called many many times. Mostly this is related to determining "is the current object one of the ones we're looking for, and if so which one is it"? Like in the `players` section of a BBGM league file, ideally we just check once to see that it's the `players` section and not any other section, right when we hit `"players": {` in the JSON file. Implementing the logic to correctly do that, while remaining flexible about letting the user define the locations of the objects they are looking for - tricky stuff! The type of stuff where you make one little mistake and it looks like everything is broken. But when it works, it's nice!

Ultimately, I am happy to say that I think I succeeded, and the new parser with the nice API is even a little bit faster than the old one! For example, a file that previously took 70 seconds to validate now only takes 60 seconds. That's probably not a big enough improvement for anyone to consciously notice, but I'm still proud of it.

If you're still reading at this point, please [go give me a star on Github](https://github.com/zengm-games/json-web-streams) :)
