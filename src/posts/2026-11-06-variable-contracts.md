---
layout: post
title: Partial support for contracts that change over time
date: 2026-11-06
tags:
  - post
  - Contracts
  - New Feature
  - Real Players
---

Contracts in ZenGM are very simple. No extensions, no options, no incentives, and the same dollar value every single year.

The reason for this is mostly to streamline gameplay. I know some people would like all the options, but I think there's a lot of value in simplicity as well.

But the lack of that functionality does have a cost. Possibly the biggest one is in real player leagues. IRL you often have situations where a guy is making like $8M/year on a rookie contract, and then he signs an extension for $40M/year that starts next season. How can that be represented in BBGM? Previously it was pretty bad, because there was no way to specify a contract that changed in value over time. You could either ignore the extension, or backdate it to today. I picked backdating as the least bad option, but that causes some serious salary cap problems when you're just throwing an extra $40M contract on a team's payroll.

In the latest update, there is some support for variable contracts, contracts which change in value over time. I say "some support" because it's not fully integrated into the game. Like free agents don't ask for these contracts, and you can't select them on the contract negotiation screen.

But they do exist in the real player data (albeit imperfectly - the next step will be improving my contract data...). And they do work nicely in the UI. And you can use God Mode to give a player a variable contract.

<!--more-->

When a player has a variable contract (which again, you will only see either in a BBGM real players league or if you use God Mode), that contract appears in the UI with an asterisk after it, and you can click it to show the full contract details:

<figure class="overflow-auto"><img src="/files/variable-contracts-1.png"></figure>

As mentioned above, in God Mode you can create/edit variable contracts:

<figure class="overflow-auto"><img src="/files/variable-contracts-2.png"></figure>

And a little bonus feature that applies to all contracts, the Contracts table on player profile pages now includes the team that paid the contract, and breaks it down for mid-season trades:

<figure class="overflow-auto"><img src="/files/variable-contracts-3.png"></figure>

All this new contract stuff does mean that your leagues need to upgrade to the new contract format. This will happen the first time you load a league in this update. It does have to scan over all players to do this, so it's a bit slow in large leagues, but not too bad. I tested it in a 2000 season league and it took 5 minutes. Normal sized leagues will be much faster.

For people making custom rosters, you can keep using the old format, but to use these new features you'll need to switch to the new format. You are surely familiar with the simple format of old contracts:

```js
  "contract": {
    "amount": 5000,
    "exp": 2030,
  },
```

Assuming a league starting in 2026, that is a $5M/year contract for 5 seasons.

In the new format, here is a similar $5M contract that includes a small raise every season:

```js
  "contracts": [
    {
      "start": 2026,
      "amounts": [5000, 5500, 6000, 6500, 7000],
    }
  ],
```

And to label it as a rookie contract, you'd now do:

```js
  "contracts": [
    {
      "type": "rookie",
      "start": 2026,
      "amounts": [5000, 5500, 6000, 6500, 7000],
    }
  ],
```

The format for released players with contracts still on the books has also changed. Previously it was like:

```js
  "releasedPlayers":[
    { "pid": 236, "tid": 3, "contract": { "amount": 2300,"exp": 2028 }},
    { "pid": 291, "tid": 3, "contract": { "amount": 9400,"exp": 2028 }}
  ],
```

Now, those live within the player object. Notice above how `"contracts"` is an array. That's because it stores all the historical contracts there. No more `"salaries"` property for that. For a released contract still being paid, it now looks like:

```js
  "contracts": [
    {
      "start": 2026,
      "amounts": [10000, 10000, 10000],
      "endedEarly": { "season": 2026, "phase": 0, "tid": 3 }
    },
    {
      "start": 2026,
      "amounts": [5000, 5500, 6000, 6500, 7000],
    }
  ],
```

The `"tid"` property in `"endedEarly"` means "this team still owes the rest of the money on this contract". If that is not true, either because of some special circumstance where the rest of the contract doesn't get paid, or because the contract has now expired and is no longer being paid, then you just leave out the `"tid"` property like this:

```js
  "contracts": [
    {
      "start": 2026,
      "amounts": [10000, 10000, 10000],
      "endedEarly": { "season": 2026, "phase": 0 }
    },
    {
      "start": 2026,
      "amounts": [5000, 5500, 6000, 6500, 7000],
    }
  ],
```

I do apologize for making you have to do things the new way. But as I said above, the old format will continue to work for custom league files! So you can keep using that if you don't need the new features.
