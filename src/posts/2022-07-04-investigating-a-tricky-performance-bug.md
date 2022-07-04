---
layout: post
title: Investigating a tricky performance bug
date: 2022-07-04
tags:
  - post
  - Bug Fix
  - Performance
  - Technical
---

Some people reported performance issues in my games recently. After debugging I found that there is indeed a serious performance bug in some situations. For example, viewing the standings page and auto playing a season took 3x as long as it did a couple weeks ago. That's pretty bad!

After looking in my past commits to identify exactly when the slowdown started, I found it happened when I upgraded @rollup/plugin-commonjs from version 21 to 22. That's a package used in compiling JS for production. Annoyingly, it's only used in production mode and not in dev mode, which makes it harder for me to notice a bug like this. But for this package to cause a slowdown is strange... it feels more like something that should either work fine or completely break, not cause a performance issue. So while I could stop here, switch back to the old version, and call it a day... let's go further.

<!--more-->

Inspecting the difference in JS output between those two versions of @rollup/plugin-commonjs, I didn't see anything suspicious.

The compiled output of BBGM is multiple JS files, so I tried mixing files from the fast and slow versions to see if I could identify which file contained the problem. I found that none of them did! Start with the slow build, replace with all the fast JS files, and it's still slow. The opposite happens when starting from the fast build.

So it's a performance bug caused by upgrading something related to compiling JS, but the compiled JS itself does not cause the bug. What else changes besides the JS?

Really, only one other thing - the CSS. I use a tool called PurgeCSS to scan my JS and CSS files and attempt to figure out which parts of the CSS file are unused and can be deleted. (I do this because I start with a giant third party CSS file from Bootstrap, but I don't use all of its features, so that's just dead weight that in theory can be removed.) And looking at the CSS files between my two versions, and they are quite a bit different. The "slow" version is like 10% bigger. That's a lot bigger than I'd expect from a change like this. But it's really weird that a little CSS could slow down game simulation by so much.

First I tried disabling PurgeCSS. The slow version without PurgeCSS was still slow. And the fast version without PurgeCSS was now slow too! So it seems that PurgeCSS is removing some CSS that, when present, is actually really harmful for performance. And that upgrading @rollup/plugin-commonjs somehow resulted in PurgeCSS no longer being able to remove that hamful CSS. Really bizarre!

There's one other thing I do to my CSS, and that's minifying it, which means removing whitespace and other useless information to make the file size smaller. I disabled the minifier along with PurgeCSS, and that still resulted in the fast version being slow! So what matters is if I use PurgeCSS or not. Well, at least without the minifier, I can look and see what the difference is.

I manually copy/pasted parts of the no-PurgeCSS file over the PurgeCSS file while running performance tests until I found the culprit, this little bit of CSS:

```
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
```

I can go further! The 2nd part of the selector is fine if it stays, and actual CSS rules don't matter. Even including this results in the slowdown:

```
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu) {
}
```

Additional confusion - I don't use the has-validation class in my code at all, so this CSS is not doing anything. It's a false positive left by PurgeCSS because for some reason the new version of @rollup/plugin-commonjs results in including in my bundle some extra parts of react-bootstrap that contain the string "has-validation". And since PurgeCSS is just doing text comparison, it sees that and thinks the has-validation class might be used in my code, so it needs to keep this CSS.

All of this is rather disappointing. I don't know why that CSS is slow, it's probably just some obscure browser issue (all the above testing was in Chrome 103; Firefox seems to not have this performance issue at all). I don't know what other similarly mundane CSS might be slow now or in the future. I can't ensure that I never inadvertently hit on some magic word in my code that results in some other slow CSS being missed by PurgeCSS.

So what to do? I really don't know. I guess the only real solution is to record performance benchmarks for every commit and have some kind of alert when something bad happens. In the mean time, I'm going to switch back to the old version of @rollup/plugin-commonjs.

Maybe the biggest conclusion from all this is that CSS is kind of dangerous. Carrying around extra CSS that doesn't even get applied could be really bad for performance.
