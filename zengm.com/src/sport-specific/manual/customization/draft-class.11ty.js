const base = require("../../base");

module.exports = class {
	data() {
		return {
			...base("md"),
			title: "Custom Draft Classes",
		};
	}

	render({ ratingKeys, sport, subredditName }) {
		const ratings = ratingKeys
			.map(key => `"${key}": 100`)
			.join(",\n              ");

		return `Draft classes are filled by either pre-defined players or randomly-generated players, depending on if it's a real players league or a random players league. If you're using a [custom league file](/${sport}/manual/customization/), it could be either way.

It is possible to overwrite a draft class in any league with an uploaded draft class. To do this, go to Players > Draft > Draft Scouting, click "Customize", and upload a draft class file for whichever year you want. When you do this, it will delete all of the current prospects for that draft class, insert players from the uploaded file, and (if necessary) randomly generate some new players to fill out the draft class if the file contains less than a full draft class.

And what exactly is a "draft class file"?

Like with the custom league files, there are two places to get draft class file: download one or make your own. Again like league files, you might find some to download [on Reddit](https://www.reddit.com/r/${subredditName}/). You can even use a league file as a draft class file - it will just take whoever is defined in the first draft and ignore everything else in the league file.

If you want to make your own draft class file, it is almost identical to [defining custom players in a League File](/${sport}/manual/customization/players/). The format is exactly the same. Just make sure to give every player a "tid" of -2, and make sure to set the draft year of each player to the same as the "startingSeason" in the league file. For example:

    {
      "version": 37,
      "startingSeason": 2025,
      "players": [
        {
          "firstName": "Draft",
          "lastName": "Prospect 1",
          "tid": -2,
          "ratings": [
            {
              ${ratings}
            }
          ],
          "born": {"year": 2005},
          "draft": {"year": 2025}
        },
        {
          "firstName": "Draft",
          "lastName": "Prospect 2",
          "tid": -2,
          "ratings": [
            {
              ${ratings}
            }
          ],
          "born": {"year": 2005},
          "draft": {"year": 2025}
        }
      ]
    }

You can define as many or as few players as you want; if you define less than a full draft class, then randomly generated players will fill out the draft class when it's uploaded.`;
	}
};
