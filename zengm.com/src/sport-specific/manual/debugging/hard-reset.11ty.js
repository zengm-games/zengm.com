const bySport = require("../../../util/bySport");
const base = require("../../base");

module.exports = class {
	data() {
		return {
			...base("js"),
			title: "Hard Reset",
		};
	}

	render({ gameName, sport }) {
		return `<p>
    Sometimes things just get stuck and you never get past the opening
    "Loading..." screen. If this happens, you can completely reset the game (and
    lose all your previous data) by doing this:
</p>
<ol>
    <li>Close your browser</li>
    <li>
        Open your browser profile folder (Google for how to do this in Firefox and
        Chrome for your OS)
    </li>
    <li>
        <b>Chrome only:</b> Within your profile folder, there is another folder
        called "IndexedDB". Open that folder
    </li>
    <li>
        <b>Firefox only:</b> Within your profile folder, there is a folder called
        "storage" and another folder inside that called "persistent". Open that
        folder
    </li>
    <li>
        Within that folder, there will be some other folder with "${bySport(
					{
						basketball: "basketball-gm",
						football: "football-gm",
						hockey: "zengm",
					},
					sport,
				)}" in
        the name. Delete that folder
    </li>
    <li>
        Open your browser again.
    </li>
    <li>The game should now work (although any previous game data will be gone)</li>
</ol>`;
	}
};
