const bySport = require("../util/bySport");

module.exports = {
    sport: data => {
        if (data.page.filePathStem.startsWith("/basketball/")) {
            return "basketball";
        }
        if (data.page.filePathStem.startsWith("/football/")) {
            return "football";
        }
        if (data.page.filePathStem.startsWith("/hockey/")) {
            return "hockey";
        }
        return undefined;
    },
    
    gameName: data => data.sport ? bySport({
        basketball: "Basketball GM",
        football: "Football GM",
        hockey: "ZenGM Hockey",
    }, data.sport) : undefined,

    websitePlay: data => data.sport ? bySport({
        basketball: "play.basketball-gm.com",
        football: "play.football-gm.com",
        hockey: "hockey.zengm.com",
    }, data.sport) : undefined,
};
