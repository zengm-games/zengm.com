// Keep in sync with checkChanges.ts
const FETCH_LIMIT = 10;

class ChangelogPHP {
	data() {
		return {
			permalink: "/changelog.php",
		};
	}

	render({ changelog }) {
		// Keep at least 10 changelog entries for each sport
		const keptBySport = {
			baseball: 0,
			basketball: 0,
			football: 0,
			hockey: 0,
		};
		let doneAll = false;
		const filteredChangelog = changelog.filter(row => {
			if (row.version === undefined || doneAll) {
				return false;
			}

			let someNotDone = false;
			for (const sport of Object.keys(keptBySport)) {
				if (row[sport]) {
					keptBySport[sport] += 1;
				}

				if (keptBySport[sport] < FETCH_LIMIT) {
					someNotDone = true;
				}
			}

			if (!someNotDone) {
				doneAll = true;
			}

			return true;
		});

		return `<?php
if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    exit;
}

if (!isset($_GET["since"]) || !isset($_GET["current"]) || !isset($_GET["sport"]) || !isset($_GET["limit"])) {
    return "[]";
}

$json = <<<'EOT'
${JSON.stringify(filteredChangelog)}
EOT;

$changelog = json_decode($json, true);

$remaining = intval($_GET["limit"]);

function keep($change) {
    global $remaining;

    if ($remaining <= 0) {
        return false;
    }

    if (!$change[$_GET["sport"]]) {
        return false;
    }

    if ($change["version"] <= $_GET["since"]) {
        return false;
    }

    if ($change["version"] > $_GET["current"]) {
        return false;
    }

    $remaining -= 1;

    return true;
}

$filtered = array_values(array_filter($changelog, "keep"));

function remove_keys($change) {
    return array(
        "version" => $change["version"],
        "text" => $change["text"],
        "links" => $change["links"]
    );
}

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
echo json_encode(array_map("remove_keys", $filtered));
?>`;
	}
}

module.exports = ChangelogPHP;
