---
layout: post
title: So you want to write a sports simulation game
date: 2019-07-08
tags:
  - post
  - Meta
  - Technical
---

So you want to write a sports simulation game. Great! As someone who has written a sports simulation game, hopefully I can help you.

I get this question sometimes from people who know a bit of programming and would like to make a sports simulation game, but feel overwhelmed or don't quite know where to start. I know this feeling well. I wanted to make Basketball GM for a long time before I actually felt comfortable trying. Before that, I thought it seemed too complicated for me and I'd fail horribly if I tried.

How do you get past that? Well if I wanted an easy answer, I could say [go look at the Basketball GM source code](https://github.com/zengm-games/zengm) and be done with it. But that's a bad answer. If you don't know where to start and feel overwhelmed at the idea of making your own game, you'll feel that even more strongly when trying to understand my code. Basketball GM has been in development for years now, and the codebase has grown large and somewhat complicated. But at its core, a sports simulation game can be much simpler.

<!--more-->

So ignore my current code. You should do it all yourself, from scratch. That's the best way to learn.

A sports simulation game really just needs a few things:

- A database to store all the data (teams, players, game results, etc)
- Some code that interacts with the data (creating a new league, simulating games, etc)
- A GUI to view the data

There are a million different ways to do each of those things. Basically you need a database, a programming language, and a GUI library.

For Basketball GM, I picked:

- Database: IndexedDB
- Programming lanuage: JavaScript
- GUI library: React

Those are definitely not the easiest choices to work with (particularly IndexedDB is a huge pain). I picked them because they work in a web browser, which makes it easy for people to play my game. But if you're a beginner, I wouldn't recommend it. Instead I would recommend:

- Database: Some SQL database. They're all pretty similar.
- Programming language: Literally anything is fine. Whatever you like.
- GUI library: Same as above, anything is fine.

So you can make a mobile app targeting iOS or Android. You could make a Windows or Mac or Linux desktop app. You could make a web app that runs on the server and renders the GUI in HTML. These all have advantages and disadvantages. If you're already experienced with one stack, you can pick that one. Or pick a new one to learn something new.

If you are still unsure and don't know where to start, try these:

- Database: SQLite, because it's the simplest to set up and use, and it works fine.
- Programming language: Python, and if you're new to programming, [this is a good free book](https://greenteapress.com/wp/think-python-2e/)
- GUI library: Just print some text output to the console. You can make something pretty later.

Once you have your technologies selected, then start designing your database schema. It doesn't have to be perfect at this stage. You can always go back and fix it later. For team sports, you might come up with these tables:

- `players`
- `player_stats`
- `teams`
- `team_stats`
- `games`

Within `players` and `teams`, you'd store all their associated information (player: name, age, team, ratings, etc.; team: city, name, etc.). `player_stats` would have a column for every stat you're tracking, along with identifiers to link it to a player and season. `team_stats` would be similar. and `games` would also be similar, except including box score data for individual games - maybe each row would be a row in the box score, and a game would be grouped with some `game_id` column that appears in all those rows.

I'm sure you can imagine things this leaves out. Like what if player ratings change over time, should they be in a separate `player_ratings` table with one entry per season, similar to `player_stats`? Should there be tables for `conferences` and `divisions` to set up the league structure? What about playoffs? Draft? Free agency? Contracts?

Slow down. Those are all valid concerns. But you can come back and work on them later.

This is my most important advice. Don't do everything at once. Make a minimal playable game, and iterate on it. I find I'm much more likely to complete a project when I can actually play around with it as soon as possible. If I get bogged down in all the details right at the start, I might never finish.

So keep your initial database schema simple.

Keep your initial application code simple too - generate some random teams and random players. Heck, they could even all be identical. Write some simple game simulation code - maybe just track a few stats, and have them generated completely randomly. (Basketball GM uses a play-by-play simulation, which I like. But that's not the only way to do it.)

And keep your initial GUI simple. Maybe just a box score viewer. Maybe add a standings view.

At that point, you have a playable game! A horrible game that nobody besides you is interested in, sure. But that's how Basketball GM started. And there's nothing wrong with that.

Keep iterating. Refine your schema. Improve your code. Expand your GUI.

Keep at it for long enough and you might wind up with something even better than Basketball GM!

After reading all this, you may still feel overwhelmed. That's okay. Maybe you just need to push through that. Or maybe you need to work on some simpler projects before tackling a sports sim game. I don't know, there's no universal answer. Use your best judgment and do what feels right.

I hope this is helpful information. If you end up trying to make your own game, please [let me know how it goes](/contact/). Feel free to ask me any questions you have too. I love to talk programming! You can also [join the BBGM Discord, which has a channel dedicated to programming](/discord/).

(Also you may be interested in a bit more development information that I wrote [in an old blog post](/blog/2013/12/development-history/), and some more info [on the About page](/about/).)
