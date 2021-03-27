const { spawn } = require("child_process");
const cloudflare = require("cloudflare");
const cloudflareConfig = require("../../../.config/cloudflare.json"); // eslint-disable-line import/no-unresolved

const mySpawn = (command, args) => {
	return new Promise(resolve => {
		console.log(`${command} ${args.join(" ")}`);

		const cmd = spawn(command, args, { shell: true, stdio: "inherit" });
		cmd.on("close", code => {
			if (code !== 0) {
				console.log(`child process exited with code ${code}`);
				process.exit(code);
			}
			resolve();
		});
	});
};

const deploy = async domain => {
	const domainFolder = `./dist/${domain}`;
	const target = `jersch50@garibaldi.dreamhost.com:/home/jersch50/${domain}`;

	// Copy "files" separately, because we never want to delete from those folders
	const copyAndKeep = ["files"];
	if (domain === "zengm.com") {
		// "files" folder only gets new stuff on zengm.com
		for (const folder of copyAndKeep) {
			console.log(`Copying "${folder}" folder...`);
			await mySpawn("rsync", [
				"-vhrl",
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
		"-vhrl",
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

	const cf = cloudflare({
		email: "jdscheff@gmail.com",
		key: cloudflareConfig.apiKey,
	});

	const response = await cf.zones.purgeCache(zone, {
		purge_everything: true,
	});
	if (!response.success) {
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
