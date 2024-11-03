---
layout: post
title: Review of Dean Oliver's "Basketball Beyond Paper"
date: 2024-11-02
tags:
  - post
  - NBA
  - Non-ZenGM
  - Statistics
---

Dean Oliver is possibly the most famous basketball analytics guy. For any Basketball GM users who haven't heard of him - way back in the early days of basketball analytics, he invented some of the advanced stats you see in the game, such as ORtg and DRtg, and the Four Factors in box scores.

His new book [Basketball Beyond Paper](https://www.amazon.com/Basketball-beyond-Paper-Analytics-Revolution/dp/1496240499) was just released, and because I'm a super important basketball person, I got a copy a week early, so I already read it and wrote this review! (Okay, that's not quite true, I am not a super important basketball person and I just ordered it on Amazon and they sent it to me early for some reason.)

<!--more-->

It's an interesting book. Not exactly what I expected. I expected more equations, more methodology. There is a bit of that, but mostly it's a little higher level. The analytics content is interspersed with autobiographical stories about Oliver's basketball career, his thoughts on coaching (in part learned from NBA coaches he's worked with), and sometimes more high-level analysis of basketball rather than just numbers.

But what many readers will be most interested in is the analytics. The main new analytics thing in the book is Oliver's advanced stat that he calls "net points". Net points is an all-in-one stat, meaning it condenses a player's value to a single number representing how good that player is. (Okay, it does more than that, but that's one thing it does!)

There are other all-in-one stats out there. The most highly regarded are some form of [adjusted +/- (APM)](https://en.wikipedia.org/wiki/Adjusted_Plus_Minus). And although incremental progress continues to be made, it feels like a long time since there was a really exciting new stat. Everybody seems to be converging to something like "ridge regression combined with box score data and maybe player tracking data if you have it". Only a few days ago, [a new version of EPM was released](https://x.com/taylor_snarr/status/1851688670945738826) and it is definitely influenced by [DARKO](https://apanalytics.shinyapps.io/DARKO/). A lot of convergence! Which is not necessarily bad. People are learning from each other and doing what works.

And then Dean Oliver publishes this book like "oh by the way, I have this other all-in-one stat that works completely differently than APM and can do some things that APM can't do and I've secretly been using it for years in the NBA" - that's pretty exciting!

He uses various data sources (box score, play-by-play, player tracking) to assign the credit/blame to each player on the court every time a play happens. So like if you have a pick and roll, and the ball handler makes a pull up 3 pointer as the defender goes under the screen. That's 3 points. How much were because of the guy that made the shot? How much for the screener? How much for the other offensive players providing spacing? How much for the defense making good/bad plays? Add that up over the course of the season, and the output is some kind of +/- number. You can compare it to the various APM metrics, but the methodology is completely different.

Although Basketball Beyond Paper has a bit of comparison between net points and APM, there's not a lot. Mostly he uses a composite metric (averaging net points and other all-in-one stats) when discussing players. And nowhere does he go into great detail about how exactly to calculate net points. He explains why in the last chapter, saying that it'd be better off in a textbook, and that it'd obscure some of the basketball talk he wanted in this book, and that he likes that he can keep some of his competitive edge by keeping his methods to himself.

But after reading this book... man I want to look at some net points data! I want to see tables of net points for this season and past seasons. I want to slice and dice it in different ways - that's one of the cool features about net points that you can't really do with APM. With net points you can say "what's this player's +/- as the ball handler in pick and roll plays?"; or "okay this guy has a high offensive +/-, how much of that is from shooting, vs spacing, vs ball handling, vs passing?"; or "what's this guy's +/- when he's guarded by a smaller defender?". But critically... we can't do that if we don't have the data!

So I'm left a little uncertain about the impact of this book. Is this designed to hype up some future project from Oliver that will fully reveal net points to the masses? He did recently [take a job with ESPN to work on "basketball player metrics"](https://espnpressroom.com/us/press-releases/2024/05/former-washington-wizards-coach-dean-oliver-returns-to-espn-as-a-data-scientist/), so hopefully that is in the works! If not, hopefully it will at least motivate some work by others in advanced basketball metrics that don't depend on APM.

Those are my thoughts on the core "net points" analytics stuff in the book. But there is actually a lot more content than that!

I found the autobiographical content to be really interesting, especially the part about his early career where he left a stable job to jump fully into an NBA analytics career without even having an interview with an NBA team lined up. Pretty ballsy move! He saw a hint of a possibility that he might be able to make it in the NBA world, and he went all in. And it worked! He was an analyst/coach for many years. (In contrast, [when I had a more concrete opportunity to work for an NBA team](https://dumbmatter.com/2017/01/how-i-almost-got-a-job-with-the-sixers-and-a-twitter-analysis-of-the-2015-nba-draft-class/), I did not aggressively pursue it - probably for the best, given how Basketball GM has turned out!)

It's also pretty funny to hear his story about writing his first book, Basketball On Paper. He asked the famous baseball statistician Bill James for help finding a publisher, and James was like "sorry kid, you're on your own, I'm writing my own basketball book". It seems that James never actually published his basketball book, but it really lit a fire under the young Dean Oliver to finish his quickly!

Then of course there's also a lot of basketball analysis! A lot of it is numbers-based, but there is also a lot written more from a coach's perspective. Not necessarily surprising, since Oliver was an assistant coach in the NBA. Some of that content does feel a bit too "touchy feely" for me - like I'm sure emotion matters, motivation matters, coaching matters... all that stuff is fine, but I can get content like that from a lot of people, I'd rather get more hard analytics content from Dean Oliver.

A few other random points that stuck with me:

- Scoring matters a lot. It's really hard to be a good player who doesn't score much.

- "Fit" matters a lot if you want to be great. There are always other talented teams, so if you want to be better than them, you need talent and fit.

- Oliver repeatedly talks about how "old school" basketball people tended to get along fine with him, despite the stereotypical jock vs nerd situation you might imagine.

Finally, I want to talk about how this relates to Basketball GM (BBGM).

I'm actually already using one tiny part of net points in BBGM! That was [the recent update for the Four Factors in box scores](https://zengm.com/blog/2024/10/four-factors-improvements/), showing the magnitude of an advantage in terms of net points. Those came from Oliver's formulas that he shared with me. Those formulas are actually not directly in Basketball Beyond Paper, although it talks about them and gets you part of the way there.

What else can I use from this book?

A "net points" advanced stat would actually be easier to calculate from BBGM's simulation than it would be from real life, since I literally know the impact of every player on every event in the game - it's my code doing it! Still, it wouldn't be the easiest thing to do, but it'd be neat to try to come up with my own "net points" system for the BBGM world and then show that in game as an advanced stat.

There is also a metric for "fit" in the book, basically trying to quantify how well a player fits with his teammates in terms of +/-. There are some caveats and it's not a perfect stat, but it'd be better than nothing, which is what I have now in terms of stats to tell you how well players fit together.

And one last thing in the book relates to a controversial part of BBGM. In BBGM, player development does not depend on stats or playing time - just age, coaching, and luck. I did it this way because I always felt skeptical that playing time mattered. Players spend so much time playing games and practicing before the NBA, and then once in the NBA there is tons more practice. Does a little bit of time in games really matter? I get asked about this so much that [it's in the FAQ](https://basketball-gm.com/faq/#pt). Most people say yes, but I remain skeptical.

This question nerd sniped the homie nicidob into doing [a very rudimentary analysis](https://x.com/nicidob/status/1152411949059256320) that at least suggests that maybe I'm right and playing time doesn't matter.

And yet in this book, Oliver writes:

> Playing time does improve players. But the tendency was to see those potential skills as becoming real skills much faster than they often actually did.

So the second sentence is kind of agreeing with my intuition, but overall he says that playing time does matter at least a little bit! Unfortunatley this is just a throwaway line in the book, not part of an actual analysis, so he doesn't provide any support for this claim. I'm sure he has some though, and I would certainly be interested in seeing it!

Anyway, in conclusion, it's a good book, I enjoyed it. Maybe I'd like it better if it went even more in depth on the methodology, but the other content is fun too.
