const getYear = entry => {
	const dateOrVersion = entry.version ?? entry.date;
	return parseInt(dateOrVersion.slice(0, 4));
};

class Changelog {
	data() {
		return {
			layout: "layout.njk",
			title: "Changelog",
		};
	}

	render({ changelog }) {
		const years = [];
		const currentYear = new Date().getFullYear();
		for (let year = currentYear; year >= 2013; year--) {
			years.push(year);
		}

		let highestSeenYear = Infinity;

		return `<style>
.changelog-entry {
	margin-bottom: 1em;
	padding-top: 1em;
	border-top: 1px solid var(--bg-2);
}

.changelog-buttons img {
	vertical-align: -3px;
}

.changelog-sports {
	display: inline-block;
	margin-left: 5px;
}
.changelog-sports img {
	vertical-align: -3px;
}
@media (min-width: 1050px) {
	.changelog-sports {
		position: absolute;
		left: -46px;
		top: -1px;
		margin: 0;
		margin-top: 1em;
		text-align: right;
		width: 41px;
	}
}
</style>
<div class="mb-3 d-sm-flex changelog-buttons">
    <div class="btn-group me-sm-3 mb-3 mb-sm-0">
            <button type="button" class="btn btn-primary" id="toggle-basketball"><img src="https://play.basketball-gm.com/ico/logo.png" width="18" height="18"> Basketball</button>
            <button type="button" class="btn btn-primary" id="toggle-football"><img src="https://play.football-gm.com/ico/logo.png" width="18" height="18"> Football</button>
            <button type="button" class="btn btn-primary" id="toggle-baseball"><img src="https://baseball.zengm.com/ico/logo.png" width="18" height="18"> Baseball</button>
            <button type="button" class="btn btn-primary" id="toggle-hockey"><img src="https://hockey.zengm.com/ico/logo.png" width="18" height="18"> Hockey</button>
    </div>

    <div>
    <button type="button" class="btn btn-secondary" id="toggle-only-big-news">Only big news</button></div>
</div>

<div class="mb-3">
    ${years.map(year => `<a href="#${year}">${year}</a>`).join(" / ")}
</div>

<div id="changelog">
    ${changelog
			.map(entry => {
				const year = getYear(entry);
				let yearAnchor = "";
				if (year < highestSeenYear) {
					highestSeenYear = year;
					yearAnchor = `<a name="${year}"></a>`;
				}

				return `${yearAnchor}<div
	${entry.baseball ? 'data-baseball="true"' : ""}
	${entry.basketball ? 'data-basketball="true"' : ""}
    ${entry.football ? 'data-football="true"' : ""}
    ${entry.hockey ? 'data-hockey="true"' : ""}
    ${entry.big ? 'data-big="true"' : ""}
    class="changelog-entry position-relative"
>
    ${entry.version ? `v${entry.version}` : entry.date}
    <div class="changelog-sports">
        ${
					entry.basketball
						? '<img src="https://play.basketball-gm.com/ico/logo.png" width="18" height="18">'
						: ""
				}
        ${
					entry.football
						? '<img src="https://play.football-gm.com/ico/logo.png" width="18" height="18">'
						: ""
				}
		${
			entry.baseball
				? '<img src="https://baseball.zengm.com/ico/logo.png" width="18" height="18">'
				: ""
		}
		${
			entry.hockey
				? '<img src="https://hockey.zengm.com/ico/logo.png" width="18" height="18">'
				: ""
		}
    </div>
    ${
			entry.links && entry.links.length > 0
				? `&nbsp;${entry.links
						.map((url, i) => `<a href="${url}">[${i + 1}]</a>`)
						.join(" ")}`
				: ""
		}
    <br>
    ${entry.big ? '<span class="text-highlight">' : ""}
    ${this.renderMarkdownInline(entry.text)}
    ${entry.big ? "</span>" : ""}
</div>`;
			})
			.join("")}
</div>
<script>
const state = {
	baseball: true,
	basketball: true,
	hockey: true,
	football: true,
	onlyBigNews: false,
};

const buttons = {
	baseball: document.getElementById("toggle-baseball"),
	basketball: document.getElementById("toggle-basketball"),
	hockey: document.getElementById("toggle-hockey"),
	football: document.getElementById("toggle-football"),
};

const list = document.getElementById("changelog");

const updateDisplayedEntries = sport => {
	for (const child of list.children) {
		if (child.tagName !== "DIV") {
			// Skip over anchors
			continue;
		}

		// Sport displayed?
		let display = false;
		for (const sport of Object.keys(buttons)) {
			if (state[sport] && child.dataset[sport]) {
				display = true;
			}
		}

		// Big news
		if (display) {
			if (state.onlyBigNews && !child.dataset.big) {
				display = false;
			}
		}

		child.style.display = display ? "" : "none";
	}
};

const showSport = sport => {
	for (const child of list.children) {
		if (child.dataset[sport]) {
			child.style.display = "";
		}
	}
};

for (const [sport, button] of Object.entries(buttons)) {
	button.addEventListener("click", () => {
		state[sport] = !state[sport];

		button.classList.toggle("btn-primary");
		button.classList.toggle("btn-secondary");

		updateDisplayedEntries();
	});
}

const onlyBigNewsButton = document.getElementById("toggle-only-big-news");
onlyBigNewsButton.addEventListener("click", () => {
	state.onlyBigNews = !state.onlyBigNews;

	onlyBigNewsButton.classList.toggle("btn-primary");
	onlyBigNewsButton.classList.toggle("btn-secondary");

	updateDisplayedEntries();
});
</script>`;
	}
}

module.exports = Changelog;
