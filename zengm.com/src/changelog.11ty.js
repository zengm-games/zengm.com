const fs = require("fs");
const path = require("path");

class Changelog {
    data() {
      return {
        layout: "layout.njk",
        title: "Changelog",
      };
    }
  
    async render({ changelog }) {
        const years = [];
        const currentYear = new Date().getFullYear();
        for (let year = currentYear; year >= 2013; year--) {
            years.push(year);
        }

        const css = fs.readFileSync(path.join(__dirname, "_includes", "changelog.css"), "utf8");
        const js = fs.readFileSync(path.join(__dirname, "_includes", "changelog.js"), "utf8");

        const minifiedJS = await this.jsmin(js);

        let highestSeenYear = Infinity;

        return `<style>
    ${this.cssmin(css)}
</style>
<div class="mb-3 d-sm-flex changelog-buttons">
    <div class="btn-group mr-sm-3 mb-3 mb-sm-0">
            <button type="button" class="btn btn-primary" id="toggle-basketball"><img src="https://play.basketball-gm.com/ico/logo.png" width="18" height="18"> Basketball</button>
            <button type="button" class="btn btn-primary" id="toggle-football"><img src="https://play.football-gm.com/ico/logo.png" width="18" height="18"> Football</button>
            <button type="button" class="btn btn-primary" id="toggle-hockey"><img src="https://hockey.zengm.com/ico/logo.png" width="18" height="18"> Hockey</button>
    </div>

    <div>
    <button type="button" class="btn btn-secondary" id="toggle-only-big-news">Only big news</button></div>
</div>

<div class="mb-3">
    ${years.map(year => `<a href="#${year}">${year}</a>`).join(" / ")}
</div>

<ul id="changelog">
    ${changelog.map(entry => {
        const year = parseInt(entry.date.slice(0, 4));
        let yearAnchor = "";
        if (year < highestSeenYear) {
            highestSeenYear = year;
            yearAnchor = `<a name="${year}"></a>`;
        }

        return `${yearAnchor}<li
    ${entry.basketball ? 'data-basketball="true"' : ""}
    ${entry.football ? 'data-football="true"' : ""}
    ${entry.hockey ? 'data-hockey="true"' : ""}
    ${entry.big ? 'data-big="true"' : ""}
    class="position-relative"
>
    ${entry.date}
    <div class="changelog-sports">
        ${entry.basketball ? '<img src="https://play.basketball-gm.com/ico/logo.png" width="18" height="18">' : ""}
        ${entry.football ? '<img src="https://play.football-gm.com/ico/logo.png" width="18" height="18">' : ""}
        ${entry.hockey ? '<img src="https://hockey.zengm.com/ico/logo.png" width="18" height="18">' : ""}
    </div>
    ${entry.links ? `&nbsp;${entry.links.map((url, i) => `<a href="${url}">[${i + 1}]</a>`).join(" ")}` : ""}
    <br>
    ${entry.big ? '<span class="text-highlight">' : ""}
    ${this.renderUsingMarkdown(entry.text)}
    ${entry.big ? '</span>' : ""}
</li>`;
    }).join("")}
</ul>
<script>
    ${minifiedJS}
</script>`;
    }
}

module.exports = Changelog;
