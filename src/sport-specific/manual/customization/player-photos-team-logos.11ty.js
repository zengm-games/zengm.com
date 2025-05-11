const bySport = require("../../../util/bySport");
const base = require("../../base");

module.exports = class {
	data() {
		return {
			...base("md"),
			title: "Customizing Player Photos and Team Logos",
			parent: "customization",
		};
	}

	render({ gameAcronym, gameName, subredditName, sport, websitePlay }) {
		const defaultStadiumCapacity = bySport(
			{
				baseball: 50000,
				basketball: 25000,
				football: 70000,
				hockey: 17500,
			},
			sport,
		);

		return `${gameName} supports using custom images for player profile pictures and team logos. For both of these, you need to first upload your custom image somewhere, and then copy the URL into ${gameName}

## Where to upload images

Two free sites you can use to host images are [Imgur](https://imgur.com/) and [ImgBB](https://imgbb.com/).

### Imgur

On the Imgur website, click [New Post](https://imgur.com/upload) and select the image file you want to upload.

Then to get the URL you need to copy into ${gameAcronym}, it's a little confusing! If you use the Imgur UI to copy the link, it will look something like <https://imgur.com/DGIXVJr> or <https://imgur.com/a/h11lAq5>. But neither of those will work in ${gameAcronym}. They are links *to a website containing the image* not to the image itself.

To get the URL to the image, you need to right click on it and go to "Copy image address" (or something similar depending on your browser):

<figure class="overflow-auto"><img src="/files/player-photos-team-logos-1.png"></figure>

That results in a URL like <https://i.imgur.com/DGIXVJr.png> which is correct. The correct URL will always end in .png or .jpg or some other image file format.

### ImgBB

After [uploading your image](https://imgbb.com/), you can do something similar to what is written above for Imgur - go to the image page, right click, and go to "Copy image address" to get the URL to the image.

Alternatively, if you look under "Embed codes" one of the options is "BBCode full linked", which looks like this:

    [url=https://imgbb.com/][img]https://i.ibb.co/HTGQNH5P/RIO.png[/img][/url]

The actual image URL is there in the middle (<https://i.ibb.co/HTGQNH5P/RIO.png>). You can either copy that part, or copy the whole thing. ${gameAcronym} has special logic to remove the BBCode tags if you paste the whole thing in.

## Player photos

**File format:** Any image format your browser supports is fine, such as .jpg or .png.

**Image dimensions:** Ideally it should be 240x360. But anything works, it will just not take up the full space if it's not 2:3 aspect ratio.

**Editing player photos in the game:** Go to a player profile page, click the "Edit" button, scroll down to "Appearance", and switch from "Cartoon Face" to "Image URL". Then you can enter the image URL in the box.

**Editing player photos in a JSON league file:** Enter the URL in the "imgURL" property of a player object. [Read this for more info about editing players in league files.](/${sport}/manual/customization/players/)

## Team logos

**File format:** Any image format your browser supports is fine, such as .jpg or .png. Another good option is a vector image in .svg format, because then it scales nicely when displayed at different sizes.

**Image dimensions:** There are two logos for each team: the normal one and the small one. The normal one is displayed in a larger size in places like the Roster page, and the small one is displayed in places like the Standings page.

256x256 is the ideal size for normal logos is, and 64x64 is good for small logos. But anything will work.

Logos can have any aspect ratio, but if you deviate too far from a square it might not look good.

**Editing team logos in the game:** You can edit team logos in a few different places:

1. When creating a new league, click "Customize" next to the team selector and within that page there is an "Edit" button next to each team where you can set various settings including logo URLs.

2. In an existing league, go to Tools > Manage Teams and you can edit the team logos there.

3. Before starting an expansion draft, you can edit any team info including the logos.

If you leave the small logo blank, then the normal logo will be used everywhere.

**Editing team logos in a JSON league file:** Enter the URLs in the "imgURL" and "imgURLSmall" properties of a team object.

If you leave out "imgURLSmall", then the normal logo will be used everywhere.

The "seasons" array within each team object includes info for past seasons. If you have that in your league file, then you can also edit the "imgURL" and "imgURLSmall" properties of each historical season.

[Read this for more info about editing teams in league files.](/${sport}/manual/customization/teams/)`;
	}
};
