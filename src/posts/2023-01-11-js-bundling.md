---
layout: post
title: JavaScript bundling for ZenGM, from 2012 to today
date: 2023-01-11
tags:
  - post
  - Technical
---

Every now and then I write a blog post about purely technical issues I've dealt with that have nothing to do with sports or video games. This is another one of those blog posts! For some reason I want to talk about JavaScript bundling - how it was in the old days when I first started working on Basketball GM; how it's changed over time; and what I'm doing now.

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

That extra level of indentation is annoying, but if that's the price we had to pay to have require.js, it was worth it.

At the same time, Node.js and npm also existed, and then had a much nicer module syntax called CommonJS that looked like this:

```js
var myModule = require("my-module");
```

No nesting. No callback function. No repeating lists of ordered modules. Pretty nice! But that `require` function is synchronous, so it can't directly run in the browser.

Browserify was created to work around that problem. It worked by parsing your CommonJS scripts, resolving all the imports, and outputting one JS file that can run in the browser. It also came with support for some parts of Node.js, so you could actually use a lot of npm modules directly in your browser JS code. This was really cool because it enabled the use of npm for dependency management, which was a big step forward from downloading JS files from random websites and periodically checking for updates.

On the downside, Browserify did require a compile step for dev mode, but it had a plugin to support watching your files for changes and automatically recompiling your bundle, and it was actually quite fast so in practice it was not a huge problem.

The next big new thing in JS bundling was Webpack, which became super popular and took away most of the market from Browserify. It did this by generally having more features and faster development. However I never used it. To me it always looked incredibly messy, complicated, and overall worse than Browserify. I think history has vindicated my judgement at the time, and now Webpack kind of seen as legacy tech, and most people using it would rather be using something else.

Not to toot my own horn too much, but I made a similar judgement about Angular.js when I was looking to move to something more modern than Knockout.js. Angular.js just seemed to be bad ideas and ugly code, yet it was super popular and I couldn't figure out why. And eventually the same thing happened to Angular.js that happened to Webpack - popular opinion came around to mostly agree with my initial impression, and other better tools became more popular.

But anyway, back to bundling. With all the activity going on in the Webpack world, Browserify stayed its simple stable self. Which was great! That is, until the release of Rollup, which I found to be much more intriguing than Webpack. Unlike Webpack's giant mess of super powerful configuration, Rollup seemed to have a simple, clean design, similar to my beloved Browserify. But it also had some shiny new features like tree shaking and [scope hoisting](https://blog.developer.adobe.com/optimizing-javascript-through-scope-hoisting-2259ef7f5994) that promised smaller bundle sizes, which is very appealing.

It took me a long time to bite the bullet and actually switch to Rollup, but I did it back in 2019 and even [blogged about it](/blog/2019/09/browserify-to-rollup/) because I was very happy with the 18% decrease in bundle size.

The only downside was dev mode. It had something similar to Browserify, where it'd watch files for changes and rebuild automatically, but it was slow. So much slower than Browserify. I spent a fair amount of effort trying to work around this, but never got anything close to the performance of Browserify. And that is really annoying in dev, when you want to make a change and see what it does, but instead you need to sit there and wait 10 seconds before you can see it. 10 seconds might not sound like much, but when it happens over and over again, it gets old fast. But that bundle size improvement was worth it.

Basketball GM is a pretty big JS application (total bundle size is over 2 MB!) but there were a lot of people writing even larger applications and facing even worse performance problems than I was. This has led to a new generation of performance-focused JS dev tools, maybe the first of which was a new JS bundler called esbuild.

esbuild was completely mindblowing the first time I tried it. It could do a full production build in a fraction of a second, while Rollup would take like 10 seconds for a partial reload in dev mode. That's just a ridiculously huge improvement.

There are some downsides though. esbuild is not as powerful as Rollup. It also tends to produce slightly higher bundle sizes. Even worse, it has only limited support for compiling modern syntax down for older browsers, and I enjoy keeping Basketball GM playable on old devices.

To work around that, I decided to use esbuild only in dev mode, while still using Rollup in production. This is the same thing that Vite does, so maybe I should just be using Vite, but at this point I have my home grown build scripts that work for me, and as described below that have some advantages that would be hard to achieve elsewhere.

The bad thing about using different bundlers for dev and prod is that sometimes you have a bug that occurs only in one but not the other. This has bitten me in the ass several times, and probably will continue to do so. Hopefully some day I can use the same bundler for both.

And that's still what I'm using today - Rollup in prod, esbuild in dev. But like mentioned above, there's some fun tricky stuff I'm doing on top of that.

Above I mentioned Basketball GM's browser support. Currently that goes all the way back to Chrome 49, the last release of Chrome to run on Windows XP. The downside of maintaining such browser support is you can't use any features from more modern browsers, which results in more bloated inefficient code.

