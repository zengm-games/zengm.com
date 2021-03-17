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
    
    proLeagueAbbrev: data => data.sport ? bySport({
        basketball: "NBA",
        football: "NFL",
        hockey: "NHL",
    }, data.sport) : undefined,

    websitePlay: data => data.sport ? bySport({
        basketball: "https://play.basketball-gm.com/",
        football: "https://play.football-gm.com/",
        hockey: "https://hockey.zengm.com/",
    }, data.sport) : undefined,
};
