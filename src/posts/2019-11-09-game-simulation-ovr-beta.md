---
layout: post
title: Game simulation improvements and tweaks to ovr (beta)
date: 2019-11-09
tags:
  - post
  - Beta
  - Game Simulation
  - Player Ratings
---

_Update 2019-11-13 - Everything in this blog post is now officially released! The original blog post follows:_

I just updated [the beta site](https://beta.basketball-gm.com/) yet again. Most of the game simulation and stat changes were [already released there](https://old.reddit.com/r/BasketballGM/comments/dqoc8u/game_simulation_improvements_beta/), I just hadn't written a blog post about it. But now that I'm also making some minor changes to the ovr formula, I figured I should blog too.

So here are all the changes in the beta:

<!--more-->

## Game simulation changes

The main goal here was to improve the play-by-plays that you can see if you go to Play > One day (live). They were really bad in the past. For example, every possession was exactly the same length. And there was no end of game strategy, even for simple things like taking a 3 at the end of the game when you're down 3.

Why was it so bad? Because when I originally wrote the game simulation engine, none of the play-by-play details were visible to the user. I implemented it in a play-by-play fashion just becaues that seemed easiest to me. But the goal was not to show the play-by-play details, just to simulate the end box score. And if all you're producing is a box score, then a lot of details don't matter.

That's not really a great excuse, because it was years ago that I made it possible to view a live play-by-play of a game. But I never went back and improved the realism of game simulation... until now! These are all the game simulation changes I made:

### Possession length

- Added some variability, rather than having all possessions be the same length
- Two for one at end of quarters
- Hold for last shot (unless trying to catch up in the 4th quarter or OT)
- Shorter for team trying to catch up
- Longer for team trying to hold lead
- For possessions at the end of a quarter, the less time there is on the clock for that possession, the lower the fg% and the higher the chance of not getting a shot off
- The winning team will not take a shot at the buzzer at the end of the game, they'll just dribble out the clock

### Fouls

- Intentional foul when down late
- Non-shooting fouls
- Bonus (FTs for non-shooting fouls, when appropriate)
- Fixed bug where FT shooter could be subbed out before shooting FTs if the guy who fouled him fouled out

### Shot selection

- In some situations (4th quarter late game situations depending on score, and last second heaves in other quarters) players shoot more 3s

### Rotations

- Bench plays more during blowouts
- A little more playing time for better players

### Stats

- Increased pace
- More imbalanced scoring and rebounding (the best scorers/rebounders get more, the worst get less)

Please [give it a try](https://beta.basketball-gm.com/) and let me know what you think!

## UI changes

This is really minor, but I added TS% to the advanced team stats table. I'm not sure why it wasn't there in the first place... it is a very useful stat!

## ovr changes

For a very long time, the ovr formula has been a linear combination of individual ratings, with the weights roughly determined by linear regression to stats like EWA and WS.

Earlier this year, the homie [nicidob](https://twitter.com/nicidob) pointed out that it would make more sense to look at +/-, since the actual impact of a player on the outcome of the game is a better metric of his performance than some aggregate box score stat.

My initial response was "ugh but +/- is such a noisy stat". I mean think about it, your performance in +/- depends so much on your teammates and your opponent, how can it be meaningful unless you do some complex adjustment? But that was just me being stupid. BBGM is a simulation game. It's easy to simulate thousands of seasons. With thousands of seasons of data, it doesn't matter that +/- for a game (or even for multiple seasons) is noisy. It all averages out.

I was still reluctant to make a change to the ovr formula, just because it's somewhat disruptive to existing leagues to see ovr ratings jump around a lot. However, given all the changes I'm making above to game simulation, there's already going to be at least a little disruption, so it's a good time to improve the ovr formula a bit.

Another change suggested by nicidob was to use the [Z-score](https://en.wikipedia.org/wiki/Standard_score) of ratings for the linear combination, rather than raw rating values. This is important because different ratings have different means and standard deviations, so just doing a plain old linear combination will unwittingly give more or less importance to certain ratings.

All in all, I wound up with these relative weights for the importance of ratings, in the old and new ovr formulas

<div class="table-responsive">

| Rating | Old Weight | New Weight |
| ------ | ---------- | ---------- |
| Hgt    | 5          | 15.9       |
| dIQ    | 3          | 15.9       |
| oIQ    | 7          | 13.3       |
| Spd    | 4          | 12.3       |
| Str    | 1          | 7.77       |
| TP     | 3          | 7.26       |
| End    | 1          | 6.32       |
| Pss    | 3          | 6.2        |
| Drb    | 3          | 5.9        |
| Jmp    | 2          | 5.1        |
| Dnk    | 2          | 2.86       |
| FT     | 1          | 2.02       |
| Ins    | 1          | 1.26       |
| Reb    | 1          | 1          |
| FG     | 1          | 1          |

{.table}

</div>

As you can see, for the most part the order of importance didn't change too much. Height, athleticism, three point shooting, and IQ are extremely important in both ovr formulas. But they are even more important in the new formula.

And a dirty little secret about those ratings at the bottom... FG and Reb both had negative coefficients in my regression. For FG it kind of makes sense, because it may entice a player to take inefficient 2 point shots. This doesn't mean that the FG rating is strictly bad. It could just be that it needs to be extremely high before it's useful. You see the same thing in the NBA - mediocre and even "good" 2 point jump shooters don't really help their teams much. It's only great 2 point shooters like Chris Paul and Kevin Durant who can do it with such efficiency to be consistently useful.

With rebounding, I think it's most likely not a real effect. Since there are so many correlations between the individual ratings, due to how player development works, [it can be difficult for a regression to distinguish which ones really matter](https://en.wikipedia.org/wiki/Multicollinearity). So is this all garbage, then? Probably not, since the weights overall do make intuitive sense. But it's not perfect. Ultimatley no linear formula will be, since there are very obviously some nonlinearities and interactions between ratings in the game simulation code. But hopefully it's "good enough"!

I know I just wrote a lot, but the funny thing is, none of this matters much in practice. The ovr of your players will change a bit, but usually just by a couple points. And this doesn't impact game simulation at all, so player stats won't change. I think the only significant impact it will have is on evaluating draft prospects, since there ovr and pot are all you have. But even there, like I said, it's mostly just a change of a couple points.

Because this is such a minor change, I am appyling it "lazily" - by that I mean that it won't automatically recompute ovr for your players on import or upgrade, it will just happen when ovr is naturally recomputed in the next season. I know that makes it harder for people to test and play around with, but it also makes it less of a jarring change.

Like I said at the top, [this is all in the beta now](https://beta.basketball-gm.com/). If all goes well, I'll release it on the main site some time this week.

As always, feedback is welcome on [Reddit](http://www.reddit.com/r/BasketballGM/), [Discord](/discord/), [Twitter](https://twitter.com/basketball_gm), and [email](mailto:jeremy@zengm.com).
