const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

/**
 * When taking screenshots...
 *
 * Use devtools to resize viewport to 780px width, then enable custom size and enter 730px width and max height.
 */

const TOP_ABSOLUTE = 167;
const TOP_BELOW_NAVBAR = 219;
const TOP_BELOW_SCORES = 283;
const TOP_BELOW_PAGE_TITLE = 336;
const TOP_BELOW_MORE = 372;

(async () => {
	const extractTops = {
		0: 271,
		1: TOP_BELOW_SCORES + 2,
		2: 649,
		3: TOP_BELOW_NAVBAR,
		4: TOP_BELOW_PAGE_TITLE,
		5: 400,
		6: 405,
		7: 344,
		8: TOP_BELOW_MORE - 2,
		9: TOP_BELOW_MORE,
		10: 387,
		11: 459,
		12: TOP_BELOW_PAGE_TITLE,
		13: 507,
		14: TOP_BELOW_NAVBAR,
		15: 607,
	};

	const baseballAdjustments = {
		1: 9,
		2: -649 + extractTops[1] + 9,
		7: 15,
		9: 20,
		11: -20,
	};

	const filenames = fs.readdirSync(path.join(__dirname, "screenshots-raw"));

	for (const filename of filenames) {
		const isBaseball = filename.startsWith("baseball-");

		const number = filename.split("-")[2].replace(".png", "");

		if (!filename.startsWith("all-") && !isBaseball) {
			// continue;
		}

		let outFilenames;
		if (filename.startsWith("all-")) {
			outFilenames = [
				filename.replace("all-", "baseball-"),
				filename.replace("all-", "basketball-"),
				filename.replace("all-", "football-"),
				filename.replace("all-", "hockey-"),
			];
		} else {
			outFilenames = [filename];
		}

		for (const outFilename of outFilenames) {
			console.log(number, filename, outFilename);

			const inPath = path.join(__dirname, "screenshots-raw", filename);
			const outPath = path.join(__dirname, "screenshots-cropped", outFilename);

			await sharp(inPath)
				.extract({
					left: isBaseball ? 22 : 25,
					top:
						extractTops[number] +
						(isBaseball ? baseballAdjustments[number] ?? 0 : 0),
					width: 730,
					height: 375,
				})
				.toFile(outPath);
		}
	}
})();
