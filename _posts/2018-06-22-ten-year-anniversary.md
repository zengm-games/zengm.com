---
layout: post
title: Ten year anniversary of the first commit to the Basketball GM code base
date: 2018-06-22
tags:
- Milestone
- Technical
---

[Check it out.](https://github.com/dumbmatter/basketball-gm/commit/cb4ae5f1b93dd7ad4e69fcc0c832ed53714e7e3a) Damn, nostalgia. I had just graduated from college and was trying to learn both Python and GTK+ (both technologies long since abandoned by BBGM) while pursuing this crazy idea of making a basketball management sim.

Looking at the code, some of it has totally changed, but other parts still have a direct lineage to the code today. For example, the [ridiculously simple initial implementation of game simulation](https://github.com/dumbmatter/basketball-gm/blob/cb4ae5f1b93dd7ad4e69fcc0c832ed53714e7e3a/game_sim.py) is not that different than the [only slightly less simple implementation used today](https://github.com/dumbmatter/basketball-gm/blob/aa187e67ce54077fc7517fa29d465e6e4000baff/src/js/worker/core/GameSim.js). The overall structure is the same, and many of the functions remain quite similar. Example:

<!--more-->

**10 years ago:**

    def do_steal(self):
        ratios = self.rating_array('steal_ratio', self.d)
        p = self.players_on_court[self.d][self.pick_player(ratios)]
        self.team[self.d].player[p].record_stat('steals')

**Today:**

    doStl(pStoleFrom: number) {
        const ratios = this.ratingArray("stealing", this.d, 5);
        const p = this.playersOnCourt[this.d][pickPlayer(ratios)];
        this.recordStat(this.d, p, "stl");
        this.recordPlay("stl", this.d, [
            this.team[this.d].player[p].name,
            this.team[this.o].player[pStoleFrom].name,
        ]);

        return "stl";
    }

This anniversary doesn't mean BBGM has had 10 years of consistent development, because for most of the first 4 years I did nothing with it. But for the past 6 things have progressed pretty steadily. If that continues, the next 10 years should be even better than the first!
