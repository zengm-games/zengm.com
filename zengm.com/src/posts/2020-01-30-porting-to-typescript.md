---
layout: post
title: Porting Basketball GM to TypeScript
date: 2020-01-20
tags:
  - post
  - Technical
---

This has nothing to do with basketball. Just programming. But I know some of you like hearing about the technical stuff that goes on behind the scenes - this post is for you!

<!--more-->

Basketball GM is written in JavaScript because JavaScript is the only programming language that runs in web browsers. JavaScript unfortunately has many limitations and quirks. Several years ago, two very similar technologies were introduced to try to improve JavaScript - TypeScript (made by Microsoft) and Flow (made by Facebook). They both had the same goal: adding static typing to JavaScript to make it easier to write bug free code.

TypeScript and Flow approached the problem very differently. TypeScript took a pragmatic approach of just getting something working, making it as simple and easy to use as possible, and iterating on that. Flow took a more academic approach of focusing on the core of the problem and developing the best technical solution possible, with less time spent on ease of use and community outreach. In yet another example of ["Worse is better"](https://en.wikipedia.org/wiki/Worse_is_better), TypeScript won. Most of TypeScript's technical deficencies have been solved, and it still trounces Flow in popularity and usability. Hardly anybody starts a new project with Flow today.

But years ago when I wanted to use static typing in Basketball GM, the winner was less clear. So I picked Flow because of its numerous technical superiorities at the time. That means I'm stuck with a stagnating technology unless I switch to TypeScript, but switching to TypeScript is not a small task. The core syntaxes of Flow and TypeScript are nearly identical, yes, but there are many subtle differences.

Fortunately for me, I'm not the only one who had this problem. There are many articles out there similar to this one, describing how people moved from Flow to TypeScript. From those, I learned that [babel-plugin-flow-to-typescript](https://github.com/Kiikurage/babel-plugin-flow-to-typescript) is a pretty nifty tool for automatically converting some of the differences between Flow and TypeScript. I [wrote a quick script to use it](https://github.com/dumbmatter/gm-games/blob/4af58422082d2c404d9bfd4390d9d455d33293c0/tools/flow2ts.js) and converted many of my Flow types to TypeScript. I noticed only a couple problems with it:

1. It didn't just change my types, it also altered my code formatting some. Stuff like new lines between blocks of code, and whether comments appear on a new line or not. Annoying. I'll be fixing those manually for years, probably.

2. Converting from Flow to Typescript meant that every instance of `import type` in Flow was converted to just `import` in TypeScript, which IMHO is slightly less good because it's less explicit and can be confusing and ambiguous at times. Days later, [TypeScript 3.8 beta was released with support for `import type`](https://devblogs.microsoft.com/typescript/announcing-typescript-3-8-beta/#type-only-imports-exports). I guess I'll eventually switch back, but it would have been nice to not have to switch them in the first place!

Besides those limitations, the script worked pretty well. And since I already use Babel and there is a TypeScript plugin for Babel, I just had to swap out the Flow plugin for TypeScript and everything kept running.

However, there were many TypeScript errors with the converted types. It didn't take too long to fix them. However there were a few situations I ran into that were not very nice.

1. [TypeScript is much worse at type refinements](https://github.com/microsoft/TypeScript/issues/21732) than Flow. Code like `if (obj.hasOwnProperty(key)) { doSomething(obj[key]); }` generally works in Flow but not in TypeScript.

2. React support in TypeScript is quite good, but [I ran into this annoying issue](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544).

Those are really the only annoyances I had. And it's pretty easy to tell TypeScript "shut up, I know better!" by casting to `any` or adding a `@ts-ignore` comment, so it's not critical to dwell on them. I just left comments so I can eventually go back and fix them when TypeScript improves.

And on the plus side, there were many cool things about working with TypeScript. Integration with VS Code is superb. Third-party modules almost all have TypeScript types written for them already. And more that I'll discuss later.

At this point, I had a TypeScript version of Basketball GM that was roughly on par with the Flow version. But this did not satisfy me. I never went all the way with Flow. I still had many files with no types, and too many types set to `any`. I wanted to do better.

So I set a goal, to convert _all_ of my code to TypeScript (not just the code that was already in Flow) and to get it working at the highest [strictness](https://mariusschulz.com/blog/the-strict-compiler-option-in-typescript) setting. This was a much bigger task than what I had already done.

First I started enabling the various strict settings in my tsconfig.json file. That all went pretty well, until I got to noImplicitAny. Enabling noImplicitAny resulted in thousands of errors! Sure, some were easy to fix. And sure, sometimes there was a cascading effect where fixing one problem resulted in tens or hundreds fewer errors. But still, thousands of errors is no task. And on top of that, I had many completely untyped JavaScript files.

I'm weird though, and fixing the errors was kind of a fun challenge. Along the way I did a couple cool things too:

1. I wrote [these weird complicated types](https://github.com/dumbmatter/gm-games/blob/a2c43207e590dfb992694f21d0f127c999698afa/src/deion/common/types.ts#L41-L50) to link between different parts of my code. Basically these let me enforce that the output of my backend functions (like fetching all the players on a team prior to displaying the roster) matches the expected input of my frontend functions (like the UI to the roster page), without having to type the whole type definition up even once. It uses a nifty TypeScript feature called `ReturnType` to get the inferred return value of a function, which can then be used elsewhere as a normal type. This saved a ton of error-prone and repetitive work that otherwise would have been needed.

2. I wrote [another complicated type](https://github.com/dumbmatter/gm-games/blob/a2c43207e590dfb992694f21d0f127c999698afa/src/deion/common/types.ts#L729-L748) for a function called `teamsPlus` which computes derived stats for a team. This function fetches the relevant data from the database (what season? what team?) and processes it into many different possible formats. Probably it's too complicated, but it's used in so many places I don't want to get rid of it right now. TypeScript was flexible enough to understand it, which is really cool. There is an even more complex function called `playersPlus` which I have not yet tackled.

Combine those two things and it's pretty neat. You can write code on the backend which says something like "fetch each team along with their region, name, and payroll for just this season" and then when accessing a team object on the frontend, TypeScript knows all the properties that will be there, and VS Code will autocomplete them. Fancy stuff, and most of it just automatically happens now.

That's just a couple examples, but there were many other areas where I improved the types. It's been really cool to see it all come together. There are still more `any`s and `@ts-ignore`s than I would like, but much progress has been made. Worse is indeed better!
