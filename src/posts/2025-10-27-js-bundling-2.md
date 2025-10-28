---
layout: post
title: JavaScript bundling for ZenGM, from 2012 to today
date: 2025-10-27
tags:
  - post
  - Technical
---

(This is an updated version of [a prior blog post](/blog/2023/01/js-bundling/), but you don't need to read that old one, this is self contained!)

Every now and then I write a blog post about purely technical issues I've dealt with that have nothing to do with sports or video games. This is another one of those blog posts! Today I want to talk about JavaScript bundling - how it was in the old days when I first started working on Basketball GM; how it's changed over time; and what I'm doing now.

<!--more-->

Back in 2012 when I started working on the JavaScript version of Basketball GM, require.js was the most popular solution for JS bundling. Prior to that people would do crazy shit like just concatenating files together and hoping for the best. require.js was a real module system that worked. In addition, it had something even today is rare - dev mode worked with no compile step! Really nice. The downside was the syntax needed to support that, you had to put all your code in a callback function like this (example from a really old version of Basketball GM):

```js
define([
	"dao",
	"globals",
	"ui",
	"core/player",
	"core/team",
	"lib/bluebird",
	"lib/underscore",
	"util/helpers",
	"util/lock",
	"util/random",
], function (dao, g, ui, player, team, Promise, _, helpers, lock, random) {
	// Your code goes here
});
```

That extra level of indentation was annoying, but at the time, it was worth it. Before require.js the status quo was manually bundling files, like literally just manually concatenating files together in the correct order so that it would work. I'm glad I narrowly missed that era!

Also back in 2012, Node.js and npm existed, and they had a nicer module syntax called CommonJS that looked like this:

```js
var myModule = require("my-module");
```

No nesting. No callback function. No repeating lists of ordered modules. Pretty nice! But that `require` function is synchronous, so it can't feasibly run in the browser.

Browserify was created to work around that problem. It worked by parsing your CommonJS scripts, resolving all the required modules, and outputting one JS file that can run in the browser. It also came with support for some parts of Node.js, so you could actually use a lot of npm modules directly in your browser JS code. This was really cool because it enabled the use of npm for dependency management, which was a big step forward from downloading JS files from random websites and then manually checking for updates.

On the downside, Browserify did require a compile step for dev mode, but it had a plugin to support watching your files for changes and automatically recompiling your bundle, and it was actually quite fast so in practice it was not a huge problem.

The next big new thing in JS bundling was Webpack, which became super popular and took away most of the market from Browserify. It did this by generally having more features and faster development. However I never used it. To me it always looked incredibly messy, complicated, and overall worse than Browserify. To this day Webpack still has a lot of users, and Rspack exists as a next gen version, but I am glad I never spent any time on it.

Not to toot my own horn too much, but I made a similar judgement about Angular.js when I was looking to move to something more modern than Knockout.js. Angular.js just seemed to be bad ideas and ugly code, yet it was super popular and I couldn't figure out why. React with its one-way data binding was much more appealing to me, and by now React has basically conquered the world.

But anyway, back to bundling. With all the activity going on in the Webpack world, Browserify stayed its simple stable self. Which was great! That is, until the release of Rollup, which I found to be much more intriguing than Webpack. Unlike Webpack's giant mess of super powerful configuration, Rollup seemed to have a simple, clean design, similar to my beloved Browserify. But it also had some shiny new features like tree shaking and scope hoisting that promised smaller bundle sizes, which is always appealing.

It took me a long time to bite the bullet and actually switch to Rollup, but I did it back in 2019 and even [blogged about it](/blog/2019/09/browserify-to-rollup/) because I was very happy with the 18% decrease in bundle size.

The only downside was dev mode. It had something similar to Browserify, where it'd watch files for changes and rebuild automatically, but it was slow. Much slower than Browserify. I spent a fair amount of effort trying to work around this, but never got anything close to the performance of Browserify. And that is really annoying in dev, when you want to make a change and see what it does, but instead you need to sit there and wait 10 seconds before you can see it. 10 seconds might not sound like much, but when it happens over and over again, it gets old fast. But that bundle size improvement was worth it.

Basketball GM is a pretty big JS application (total bundle size is over 2 MB!) but there were a lot of people writing even larger applications and facing even worse performance problems than I was. This has led to a new generation of performance-focused JS dev tools, maybe the first of which was a new JS bundler called esbuild.

esbuild was completely mindblowing the first time I tried it. It could do a full production build in a fraction of a second, while Rollup would take like 10 seconds for a partial reload in dev mode. That's just a ridiculously huge improvement.

There were some downsides though. esbuild is generally not as powerful as Rollup, and after some incredible early progress, esbuild development slowed down. It seemed like it was never going to actually reach feature parity with Rollup and be a full solution. In particular the esbuild plugin system is not very flexible, and esbuild does not have very sophisticated code splitting.

To work around that, I decided to use esbuild only in dev mode, while still using Rollup in production. I made that change back in 2021.

This is basically the same thing that Vite does, and Vite does predate my switch to esbuild in dev mode by a bit. So maybe I should have switched to Vite? But my home grown build scripts have some extra functionality that would require some effort to port to Vite, so I haven't done that yet. Maybe some day.

The bad thing about using different bundlers for dev and prod is that sometimes you have a bug that occurs only in one but not the other. This has bitten me in the ass several times, which is why I was really excited to see the Vite folks announce a new project, [Rolldown](https://rolldown.rs/). Rolldown is basically a super fast rewrite of Rollup. So you get Rollup's features and esbuild's performance, or at least something approaching that. That's exactly what I want in a bundler.

6 months ago I switched from esbuild to Rolldown in dev mode only at first, since Rolldown was still pretty early in development, but I anticipated I would probably fully switch to it at some point and finally solve that dev/prod discrepancy problem. I found Rolldown really pleasant to use - nice plugin API (and backwards compatible with Rollup so I can use things like [this Rollup plugin I wrote in 2019](https://github.com/dumbmatter/rollup-plugin-blacklist) with no code changes) and easy to integrate into my build/dev scripts (easier than esbuild even - esbuild's error handling is a bit weird).

And the development velocity of Rolldown has been really fast. They're doing meaningful releases like every week; the couple bugs I reported to them both got fixed quickly; and I'm proud to say that [I even contributed an almost inconsequential PR](https://github.com/rolldown/rolldown/pull/6340). Rolldown still doesn't have a stable release, but the beta version seemed stable enough for me to switch to using it in prod last week!

So now my prod build is faster, but more importantly it's much more similar to my dev build, and I have eliminated an entire class of bugs. In terms of bundle size, Rollup still seems to make smaller bundles, but by such a small amount that it doesn't matter. But if I enable Rolldown's built-in minifier (on top of Terser, which I still am using) then Rolldown actually produces smaller bundles! I could probably use 2 (or more!) minifies in Rollup too, but these are all small differences. Ultimately, my prod build is a bit smaller now than it was with Rollup.

Knock on wood, but I haven't had any issues related to Rolldown in prod so far. (If I do have serious issues, I still have an option in my build script to switch back to Rollup, but eventually I will delete that!)

But my build scripts are not as simple as "just call Rolldown and you're done". I'll explain some of the interesting parts in the rest of this post.

In [my previous bundling blog post](/blog/2023/01/js-bundling/) I talked about having a "modern" and "legacy" build so I don't have to ship giant polyfills to everyone, since I am pretty fanatical about supporting old browsers. These days, I have moved my minimum supported browsers forward a bit (sadly my few Windows XP users no longer exist), so I no longer have giant polyfills and I dropped my "legacy" build. That simplified things.

But I still have two build targets. Most of the game runs in a Shared Worker, to enable you opening the same league in multiple tabs and viewing the same data without any synchronization issues. That requires two separate JS files to run - one for the UI code, and one for the "core" of the game (database access, in-memory data cache, game logic, etc.).

Those files do share a bit of code, which currently gets duplicated in the UI and worker bundles. I would like to have them both just import the same shared module for common code, but I still support Safari 14 which does not support modules in workers, so until I drop Safari 14 support I figure it's not worth trying to hack around that. I think I will be able to do that soon though, I don't have a lot of users on Safari 14. That will open up some interesting possibilities.

And despite all this modern Rolldown talk, I still use Babel! Just a tiny bit, for [this Babel plugin I wrote](https://github.com/zengm-games/zengm/blob/5dd39bf637298a252cfa0b2b42cea80c5a4200a4/tools/babel-plugin-sport-functions/index.ts) to make it easier for me to build all 4 of my games (basketball, football, baseball, hockey) from one codebase.

The general idea is that if I have some basketball specific code, I can wrap it in something like this:

```js
if (SPORT === "basketball") {
	// Basketball code
}
```

Then when bundling, I can tell it to replace `SPORT` with the current sport name. And when minifying the code for other sports, it will see something like:

```js
if ("hockey" === "basketball") {
	// Basketball code
}
```

and realize that code can never run so it can be deleted. Nice!

The problem is, this gets tricky to maintain when there are 4 different sports. Like if there is some part of code where I'm doing a special case for basketball, football, and hockey, then I probably also want a special case for baseball. But what if I forget?

If I write the check this way, then I can make it so I never forget, by having `bySport` throw an error if any sport is missing:

```js
const numPeriods = bySport({
	baseball: 9,
	basketball: 4,
	football: 4,
	hockey: 3,
});
```

But the minifier does not understand when that code can be removed, so it'll keep all 4 versions for all 4 sports. Enter [my Babel plugin](https://github.com/zengm-games/zengm/blob/5dd39bf637298a252cfa0b2b42cea80c5a4200a4/tools/babel-plugin-sport-functions/index.ts)! It knows what sport we are currently building, so it converts that code into something like this, depending on sport:

```js
const numPeriods = 4;
```

And if it comes across a `bySport` call missing a sport, it throws an error. Then I get the best of both worlds - errors when building if I forget to handle a sport, and small bundles in prod that only include the code for one sport.

Writing the Babel plugin was pretty fun, since it's so unlike the normal programming I do to make my games. It felt like "real" programming, whatever that means. Only a couple other parts of the ZenGM codebase have made me feel like that, such as the streaming JSON parser for importing really large leauges (recently relased as [json-web-streams, a flexible standalone JSON streaming library](https://github.com/zengm-games/json-web-streams)) and [the trie for unambiguously abbreviating player names](https://github.com/zengm-games/zengm/blob/5dd39bf637298a252cfa0b2b42cea80c5a4200a4/src/worker/util/addFirstNameShort.ts) also felt like "real" programming, but I think that's about it.

In 2025 it may be less fun to write a little Babel plugin like this because LLMs can do it easily. Oh well. LLMs still can't build an entire complex video game, at least!

I also made another nice improvement to my dev script recently. As mentioned above, I have games for multiple sports all built from the same codebase. In dev mode I was using an environment variable to define the sport, like:

```bash
$ SPORT=hockey node --run dev
```

Which is fine, but kind of annoying when I want to test something in all 4 sports and I have to switch between them. So I built a nice UI to let me switch between them just by pressing the left/right arrow keys:

<figure class="overflow-auto"><img src="/files/js-bundling-2.png"></figure>

This saves me time switching between sports, but more importantly it makes me smile whenever I use it because it just looks so cool and feels so nifty. And isn't that what it's all about?

But seriously, for a project that has been under development for 13+ years now, continually modernizing the codebase and build scripts is really important. Imagine if I was still using Require.js, Knockout.js, and callbacks rather than async/await. Most likely I never would have made it this far with that tech stack, but if I somehow did, I would hate my job. Instead I love it!

Overall, I'm pretty happy with my build/dev scripts at this point. Maybe I'll switch fully to Vite some day, but I'm not sure it's worth it. Mostly, I hope Rolldown continues to improve and remains in active development for a long time. I know some of the rapid development is due to VC funding, which of course doesn't last forever, so I really hope they are able to build a sustainable company in the long term. If they do, the entire JS community will benefit.

If anyone is still reading this, [go give me a star on GitHub](https://github.com/zengm-games/zengm) :)
