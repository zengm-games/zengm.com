---
layout: post
title: Smarter contract generation
date: 2020-08-10
tags:
- Contracts
- Finances
- New Feature
---

Generating player contracts is tricky.

In the past, contracts were generated from a simple formula based on factors such as age and player ratings. That works pretty well, at first glance. Good young player? Big contract. Bad old player? Small contract.

The problem is, that's simply not how contracts are set in reality, and for good reason. It lacks a global perspective. Like if no team has max cap space, or if there are better free agents they'd rather spend it on, then it doesn't matter if a player thinks he "deserves" a big contract. This resulted in situations where sometimes good players would go unsigned in free agency, because no team had enough money to meet their demands.

Today, there is a new contract generation system in BBGM and FBGM that solves this problem by incorporating a global perspective. Contracts are generated with knowledge of how much cap space teams have and what other players are on the market. So if, due to some random fluke, you find yourself with a very good free agent class in a league without much cap space, players will ask for less money. Or if you find the opposite, a poor free agent class in a league where teams have tons of money, players will ask for more money.

Give it a try and [let me know what you think](/contact/). Or read on for more details about how it works, which is pretty cool.

<!--more-->

Like some other recent changes, this is based on a prototype from [nicidob](https://nicidob.github.io/).

The general idea is to simulate free agency to see if contract demands are too high or too low. Players who ask for too much and go unsigned have their demands adjusted down. Players who ask for too little and are wanted by multiple teams have their demands adjusted up. This process is then repeated, until contract demands converge.

The beauty of that is, it doesn't really matter what a player's initial contract demands are. This iterative algorithm will find a player's true value in the current market, regardless of starting place. That means I was able to completely get rid of the old player contract formula - it's not even used as a starting position. This algorithm sets the contract for every player in the game. Re-signing players, free agency, released players... their contracts are all set by the same algorithm run with slightly different parameters.

As best I can tell, this algorithm is quite robust. It produces reasonable results for many different financial and league settings. The exact same contract code powers both Football GM and Basketball GM, even though they are pretty different financially. In the past they each needed a unique hand-tuned formula. Not any more!

But from an end-user perspecitve, the implementation details don't really matter. What matters is gameplay. So in terms of gameplay, you probably will notice that you no longer see good players go unsigned in free agency because nobody has money to sign them. That had long been an exploit in BBGM - keep your eye on good players who go unsigned, wait until their demands decrease during the season, and then sign them to cheap deals. I'm guilty of using that strategy myself when playing BBGM! But it will no longer work.

Another noticeable change is the distribution of contract values. One of the defining characteristics of a league with a max salary limit is that if a bunch of players are worth a max contract, then if you have a superstar, you're really getting a bargain deal at a max contract. That's how it is in the NBA. But in BBGM previously, max contracts were rare enough that it wasn't really true except for truly exceptional talents. That is now changed. Max contracts are more common, which means having a superstar is even more valuable.

I hope you like all these changes. There was a lot of good feedback during beta testing, but for something this central to the game, it's always a little nerve-racking to release! So if you have any feedback on this, [I am listening](/contact/).
