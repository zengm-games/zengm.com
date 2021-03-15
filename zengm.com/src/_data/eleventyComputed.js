const bySport = require("../util/bySport");

module.exports = {
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
