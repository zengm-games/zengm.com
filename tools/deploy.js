const { spawn } = require("node:child_process");
const Cloudflare = require("cloudflare");
const cloudflareConfig = require("../../../.config/cloudflare.json"); // eslint-disable-line import/no-unresolved

const NUM_RETRIES = 10;
const mySpawn = async (command, args) => {
	for (let attempt = 0; attempt <= NUM_RETRIES; attempt++) {
		console.log(`${command} ${args.join(" ")}`);

		const exitCode = await new Promise((resolve, reject) => {
			const cmd = spawn(command, args, { stdio: "inherit" });

			cmd.on("error", error => {
				reject(error);
			});
			cmd.on("close", code => {
				resolve(code);
			});
		});

		if (exitCode === 0) {
			// Success!
			return;
		}

		if (exitCode === 255 && attempt < NUM_RETRIES) {
			await setTimeout(2000);
			console.log(
				`Retrying after error code ${exitCode} (attempt #${attempt + 1})`,
			);
		} else {
			throw new Error(`child process exited with code ${exitCode}`);
		}
	}
};

const deploy = async domain => {
	const domainFolder = `./dist/${domain}`;
	const target = `jersch50@pdx1-shared-a3-10.dreamhost.com:/home/jersch50/${domain}`;

	// Copy "files" separately, because we never want to delete from those folders
	const copyAndKeep = ["files"];
	if (domain === "zengm.com") {
		// "files" folder only gets new stuff on zengm.com
		for (const folder of copyAndKeep) {
			console.log(`Copying "${folder}" folder...`);
			await mySpawn("rsync", [
				"-hrl",
				`${domainFolder}/${folder}/`,
				`${target}/${folder}/`,
			]);
		}
	}

	console.log("Copying other files...");
	const excludes = [
		...copyAndKeep,

		// Back when assetgraph was used to build site, zengm.com had a "static" folder, might still be used if someone has a cached HTML file
		"static",

		// Obvious
		".well-known",
	];
	if (domain === "basketball-gm.com") {
		// Special folders to keep on basketball-gm.com
		excludes.push("bbgm-ads", "old", "prebid");
	}
	await mySpawn("rsync", [
		"-hrl",
		"--delete",
		...excludes.flatMap(folder => ["--exclude", `/${folder}`]),
		`${domainFolder}/`,
		target,
	]);

	console.log("Invalidating Cloudflare cache...");

	let zone;
	if (domain === "basketball-gm.com") {
		zone = cloudflareConfig.zones.basketball;
	} else if (domain === "football-gm.com") {
		zone = cloudflareConfig.zones.football;
	} else {
		zone = cloudflareConfig.zones.hockey;
	}
	if (!zone) {
		throw new Error("Missing zone in Cloudflare config file");
	}

	const cloudflare = new Cloudflare({
		apiEmail: "jdscheff@gmail.com",
		apiKey: cloudflareConfig.apiKey,
	});
	const response = await cloudflare.cache.purge({
		zone_id: zone,
		purge_everything: true,
	});
	if (!response || JSON.stringify(response) !== JSON.stringify({ id: zone })) {
		console.log("WEIRD RESPONSE FROM CLOUDFLARE:");
		console.log(response);
	}

	console.log("\nDone!");
};

const DEFAULT_DOMAINS = ["basketball-gm.com", "football-gm.com", "zengm.com"];

(async () => {
	const domains =
		process.argv.length > 2 ? process.argv.slice(2) : DEFAULT_DOMAINS;
	for (const domain of domains) {
		if (!DEFAULT_DOMAINS.includes(domain)) {
			throw new Error(`Invalid domain "${domain}"`);
		}
	}

	for (let i = 0; i < domains.length; i++) {
		const domain = domains[i];
		const header = `Deploying ${domain}`;
		const separator = "=".repeat(header.length);
		if (i > 0) {
			console.log(`\n${separator}`);
		}
		console.log(`${header}\n${separator}\n`);
		await deploy(domain);
	}
})();
