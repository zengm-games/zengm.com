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

const hideSport = (sport) => {
    for (const child of list.children) {
        if (child.dataset[sport]) {
            child.style.display = "none";
        }
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
        if (state[sport]) {
            button.classList.add("btn-primary");
            button.classList.remove("btn-secondary");
            showSport(sport);
        } else  {
            button.classList.add("btn-secondary");
            button.classList.remove("btn-primary");
            hideSport(sport);
        }
    });
}

const onlyBigNewsButton = document.getElementById("toggle-only-big-news");
onlyBigNewsButton.addEventListener("click", () => {
    state.onlyBigNews = !state.onlyBigNews;

    if (state.onlyBigNews) {
        onlyBigNewsButton.classList.add("btn-primary");
        onlyBigNewsButton.classList.remove("btn-secondary");
    } else {
        onlyBigNewsButton.classList.remove("btn-primary");
        onlyBigNewsButton.classList.add("btn-secondary");
    }

    for (const child of list.children) {
        if (!child.dataset.big) {
            if (state.onlyBigNews) {
                child.style.display = "none";
            } else {
                child.style.display = "";
            }
        }
    }

});