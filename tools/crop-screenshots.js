const fs = require("node:fs");
const path = require("node:path");
const sharp = require("sharp");

/**
 * When taking screenshots...
 *
 * Use devtools to enter enable mobile view with custom size of 730px width, and then use Chrome's built-in screenshot feature (in ctrl+shift+p of devtools) to take screenshots, which does 4x resolution
 * Not sure how much it matters, but I load the game outside of mobile mode first and then switch to mobile
 * Sometimes you can hide internal scrollbars by scrolling and then scrolling back - at least do this with the score bar, and anywhere else it looks good
 * For light/dark, open global settings in another tab
 * 
 * Convert to avif with:
mkdir -p avif
for f in *.png; do
  base="${f%.png}"
  avifenc --min 24 --max 28 --speed 0 --jobs all --yuv 444 "$f" avif/"$base.avif"
done
 * idk if that is optimal, but seems to work okay
 */

const WIDTH = 2 * 730;
const HEIGHT = 2 * 375;

const TOP_BELOW_NAVBAR = 104;
const TOP_BELOW_SCORES = 234;
const TOP_BELOW_PAGE_TITLE = 310 + 8;
const TOP_BELOW_MORE = 390;

(async () => {
	const extractTops = {
		0: 204,
		1: TOP_BELOW_SCORES,
		2: { baseball: TOP_BELOW_MORE, default: 1160 },
		3: TOP_BELOW_NAVBAR,
		4: TOP_BELOW_PAGE_TITLE,
		5: 464,
		6: 532,
		7: { baseball: 370, default: 234 },
		8: { baseball: TOP_BELOW_MORE + 152, default: TOP_BELOW_MORE + 112 },
		9: 420,
		10: TOP_BELOW_PAGE_TITLE,
		11: 459,
		12: TOP_BELOW_PAGE_TITLE,
		13: 661,
		14: TOP_BELOW_NAVBAR + 16,
		15: 540,
		16: 794,
		17: TOP_BELOW_SCORES,
		18: TOP_BELOW_SCORES,
	};

	const filenames = fs.readdirSync(path.join(__dirname, "screenshots-raw"));

	for (const filename of filenames) {
		const number = filename.split("-")[2].replace(".png", "");

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

			const temp = extractTops[number];
			let top;
			if (typeof temp === "number") {
				top = temp;
			} else {
				const sport = outFilename.split("-")[0];
				top = temp[sport] ?? temp.default;
			}

			await sharp(inPath)
				.extract({
					left: 0,
					top,
					width: WIDTH,
					height: HEIGHT,
				})
				.toFile(outPath);
		}
	}
})();
