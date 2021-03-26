const { spawn } = require("child_process");
const cloudflare = require("cloudflare");
const cloudflareConfig = require("../../../../.config/cloudflare.json"); // eslint-disable-line import/no-unresolved

const TARGET = "jersch50@garibaldi.dreamhost.com:/home/jersch50/zengm.com";

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

	// Copy files and static separately, because we never want to delete from those folders
	const copyAndKeep = ["files", "static"]; // MAKE SURE TO EXCLUDE FROM DELETION BELOW
	for (const folder of copyAndKeep) {
		console.log(`Copying "${folder}" folder...`);
		await mySpawn("rsync", [
			"-vhrl",
			`${domainFolder}/${folder}/`,
			`${TARGET}/${folder}/`,
		]);
	}

	console.log("Copying other files...");
	const excludes = [...copyAndKeep, "--exclude", ".well-known"];
	if (domain === "basketball-gm.com") {
		excludes.push("bbgm-ads", "old", "prebid");
	}
	await mySpawn("rsync", [
		"-vhrl",
		"--delete",
		...excludes.flatMap(folder => ["--exclude", `/${folder}`]),
		`${domainFolder}/`,
		TARGET,
	]);

	console.log("Invalidating Cloudflare cache...");

	let zone;
	if (domain === "basketball-gm.com") {
		zone = cloudflareConfig.zones.basketball;
	} else if (domain === "basketball-gm.com") {
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

async () => {
	// const domains = ["basketball-gm.com", "football-gm.com", "zengm.com"];
	const domains = ["zengm.com"];
	for (const domain of domains) {
		await deploy(domain);
	}
};
