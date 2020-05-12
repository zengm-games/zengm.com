---
layout: post
title: Real rosters back to 1956!
date: 2020-05-09
tags:
- New Feature
---

*Update 2020-05-11: This is no longer in beta, you can [play it on the main site](https://play.basketball-gm.com/new_league/real).*

A couple weeks ago I released [real players in Basketball GM back to 2005](/blog/2020/04/real-rosters-back-to-2005/). Why 2005? Because any time before that needs to deal with expansion teams, and I wanted to have a good way of handling that. Additionally, beyond the number of teams, there are many other things that have changed over time - team relocations, changes in style of play, various rule changes - I wanted to have decent ways of handling all those things.

Today I do. At least in a [beta](https://play.basketball-gm.com/new_league/real). 

**Start in any season back to 1956.** Players, teams, rosters, and contracts are generated from real data. Draft classes are included up to today.

**Watch your league evolve over time.** There were only 8 teams in 1956, playing a very different brand of basketball than today. Live through expansion drafts, league rule changes, team relocations, economic growth, and changes in style of play.

**Every league is different.** Draft prospects always start the same, but they have different career arcs in every league. See busts meet their potentials, see injury-shortened careers play out in full, and see new combinations of players lead to dynasties.

[Go try it out now](https://play.basketball-gm.com/new_league/real) and [let me know what you think](/contact/). Or read on if you want to know more details.

<!--more-->

Clearly, expansion drafts were the most important missing feature for simulating historical seasons. Otherwise, your only options are to either have the wrong number of teams or have some unsatisfying way of making new teams, like making a new team and filling it with free agents.

Expansion drafts have also long been a feature I wanted to add to Basketball GM, because it's just a fun thing. Maybe you're cruising along with a superteam and then an expansion draft forces you to choose which of your role players you really want to keep. Or maybe you're bored from winning too much and you want to start over, what better way to start over than with an expansion team?

During the preseason or draft lottery phases, you can go to Tools > Expansion Draft to start an expansion draft. The draft lottery is a better time to do it, because then the expansion team will get a lottery pick in the upcoming draft. But I added support for the preseason too, in case you want to start a league with an expansion draft right at the beginning. There are a million little details like this that I've been working hard to get right. I won't mention them all in this blog post, but I hope you notice the attention to detail as you play.

On the Expansion Draft screen, you can pick any number of teams to be created. Teams can be chosen from a pre-populated list of candidates, or you can start with a blank team and set it up exactly how you want.

<p><img src="/files/1956-expansion-teams.png" class="img-responsive"></p>

You can customize all of the team settings, even for the built-in teams. And see that little "Switch to controlling this team" checkbox at the bottom? That allows you to quit your GM job with your current team and become the GM of the expansion team. This is actually the first way I've ever added to switch to a new team without being fired first. Why? Because expansion drafts are fun!

<p><img src="/files/1956-expansion-team.png" class="img-responsive"></p>

After selecting your teams and deciding how many players each existing team will get to protect, you move to the Protect Players screen (unless you have switched to an expansion team). This lets you pick which players on your team you want to protect from being selected in the fantasy draft. Similar to the auto sort button on the roster screen, there is a handy "Auto Select" button to help you decide. It is smart enough to favor younger players over slightly better older players.

<p><img src="/files/1956-protect-players.png" class="img-responsive"></p>

The actual expansion draft occurs after player protections are finalized. It works quite similar to the normal draft. At the end, all the expansion teams have full rosters.

But this update is not just the expansion draft. Adding expansion drafts and nothing else would have been unsatisfying, because expansion is not the only event that should happen in historical leagues.

What about team relocations? Tools > Manage Teams has allowed that for a while, but it was never quite right. The problem was that relocating a team today would relocate it in all of history. There was no concept of "this team started in Memphis but then moved to Kansas City in 1985". Now there is. Any time you change a team's information (region, name, abbrev, logo, colors, etc.) it stores the old values too. So when viewing past seasons, you'll see the teams that existed at that time.

Another issue raised by fantasy drafts is conference/division realignment. If we start with 8 teams in 1956, having 6 divisions like today would be silly. But today, having only 2 divisions would be similarly silly. So I added conference/division editor available at Tools > Manage Confs.

<p><img src="/files/1956-manage-confs.png" class="img-responsive"></p>

I also added a division selector to Tools > Manage Teams, because if you're adding teams and divisions over time, you're probably also going to want to move some existing teams to new divisions.

The hardest part about this was fixing all the old parts of the code that assumed conferences and divisions remained static over time. I hope I've found them all, but if you notice anything funny, please let me know.

Just like what I wrote about changing team info above, if you change conferences and divisions, it stores the history of changes. So if you start in 1956 and play until 2020, you can view the Standings page for any season and the conferences, divisions, and teams are exactly as they were at that time.

The same applies for changing the number of playoff rounds or first round byes. It tracks the history of changes so viewing information about past seasons always works.

Another thing that has changed over history is style of play. Probably the biggest statistical changes can be seen in pace, shooting, and 3 point shooting. A historical simulation needs to consider those factors. So I added some game simulation settings to the God Mode options, along with the ability to quickly apply values appropriate for any historical season.

<p><img src="/files/1956-game-sim-options.png" class="img-responsive"></p>

In total, these new features allow you to create a league similar to any season in history, and to make it grow and change over time. That's great.

But even better is for it to all happen automatically. So I added a system called "scheduled events" which can apply any of the above changes (and more) to a league at some pre-specified future date.

Scheduled events are automatically included in historical leagues. They include all of the stuff mentioned above:

* Expansion drafts
* Team relocations
* Conference/division realignment
* Style of play changes

as well as realistic changes to some other settings:

* Salary cap and other finance settings
* Draft lottery type
* Number of games per season
* Playoff structure, which [changed very frequently in the old days](https://en.wikipedia.org/wiki/NBA_playoffs)

If you don't want these scheduled events, then you can create a [custom league](https://play.basketball-gm.com/new_league), select the season you want, and then unselect "Scheduled events" on the right.

<p><img src="/files/1956-scheduled-events.png" class="img-responsive"></p>

Currently it's all or nothing, but eventually I will add a GUI to let you pick and choose which scheduled events to keep, and even to add your own. I will also eventually write some documentation about how it works, so people making custom league files can include their own scheduled events.

All of these improvements are needed to make historical leagues feel right. But of course, the most important part is the players!

Like I mentioned in [my previous blog post](/blog/2020/04/real-rosters-back-to-2005/), I am using a data-driven approach to automatically find ratings for players so that, when plugged into BBGM, they will produce stats similar to reality. I used the same approach for players back to 1956, with one exception.

Those play style changes are important. Basketball GM with default settings doesn't know what to make of a 3 point shooter who shoots a very high percentage on very low volume. Those players just don't exist today, but they did in the 80s and 90s. That's why I added the game simulation settings described above.

So I decided to build a separate player ratings model for each historical season, based on those game simulation settings. That would help for players with stat lines that look bizarre by today's standards. The challenge there is that there are 65 seasons between 1956 and today, and I need at least a few hundred simulated seasons of BBGM data to train a model. That's a lot of simulated seasons!

Thanks to the help of users on [the BBGM Discord](https://discord.gg/caPFuM9), I crowdsourced my training data. Thank you to everyone who helped, especially Lerotri and wagalien who each did several seasons. In the end, I got my data, I trained my model, and I generated player ratings for every season back to 1956.

The ratings are not perfect. I would say they are "pretty good". Much work remains, and I'm already planning the next steps. If you look too closely, you will definitely notice some ratings that just seem strange. But if you take a step back and look at the league as a whole, I think you'll find that most players produce pretty realistic stats.

I think this covers most of the changes in the beta. Please [give it a try](https://play.basketball-gm.com/new_league/real) and [let me how you like it](/contact/)!
