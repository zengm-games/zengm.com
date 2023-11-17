---
layout: post
title: Football GM drive chart during live sim
date: 2023-11-12
tags:
  - post
  - Football
  - Live Sim
  - UI
---

Big news for Football GM today - live game sim now shows a drive chart! By "drive chart" I mean a list of all the plays that have happened in this drive, drawn on top of a football field. Like this:

<figure class="overflow-auto"><img src="/files/football-drive-chart-1.png"></figure>

This makes it _much_ easier to see what is happening while you watch a live game. It's so much better that it kind of feels dumb that it took me so long to add. But, well, it wasn't the easiest thing to do! So please [let me know](/contact/) if you notice any bugs.

<!--more-->

The screenshot above shows a "normal" drive. But what if other stuff happens, like a turnover? Turnovers show up in red, and the return appears below it. Here is an interception returned for 4 yards:

<figure><img src="/files/football-drive-chart-2.png" class="img-fluid"></figure>

It's similar for kickoffs and punts, but with a gray bar instead of red.

For penalties, when there is a flag on the play it is shown in yellow next to the play bar. After the play when the penalty is revealed and a decision is made to accept/decline it, then the flag turns to either red (accepted) or gray (declined). You can also hover over the flag to see what the penalty was exactly.

<div class="d-flex gap-3 flex-wrap mb-3">
    <figure class="mb-0"><img src="/files/football-drive-chart-3.png" class="img-fluid"></figure>
    <figure class="mb-0"><img src="/files/football-drive-chart-4.png" class="img-fluid"></figure>
</div>

What about penalties and turnovers combined, like a penalty that erases an interception? It all just works, the state of the game gets rolled back and the penalty gets appropriately applied.

Below the drive chart, you can see the current position of the ball (possession, down and distance, scrimmage), the length of the current drive (number of plays and total yards), and the text of the last play. And when you hover over a play, it shows the text of all the parts of that play.

Previously this information was only in the play-by-play log. But now, you really can just ignore the play-by-play log unless you want to look at what happened in previous drives.

I'm sure some people are now wondering about other sports, especially basketball. Will we soon see a similar feature in Basketball GM? Probably not. The drive chart just shows information that already existed, but in a better UI. For something like a basketball shot chart, showing where plays happen on the court, it'd be more complicated. That would require knowing the 2d position of those events, which is currently not simulated. Same thing for hockey.

And for baseball, a feature like this has existed for a while, showing you who is currently on base along with the current batter and pitcher.

<figure><img src="/files/football-drive-chart-5.png" class="img-fluid"></figure>

Also in this update for Football GM are a few smaller improvements:

- There is a coin flip for possession at the start of each game (and overtime), rather than the home team getting the ball to start the game always.

- If there is a defensive penalty with 0 seconds on the clock at the end of a half or overtime, the offense gets an extra untimed play.

- In the play-by-play, when there is a timeout, it shows how many the team has left.

- "1st & goal" is actually displayed as "1st & goal", rather than "1st & 7" or however many yards there are.

I mentioned above that this new drive chart feature was a little tricky to implement, and I know some of you like hearing about technical details, so I figure I'll end this post by explaining that a little more.

In some sense the drive chart is simple, it's just another representation of the same data that makes the play-by-play. Problem is, previously the play-by-play text was being generated very early. So by the time the UI is drawn, it's just a string of text, all associated the metadata (like what type of play it is, how many yards were gained, etc) is lost. But that metadata is needed for the drive chart! So I had to rewrite how that works, so that text generation happens only right before text is displayed, and then I have easy access to the play metadata for the drive chart.

Another tricky thing was change of possession. Originally I made each bar represent one play, where a "play" was everything that happened while the ball was live. So if a play was a completed pass, then a fumble returned for 10 yards, all of that would get condensed into one bar. I decided it would be more clear to split it into a separate "sub-play" when any change of possession occurred, so I could show the yardage in each direction. This looks a lot nicer for turnovers, kickoff returns, and punt returns. But it made things a lot more complicated, because I now had all these extra bars to keep track of.

The extra bars from change of possession were especially complicated with penalties, which sometimes need to undo turnovers. And in all these complicated situations, the yardage needs to be accurately tracked so that the bars are the correct size. I added a check to my code that the rendered yardage from one play needs to equal the line of scrimmage from the next play, and if it doesn't it will crash. That's still in the game now, and it wouldn't surprise me if I missed some rare situation. But I did a fair amount of testing and fixed a bunch of those errors already.
