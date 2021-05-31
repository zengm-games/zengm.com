const LAST_VERSION_BEFORE_THIS_EXISTED = "2021.05.25.0919";

class ChangelogPHP {
	data() {
		return {
			permalink: "/changelog.php",
		};
	}

	render({ changelog }) {
		const filteredChangelog = changelog.filter(
			row => row.version !== undefined, // && row.version > LAST_VERSION_BEFORE_THIS_EXISTED,
		);

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
