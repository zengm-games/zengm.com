---
layout: post
title: Moving from Browserify to Rollup
date: 2019-09-17
tags:
  - post
  - Technical
  - Performance
---

This post has nothing to do with basketball or sports or video games. It's just about some technical details that helped me make Basketball GM run faster. If you're interested in that, keep reading :)

<!--more-->

Basketball GM is old as fuck. The current JavaScript version that runs in your web browser originated in 2012. JavaScript was very different back then. One of the differences was the lack of a standard module system. Should I get my dependencies from [npm](https://www.npmjs.com/)? [Bower](https://bower.io/)? Something else? And then how should I include them in my application? Concatenation? [RequireJS](https://requirejs.org/)? Something else?

[Browserify](http://browserify.org/) changed that. You could use npm and [CommonJS](https://en.wikipedia.org/wiki/CommonJS) like you were writing Node.js code, and bundle it to run in a web browser. Nice and easy.

As revolutionary as it was back then, Browserify feels dated now. None of the cool kids use it. It's not improving much. And most critically, it's simply not as good as modern alternatives. In particular, [Rollup](https://rollupjs.org/) appeals to me for the same reasons Browserify originally did. They're both just bundlers that mostly stay out of your way and don't try to do too much. They both can be extended with plugins. But Rollup does some fancy stuff with ES modules that can result in significantly smaller code bundles. Smaller code bundles are obviously faster to download, which is great. But they're also [faster to run, since the browser has less code to parse and execute](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/).

So for the past couple years, I've wanted to move Basketball GM from Browserify to Rollup and reap these rewards. Especially as I add more features and the bundle size grows.

But it's hard! When you use a build system for a long time, you accumulate a bunch of complexities. I'm not just using Browserify, I'm also using a ton of other plugins and related software. It does a lot for me. Switching all that to a new build system is a pain.

This is actually my third try at it. My first two tries ultimately failed with automated tests. For a while, I've used [Karma](https://karma-runner.github.io/latest/index.html) to run unit and integration tests in web browsers. [karma-browserify](https://github.com/nikku/karma-browserify) integrated nicely with my Browserify config. For Rollup, the equivalent package is [karma-rollup-preprocessor](https://github.com/jlmakes/karma-rollup-preprocessor), but I couldn't get past some serious performance issues.

So I took a step back. Why am I using Karma in the firt place? I figured that makes sense because that's where the game runs, and it'd be good to catch cross browser compatibility problems. But the last time I actually caught a browser bug this way was years ago. Maybe it's not worth the trouble? This seems to be the consensus of the cool kids these days. Browser testing is out, and Node.js testing is in. Particularly with [Jest](https://jestjs.io/).

Jest really turns me off though. It has a billion features and does a billion things and has a billion options. I'm a Unix guy, so that type of software is just not my style. But since it's so damn popular, I figured I'd hold my nose and give it a try.

And... it actually was pretty painless to port my tests to Jest. Maybe it is possible to make really complex software if you have the resources of Facebook.

I still kept Karma around for one "smoke test" which creates a new league and simulates an entire season. I figure if there is a browser issue, that'll probably catch it. And I hopes that karma-rollup-preprocessor would be able to handle running one test at least!

Next came actually switching to Rollup. The documentation is good, and there were plugins equivalent to most of my Browserify plugins. I did run into a couple problems:

1. I notced a couple weird issues with rollup-plugin-alias, one with relative imports and one with importing JSON files. Eventually I was able to work around them, but it was pretty hacky. Soon I'm going to investigate more and see if I can fix those issues, or at least write up a good bug report.

2. I couldn't find an equivalent to [blacklistify](https://github.com/bjoerge/blacklistify) so [I wrote my own](https://github.com/dumbmatter/rollup-plugin-blacklist), which was kind of fun.

Besides that, it was smooth sailing to get everything working.

And the payoff? A 18% decrease in bundle size, from 2.61 MB to 2.15 MB. That's pretty awesome for just a change to the build process!

One downside that remains - the "watch mode" that I use during development to quickly view my code changes in a web browser. Browserify's was much faster. Instead of taking like 1 second to update, now it takes more like 8 seconds. I know, 8 seconds isn't long, but a short debug cycle is important!

I guess if it bugs me enough, I could switch back to Browserify, but just during development. Then I'd have the best of both worlds. But I'd really not like to maintain two build configs, so I hope either I can figure out how to make Rollup's watch mode faster, or it won't bug me too much.

If you're still reading, you should [take a look at the Basketball GM and Football GM code on GitHub](https://github.com/dumbmatter/gm-games). It's not perfect, but I'm proud of it!