To deal with that, I have two prod bundles - modern and legacy. Modern runs in the latest versions of major web browsers and takes advantage of new features, and legacy runs in basically anything else. For comparison, the total amount of bundled JS for the legacy version is 3.2 MB, but the modern version is 2.9 MB, which is a nice improvement. I know that's still a lot, but as described below it does get split over multiple files, and compared to basically any other video game it is tiny!

Some people have used the [module/nomodule](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) trick to serve two different bundles like that, but that approach has some unpleasant edge cases and even module support is kind of old these days, so there are a bunch of features I want to use that are not universally supported in module-supporting browsers. So instead of module/nomodule, I do feature detection to identify if the user's browser supports the features I need for my modern bundle. This means I need to run some JS code to check browser features before loading my application code, which does slow things down a bit because the browser needs to wait to start downloading the correct JS file. The workaround for this is to recognize that most users do want the modern bundle, so I use `<link rel="modulepreload" ref="modern.js">` to start loading that immediately. That's not ideal for users who ultimately get the legacy bundle, but it's much better than if I simply dropped support for all old browsers, like many websites do.

Another interesting thing about Basketball GM's JS bundling is that when I talk about the "modern bundle" or "legacy bundle", I'm not talking about just one file. Most of the game runs in a Shared Worker, to enable you opening the same league in multiple tabs and viewing the same data without any synchronization issues. That requires two separate JS files to run - one for the UI code, and one for the "core" of the game (database access, in memory data cache, game logic, etc.).

Those files do share a bit of code, so it would be nice to actually generate three bundles: UI only, worker only, and shared code. But due to Firefox's lack of support for ES modules in workers, I don't currently do this. The shared code gets duplicated in the UI and worker bundles. Fortunately, there is not _that_ much shared code, so I'm not too worried about it. But some day, when Firefox eventually supports ES modules, it'd be nice...

So what I am doing for prod is actually 4 bundles: modern UI, modern worker, legacy UI, legacy worker. For modern UI, I actually do some code splitting using ES modules to make the initial load time faster, since Rollup supports that well. For legacy UI, I do the same but with SystemJS rather than ES modules, since Rollup also conveniently supports that (otherwise, I wouldn't go through so much trouble to optimize the legacy experience). In theory I could use SystemJS for code splitting on the worker (or even for code sharing between the UI and worker) even in Firefox which lacks ES module support in workers, but I don't want to go through the trouble of setting that up because Firefox really should start supporting ES modules some day!

I should also talk a little about Babel. I still use Babel in my legacy prod build to support old browsers. But even in the modern prod build and in dev mode, I use it to run [this Babel plugin I wrote](https://github.com/zengm-games/zengm/blob/68b1bf09c77ea696c58e0c6a429e19a1e8c0efe0/tools/babel-plugin-sport-functions/index.js) to make it easier for me to build all 4 of my games (basketball, football, baseball, hockey) from one codebase.

The general idea is that if I have some basketball specific code, I can wrap it in something like this:

```js
if (SPORT === "basketball") {
	// Basketball code
}
```

Then when bundling, I can tell it to replace `SPORT` with the current sport name. Then when minifying the code for other sports, it will see something like:

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

But the minifier does not understand when that code can be removed, so it'll keep all 4 versions for all 4 sports. Enter [my Babel plugin](https://github.com/zengm-games/zengm/blob/68b1bf09c77ea696c58e0c6a429e19a1e8c0efe0/tools/babel-plugin-sport-functions/index.js)! It converts that code to something the minifier can understand, like:

```js
const numPeriods =
	SPORT === "baseball"
		? 9
		: SPORT === "basketball"
		? 4
		: SPORT === "football"
		? 4
		: 3;
```

And then I get the best of both worlds - errors in dev if I don't handle every sport, and small bundles in prod that only include the code for one sport.

Writing the Babel plugin was pretty fun, since it's so unlike the normal programming I do to make my games. It felt like "real" programming, whatever that means. Only a couple other parts of the ZenGM codebase have made me feel like that - [the streaming JSON parser for importing really large leauges](https://github.com/zengm-games/zengm/blob/68b1bf09c77ea696c58e0c6a429e19a1e8c0efe0/src/worker/api/JSONParserText.ts) and [the trie for unambiguously abbreviating player names](https://github.com/zengm-games/zengm/blob/68b1bf09c77ea696c58e0c6a429e19a1e8c0efe0/src/worker/util/addFirstNameShort.ts) also felt like "real" programming, but I think that's about it.

I think that's all I have to say about JS bundling... but hey, why not talk about CSS bundling too! It's generally a lot simpler than JS bundling, but it still matters.

For a long time I used clean-css, but when [Lightning CSS](https://lightningcss.dev/) recently came out with really impressive benchmark numbers for bundle size and performance, I switched right away for a quick easy win. It's caused me 0 problems so far and I love it. That's another advantage of my home grown build scripts, it's easy for me to switch libraries like this.

I also use PurgeCSS to remove unused CSS from my bundle, since I use Bootstrap for my UI which includes a ton of classes that I don't use.

If anyone is still reading this, [go give me a star on GitHub](https://github.com/zengm-games/zengm) :)
