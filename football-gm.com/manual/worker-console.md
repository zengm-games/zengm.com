---
layout: page
title: Advanced League Editing in the Worker Console
---

### What is this?

Since Football GM runs inside your web browser, you can edit pretty much any part of the game from within your web browser. You do this by using the JavaScript console in your browser to access the core of the game. There, you will find an API that you can use to run little scripts that edit your league.

This page explains how to access the console and shows examples of what you can do there.

### How do I access the worker console?

**Chrome:**

1. Open your league in FBGM.
2. Open a new tab, copy chrome://inspect/#workers into the address bar and hit enter.
3. Click "Inspect" under the URL similar to https://play.football-gm.com/gen/worker-2020.08.02.0001.js and it will pop up another window where you can run the code snippets below.

**Firefox:**

1. Open your league in FBGM.
2. Open a new tab, copy about:debugging#/runtime/this-firefox into the address bar and hit enter.
3. Scroll down (maybe way down) until you see the "Shared Workers" section. There should be an entry there similar to /gen/worker-2020.08.02.0001.js.
4. Click "Inspect" next to it. That will open a new tab where you can run the code snippets below.

### Code snippets

#### Change the jersey number of a player

```
player_id_number = 150;
new_jeresy_number = "45";

p = await bbgm.idb.cache.players.get(player_id_number);
if (p.stats.length > 0) {
    p.stats[p.stats.length - 1].jerseyNumber = new_jeresy_number;
} else {
    p.jerseyNumber = new_jeresy_number;
}
await bbgm.idb.cache.players.put(p);
```

#### Buff/nerf draft prospect ratings

```
players = await bbgm.idb.cache.players.indexGetAll("playersByTid", bbgm.PLAYER.UNDRAFTED);
for (const p of players) {
    const ratings = p.ratings[p.ratings.length - 1];

    ratings.pss *= 1.2;

    // Recompute ovr and pot
    bbgm.player.develop(p, 0);

    await bbgm.idb.cache.players.put(p);
}
```

That will increase the passing rating by 20% for all draft prospects.

You can do other stuff to player ratings. These are the names of all the rating variables:

```
diq
dnk
drb
endu
fg
ft
hgt
ins
jmp
oiq
pss
reb
spd
stre
tp
```

#### "Lock ratings" for all active players

```
players = await bbgm.idb.cache.players.getAll();
for (const p of players) {
    p.ratings[p.ratings.length - 1].locked = true;
    await bbgm.idb.cache.players.put(p);
}
```

#### List all the players who have died

```
bbgm.iterate(
    bbgm.idb.league.transaction("players").store,
    undefined,
    undefined,
    player => {
        if (typeof player.diedYear === "number") {
            console.log(player.firstName + " " + player.lastName + " (" + player.born.year + " - " + player.diedYear + ")");
        }
    },
);
```
