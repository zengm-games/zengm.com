---
layout: post
title: Scheduled events editor
date: 2026-10-13
tags:
  - post
  - Customization
  - New Feature
  - Scheduled Events
---

Scheduled events have existed in ZenGM for a long time, mostly to support [the historical real players mode in BBGM](/blog/2020/05/beta-real-rosters-back-to-1956/). Beyond that built-in mode, they've mostly been reserved for custom roster file creators, because while it was possible to edit the JSON directly to add scheduled events, there was no UI to create/edit them.

But now there is!

<!--more-->

At Tools > Scheduled Events, you can now add events:

<figure class="overflow-auto"><img src="/files/scheduled-events-editor-1.png"></figure>

And each type of even has a nice UI:

<figure class="overflow-auto"><img src="/files/scheduled-events-editor-2.png"></figure>

I delayed making an editor so long because it's pretty tricky! Think about it... the events are not independent. Like if you have these events:

1. Add expansion team X
2. Contract team X
3. Add expansion team X

and then you delete that 2nd event, then the 3rd event no longer makes sense. This problem crops up in a few different areas, but the fundamental problem is that creating/updating/deleting a scheduled event may invalidate some future scheduled event. The editor needs to be smart enough to handle this, and also give the user enough feedback so it's not too confusing.

Hopefully I correctly handled all those edge cases, but please [let me know](/contact/) if you noticed any bugs.

Another nice feature is that the "Delete" and "Bulk delete" buttons are now integrated into the undo system, so if you accidentally click one, no big deal!

Also, for people who have been using this feature by editing JSON files, there are a couple more changes you might be interested in:

1. There is now a `retirePlayer` event type to force a player to retire at a certain season/phase. I had been meaning to add this for a while, similar to the existing `unretirePlayer` one, and this seemed like a good time to do it.

2. Specifying award settings or conference/division settings used to be done in the `gameAttributes` event type, but now there are new `awards` and `confsDivs` ones. The reason for this is because those two event types need special editor UIs, so it was easier to just make them separate objects. Existing leagues and JSON files will be upgraded to the new format.
