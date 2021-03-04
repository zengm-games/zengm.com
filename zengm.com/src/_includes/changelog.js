const state = {
    basketball: true,
    hockey: true,
    football: true,
    onlyBigNews: false,
};

const buttons = {
    basketball: document.getElementById("toggle-basketball"),
    hockey: document.getElementById("toggle-hockey"),
    football: document.getElementById("toggle-football"),
};

const list = document.getElementById("changelog");

const updateDisplayedEntries = (sport) => {
    for (const child of list.children) {
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
}

const showSport = (sport) => {
    for (const child of list.children) {
        if (child.dataset[sport]) {
            child.style.display = "";
        }
    }
}

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