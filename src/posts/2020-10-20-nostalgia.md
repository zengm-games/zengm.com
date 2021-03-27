---
layout: post
title: Nostalgia from my changelog, and how to play 2013 BBGM today
date: 2020-10-20
tags:
  - post
  - Meta
---

For some reason, I decided to go through my history of blog posts, Reddit posts, and git commits and retroactively create a [full changelog of Basketball GM](/changelog/) back to the first beta of the web-based version in 2013. It was kind of fun to refresh my memory about everything that's happened so far, and it made me want to write this blog post about it.

<!--more-->

One thing I noticed was how some things have remained the same over the years. Like I'm working on the trade AI now, but I was [back in 2014 too](/blog/2014/02/new-improved-trade-ai/). I'm talking about the UBA [now](https://old.reddit.com/r/BasketballGM/comments/jcy2y7/i_wrote_a_66page_summary_of_the_first_30_years_of/g947sxt/?context=3), but I was [back in 2016 too](https://old.reddit.com/r/BasketballGM/comments/41dskx/the_basketball_gm_book_club/). I was wondering how to accurately set free agent salaries based on market conditions [back in 2016](https://old.reddit.com/r/gamedev/comments/4omk8h/simulating_marketbased_pricing/), and it wasn't until [very recently that nicidob came up with a solution](/blog/2020/08/smarter-contract-generation/). And all throughout BBGM's history, there were various bugs related to draft class import, which for some reason it seems that I have often struggled to do correctly.

The codebase changed so much over the years.

In the [very early days](/blog/2013/12/development-history/) it was Python, SQLite, and GTK. Then it was a Python web app. Then a JS app with data stored in IndexedDB and a UI made from jQuery and Handlebars. Then jQuery and Knockout.js. Then React. Then the JavaScript was annotated with Flow, and that was eventually replaced with TypeScript.

The tooling changed so much with JS. From no package manager and vendored dependencies to NPM and then Yarn. From Require.js to Browserify to Rollup.

Meanwhile, the web UI started with Bootstrap 2, then was ported to Bootstrap 3, and finally Bootstrap 4.

Callbacks were at some point replaced with promises, and then promises mostly replaced with async/await (thank God!).

The game was rewritten from a monolithic single process application to [use a Shared Worker for huge performance and usability gains](/blog/2017/04/basketball-gm-4-0-technical-details/).

All of that churn was a combination of the JavaScript ecosystem improving, and me improving as a programmer. I spent a ton of time and effort on that churn. That's what a lot of the gaps in the changelog are. Many of the things listed above represented months of work with no visible changes for users, just improved code quality and infrastructure. More recently, we have all reaped the benefits of that. I can spend more effort focusing on basketball, football, and features now because I have a good foundation to build on. That was certainly not always the case.

My code has almost always been available [on GitHub](https://github.com/zengm-games/zengm) and many people over the years have helped out. It was especially cool to go over pull requests from the old days, like before 2016. So many great people helped make BBGM a little bit better. I don't know how many of those guys are still hanging around the BBGM community and will read this post, but if any of you do, please know that I love you :)

I also feel nostalgic for the very early days. In 2013 when I was preparing to publicly release the web-based version of Basketball GM, it was utterly inferior to today's version in terms of technical sophistication, gameplay, and features. And yet, there was something beautiful in its simplicity.

You don't remember what it was like? [Check it out.](https://old.basketball-gm.com/) That's the first official version of web-based Basketball GM, released on June 23, 2013. This is what it looked like:

<figure><a href="/files/nostalgia-1.png"><img src="/files/nostalgia-1.png" class="img-fluid"></a></figure>

The dashboard has been redesigned a couple times, but some other pages look similar to today's BBGM, except utterly stripped down to the bone:

<figure><a href="/files/nostalgia-2.png"><img src="/files/nostalgia-2.png" class="img-fluid"></a></figure>

But you can still do everything you need to do. Preseason, regular season, playoffs, draft, re-signing, free agency, repeat. It's all there, and nothing more.

So please, [join me in a game of 2013 BBGM](https://old.basketball-gm.com/). And if you have any nostalgia for the old days, please share it [on Reddit](https://www.reddit.com/r/BasketballGM/comments/jevclg/nostalgia_from_my_changelog_and_how_to_play_2013/).
