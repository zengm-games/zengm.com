---
layout: post
title: "Which NBA players take the most shots with their foot on the three point line? (hint: not James Harden)"
date: 2019-08-16
tags:
  - post
  - NBA
  - Non-BBGM
  - Statistics
---

I'm going to deal with a very important question today. Which NBA players sacrificed the most points by taking shots with their foot on the three point line? This may seem like a silly question, but [given the well-documented difficulty of assessing whether a player's foot was on the line or not](https://www.youtube.com/watch?v=zigowmdA6ro), I think it deserves a serious analysis.

<!--more-->

<style type="text/css">
#figure1, #figure2, #figure3 {
  clear: both;
  height: 400px;
  margin: 1em 0;
}

.line {
  fill: none;
  stroke-width: 3;
}

.axisRed line{
  stroke: var(--red);
}
.axisRed path{
  stroke: var(--red);
}
.axisRed text{
  fill: var(--red);
}

.axisBlue line{
  stroke: var(--cyan);
}
.axisBlue path{
  stroke: var(--cyan);
}
.axisBlue text{
  fill: var(--cyan);
}

svg text {
  fill: var(--text)
}

.tooltip {
  position: absolute;
  font-size: 12px;
  width:  auto;
  height: auto;
  pointer-events: none;
  background-color: white;
}
</style>

Imagine if we had a database containing all the shots taken in the NBA, along with the exact position on the floor each shot was taken. Then, with some minor assumptions about shoe size, we could figure out which shots were taken with a foot on the three point line. Sadly, we don't have that data. But we have something pretty close!

There's this cool repo on GitHub called [nba-shots-db](https://github.com/toddwschneider/nba-shots-db) that connects to an API on nba.com and downloads a bunch of shot data to your computer, where you can play around with it. It's not quite the ideal data I described above, but it's pretty sweet. It doesn't give the exact location of a shot, but it does say the distance and whether it's a two-pointer or a three-pointer.

But distance and point value alone are not good enough to see if a foot is on the line, because the three point line is not a constant distance from the hoop. It's shorter in the corners. So a 21.5 foot two-pointer could be a mundane mid range jumper at the top of the key, or it could be an extremely exciting shot from the corner with a foot on the line.

Fortunately, there is another field in the database that tells you the "zone" that a shot was taken in. Basically, we can identify the zones in this shot chart:

<figure><img src="/files/foot-on-the-line/nba-shot-chart.png" alt="Example NBA shot chart" width="300" height="282" class="img-fluid"></figure>

That gets us a pretty good estimate of how far away a two-pointer needs to be to have been taken with a foot on the line, although it's still not perfect because the three point distance varies in the baseline zones.

So here's what I came up with. For shots on the baseline zones, any two-pointer beyond 22 feet was probably taken with a foot on the line, since that is the same distance as the absolute shortest three pointer in the corner. And for the rest, where the three point line is 23.75 feet away, any two-pointer beyond 23 feet was probably taken with a foot on the line.

One other data issue... since the data goes back to the 1996-97 season, when the three point line was shorter than it is today. I could handle that as a special case, but fuck it, I'm only going to look at years with the current three point line distance.

I wound up with this big ol' SQL query to give me the information I want from the shot database:

```
SELECT
    players.id AS pid,
    players.display_name AS name,
    shots.season,
    shots.team_id AS team,
    SUM(CASE WHEN shots.shot_type = '2PT Field Goal' THEN 1 else 0 END) as fol,
    SUM(CASE WHEN shots.shot_type = '3PT Field Goal' THEN 1 else 0 END) as tpa
FROM shots
LEFT JOIN players ON shots.player_nba_id = players.nba_id
WHERE
    -- Ignore season where the 3 point line was shorter
    shots.season NOT IN ('1996-97', '1997-98') AND

    -- Ignore heaves
    shots.shot_distance <= 25 AND

    (
        -- 3 pointers
        shots.shot_zone_basic IN ('"Right Corner 3', 'Above the Break 3', 'Left Corner 3') OR

        (
            shots.shot_zone_basic = 'Mid-Range' AND
            (
                -- Foot on line in corner
                (shots.shot_distance >= 22 AND shots.shot_zone_area IN ('Left Side(L)', 'Right Side(R)')) OR

                -- Foot on line elsewhere
                (shots.shot_distance >= 23 AND shots.shot_zone_area IN ('Center(C)', 'Right Side Center(RC)', 'Left Side Center(LC)'))
            )
        )
    )
GROUP BY players.id, players.display_name, shots.season, shots.team_id
```

From the output of this SQL query, I can see the number of three-pointers and the number of shots taken with a foot on the line for every player in every season.

First, to give you an idea of what this data looks like leaguewide, here are the total number of three point attempts and the number of shots with a foot on the line for every season since 1998-99:

<div id="figure1"></div>

You can see the upward trend for three point attempts in recent years (except the lockout year in 2011-12), but shots with a foot on the line are not increasing with them. If anything, there may be a bit of a downward trend. I would have thought that these two numbers would be correlated, but with the increased realization that long two pointers are usually bad shots, maybe NBA players are getting even better at making sure they are behind the line.

Next, let's look at it team by team:

<form class="form-inline float-right">
  <select class="form-control" id="figure2season">
    <option>All Seasons</option>
    <option>2018-19</option>
    <option>2017-18</option>
    <option>2016-17</option>
    <option>2015-16</option>
    <option>2014-15</option>
    <option>2013-14</option>
    <option>2012-13</option>
    <option>2011-12</option>
    <option>2010-11</option>
    <option>2009-10</option>
    <option>2008-09</option>
    <option>2007-08</option>
    <option>2006-07</option>
    <option>2005-06</option>
    <option>2004-05</option>
    <option>2003-04</option>
    <option>2002-03</option>
    <option>2001-02</option>
    <option>2000-01</option>
    <option>1999-00</option>
    <option>1998-99</option>
  </select>
</form>

<div id="figure2"></div>

When all seasons are combined, Utah and Portland seem to be the worst. Looking season by season, most teams don't have a lot of consistency. That makes sense because players change teams so often, although you could imagine coaching having an effect here.

Utah often looks bad, for example in 2013-14. Portland too, especially from 1999-00 to 2001-02 where they were dragged down by careless foot-placers like Damon Stoudamire, Bonzi Wells, Arvydas Sabonis, and Shawn Kemp. But Portland has been more middle of the pack since then.

The Harden-era Rockets are consistently in the good quadrant, taking tons of three-pointers but not many shots with a foot on the line. Especially the past three seasons, they've clearly been the best in the league. This could be related to Moreyball's focus on the three and analytics in general. It could also be because the Rockets were one of the earliest teams to start taking a significant number of threes from well beyond the line, where there is absolutely no risk of a stray toe costing you a point.

And finally, let's look at individual player data:

<form class="form-inline float-right">
  <select class="form-control mr-2" id="figure3season">
    <option>All Seasons</option>
    <option>2018-19</option>
    <option>2017-18</option>
    <option>2016-17</option>
    <option>2015-16</option>
    <option>2014-15</option>
    <option>2013-14</option>
    <option>2012-13</option>
    <option>2011-12</option>
    <option>2010-11</option>
    <option>2009-10</option>
    <option>2008-09</option>
    <option>2007-08</option>
    <option>2006-07</option>
    <option>2005-06</option>
    <option>2004-05</option>
    <option>2003-04</option>
    <option>2002-03</option>
    <option>2001-02</option>
    <option>2000-01</option>
    <option>1999-00</option>
    <option>1998-99</option>
  </select>
  <select class="form-control" id="figure3team">
    <option>All Teams</option>
    <option>Atlanta Hawks</option>
    <option>Boston Celtics</option>
    <option>Brooklyn Nets</option>
    <option>Charlotte Hornets</option>
    <option>Chicago Bulls</option>
    <option>Cleveland Cavaliers</option>
    <option>Dallas Mavericks</option>
    <option>Denver Nuggets</option>
    <option>Detroit Pistons</option>
    <option>Golden State Warriors</option>
    <option>Houston Rockets</option>
    <option>Indiana Pacers</option>
    <option>Los Angeles Clippers</option>
    <option>Los Angeles Lakers</option>
    <option>Memphis Grizzlies</option>
    <option>Miami Heat</option>
    <option>Milwaukee Bucks</option>
    <option>Minnesota Timberwolves</option>
    <option>New Orleans Pelicans</option>
    <option>New York Knicks</option>
    <option>Oklahoma City Thunder</option>
    <option>Orlando Magic</option>
    <option>Philadelphia 76ers</option>
    <option>Phoenix Suns</option>
    <option>Portland Trail Blazers</option>
    <option>Sacramento Kings</option>
    <option>San Antonio Spurs</option>
    <option>Toronto Raptors</option>
    <option>Utah Jazz</option>
    <option>Washington Wizards</option>
  </select>
</form>

<div id="figure3"></div>

Among the positive outliers, you see guys like James Harden and Antoine Walker, who take many shots from well beyond the three point line. You also see guys like Shane Battier and Danny Green, who are spot up specialists and are often waiting with their feet carefully placed before they get the ball.

The negative outliers have some different characteristics. Some are bigs who may have been pulled a bit more towards the basket than other shooters, like Mehmet Okur and Arvydas Sabonis. Others are players who were known both for doing a lot of shot creation and (to some extent) inefficient scoring, like Corey Maggette, Damon Stoudamire, and (don't hate me) Kobe Bryant. Those players might not always have had the luxury of being able to precisely set their feet before shooting, and they also might not have been quite as concerned with losing a point as someone being constantly berated by Daryl Morey's analytics staff.

Looking specifically at the Rockets, the difference between Tracy McGrady and James Harden really seems indicative of their evolving style of play. As Rockets, McGrady took only 1/3 as many threes as Harden has so far, but he took 5 times as many shots with his foot on the line. Clearly, Giannis would not have won the MVP this season if the voters had this critical information at their disposal. I regret not doing this earlier.

(The plots in this article were made with D3. View the source of this page to see the code, it's not minified.)

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.9.7/d3.min.js"></script>
<script>
// If rows is an array of objects, this is like a GROUP BY in SQL where the "fol" and "tpa" columns are aggregated by SUM
const aggregate = (rows, groupBys) => {
  const sorted = _.orderBy(rows, groupBys);

  const outRows = [];

  const validGroupBys = ["name", "pid", "season", "team"];
  for (const groupBy of groupBys) {
    if (!validGroupBys.includes(groupBy)) {
      throw new Error(`Invalid groupBy: "${groupBy}"`);
    }
  }

  let prevRowKey;
  let outRow;
  for (const row of sorted) {
    const rowKey = JSON.stringify(groupBys.map(groupBy => row[groupBy]));
    if (rowKey !== prevRowKey) {
      prevRowKey = rowKey;
      outRow = {
        fol: 0,
        tpa: 0
      };
      for (const groupBy of groupBys) {
        outRow[groupBy] = row[groupBy];
      }
      outRows.push(outRow);
    }

    outRow.fol += row.fol;
    outRow.tpa += row.tpa;
  }

  return outRows;
};

// Figure 1: sums of FOL and 3PA vs year
const wrapper1 = document.getElementById("figure1");
let dataTemp1;
const figure1 = rows => {
  if (!dataTemp1) {
    dataTemp1 = aggregate(rows, ["season"]);
  }
  const data = dataTemp1;

  const margin = { top: 10, right: 58, bottom: 70, left: 70 };
  const width = wrapper1.clientWidth - margin.left - margin.right;
  const height = wrapper1.clientHeight - margin.top - margin.bottom;

  const n = data.length;

  const xScale = d3
    .scalePoint()
    .domain(_.uniq(data.map(row => row.season).sort()))
    .range([0, width]);

  const yScale0 = d3
    .scaleLinear()
    .domain([0, Math.max(...data.map(row => row.tpa))])
    .range([height, 0])
    .nice();

  const yScale1 = d3
    .scaleLinear()
    .domain([0, Math.max(...data.map(row => row.fol))])
    .range([height, 0])
    .nice();

  const line0 = d3
    .line()
    .x(d => xScale(d.season))
    .y(d => yScale0(d.tpa))
    .curve(d3.curveMonotoneX);

  const line1 = d3
    .line()
    .x(d => xScale(d.season))
    .y(d => yScale1(d.fol))
    .curve(d3.curveMonotoneX);

  const svg = d3
    .select("#figure1")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .attr("transform", "translate(-20,15)rotate(-45)");

  svg
    .append("text")
    .attr(
      "transform",
      "translate(" +
        width / 2 +
        " ," +
        (height + margin.top + margin.bottom - 15) +
        ")"
    )
    .style("text-anchor", "middle")
    .text("Season");

  svg
    .append("g")
    .attr("class", "axisRed")
    .call(d3.axisLeft(yScale0));

  svg
    .append("text")
    .style("fill", "var(--red)")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left)
    .attr("x", -(height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Three Point Attempts");

  svg
    .append("g")
    .attr("class", "axisBlue")
    .attr("transform", `translate(${width}, 0)`)
    .call(d3.axisRight(yScale1));

  svg
    .append("text")
    .style("fill", "var(--cyan)")
    .attr("transform", "rotate(90)")
    .attr("y", -(width + margin.right))
    .attr("x", height / 2)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Shots With Foot On The Line");

  const drawLine = (line, lineColor, yScale, key) => {
    svg
      .append("path")
      .datum(data)
      .attr("class", "line")
      .style("stroke", lineColor)
      .attr("d", line);

    svg
      .selectAll()
      .data(data)
      .enter()
      .append("circle")
      .attr("fill", lineColor)
      .attr("cx", d => xScale(d.season))
      .attr("cy", d => yScale(d[key]))
      .attr("r", 5);
  };

  drawLine(line0, "var(--red)", yScale0, "tpa");
  drawLine(line1, "var(--cyan)", yScale1, "fol");
};

// Figure 2: scatter plot of FOL vs 3PA, where each point is a team, with dropdown for season/all
const wrapper2 = document.getElementById("figure2");
let dataTemp2;
const figure2 = (rows, season) => {
  if (!dataTemp2) {
    dataTemp2 = aggregate(rows, ["team", "season"]);
  }
  let data;
  if (season === "All Seasons") {
    data = aggregate(dataTemp2, ["team"]);
  } else {
    data = dataTemp2.filter(row => row.season === season);
  }

  const margin = { top: 10, right: 10, bottom: 70, left: 58 };
  const width = wrapper2.clientWidth - margin.left - margin.right;
  const height = wrapper2.clientHeight - margin.top - margin.bottom;

  const n = data.length;

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map(row => row.tpa)))
    .range([0, width])
    .nice();

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map(row => row.fol)))
    .range([height, 0])
    .nice();

  const line0 = d3
    .line()
    .x(d => xScale(d.tpa))
    .y(d => yScale(d.fol))
    .curve(d3.curveMonotoneX);

  const svg = d3
    .select("#figure2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .attr("transform", "translate(-20,15)rotate(-45)");

  svg
    .append("text")
    .attr(
      "transform",
      "translate(" +
        width / 2 +
        " ," +
        (height + margin.top + margin.bottom - 15) +
        ")"
    )
    .style("text-anchor", "middle")
    .text("Three Point Attempts");

  svg.append("g").call(d3.axisLeft(yScale));

  svg
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left)
    .attr("x", -(height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Shots With Foot On The Line");

  const tooltip = d3
    .select("#figure2")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  const onMouseover = d => {
    tooltip
      .text(d.team)
      .style("left", d3.event.pageX + 15 + "px")
      .style("top", d3.event.pageY - 15 + "px")
      .transition()
      .duration(200)
      .style("opacity", 0.75);
  };
  const onMouseout = d => {
    tooltip
      .transition()
      .duration(300)
      .style("opacity", 0);
  };

  svg
    .selectAll()
    .data(data)
    .enter()
    .append("image")
    .attr("xlink:href", d => `/files/foot-on-the-line/nba-logos/${d.team}.png`)
    .attr("x", d => xScale(d.tpa) - 16)
    .attr("y", d => yScale(d.fol) - 16)
    .attr("width", 32)
    .attr("height", 32)
    .on("mouseover", onMouseover)
    .on("mouseout", onMouseout);
};

// Figure 3: scatter plot of FOL vs 3PA, where each point is a player
const wrapper3 = document.getElementById("figure3");
let dataTemp3;
const figure3 = (rows, season, team) => {
  if (!dataTemp3) {
    dataTemp3 = aggregate(rows, ["pid", "name", "season", "team"]);
  }
  let data;
  if (season === "All Seasons" && team === "All Teams") {
    data = aggregate(dataTemp3, ["pid", "name"]);
  } else if (team === "All Teams") {
    data = aggregate(dataTemp3, ["pid", "name", "season"]).filter(
      row => row.season === season
    );
  } else if (season === "All Seasons") {
    data = aggregate(dataTemp3, ["pid", "name", "team"]).filter(
      row => row.team === team
    );
  } else {
    data = dataTemp3.filter(row => row.season === season && row.team === team);
  }

  const margin = { top: 10, right: 10, bottom: 70, left: 58 };
  const width = wrapper3.clientWidth - margin.left - margin.right;
  const height = wrapper3.clientHeight - margin.top - margin.bottom;

  const n = data.length;

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map(row => row.tpa)))
    .range([0, width])
    .nice();

  const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map(row => row.fol)))
    .range([height, 0])
    .nice();

  const line0 = d3
    .line()
    .x(d => xScale(d.tpa))
    .y(d => yScale(d.fol))
    .curve(d3.curveMonotoneX);

  const svg = d3
    .select("#figure3")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .attr("transform", "translate(-20,15)rotate(-45)");

  svg
    .append("text")
    .attr(
      "transform",
      "translate(" +
        width / 2 +
        " ," +
        (height + margin.top + margin.bottom - 15) +
        ")"
    )
    .style("text-anchor", "middle")
    .text("Three Point Attempts");

  svg.append("g").call(d3.axisLeft(yScale));

  svg
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left)
    .attr("x", -(height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Shots With Foot On The Line");

  const tooltip = d3
    .select("#figure3")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  const onMouseover = d => {
    tooltip
      .html(`${d.name}<br>FOL: ${d.fol}<br>TPA: ${d.tpa}`)
      .style("left", d3.event.pageX + 15 + "px")
      .style("top", d3.event.pageY - 15 + "px")
      .transition()
      .duration(200)
      .style("opacity", 0.75);
  };
  const onMouseout = d => {
    tooltip
      .transition()
      .duration(300)
      .style("opacity", 0);
  };

  svg
    .selectAll()
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("r", 10)
    .attr("cx", d => xScale(d.tpa))
    .attr("cy", d => yScale(d.fol))
    .style("opacity", 0.5)
    .style("fill-opacity", 0.5)
    .style("fill", "var(--red)")
    .style("stroke", "black")
    .on("mouseover", onMouseover)
    .on("mouseout", onMouseout)
    /*.on("click", d => {
        const div = document.createElement("div");
        div.classList.add('tooltip');
        div.style.left = d3.event.pageX + 15 + "px"
        div.style.top = d3.event.pageY - 15 + "px";
        div.style.opacity = 0.75;
        div.innerHTML = `${d.name}<br>FOL: ${d.fol}<br>TPA: ${d.tpa}`;
        wrapper3.appendChild(div);
    });*/
};

const state = {
  figure2: {
    season: "All Seasons"
  },
  figure3: {
    season: "All Seasons",
    team: "All Teams"
  }
};

document.getElementById("figure2season").addEventListener("change", event => {
  state.figure2.season = event.target.value;
  render([2]);
});

document.getElementById("figure3season").addEventListener("change", event => {
  state.figure3.season = event.target.value;
  render([3]);
});

document.getElementById("figure3team").addEventListener("change", event => {
  state.figure3.team = event.target.value;
  render([3]);
});

let rows;

const render = figures => {
  if (!rows) {
    return;
  }

  // Clear first, so it can re-size when necessary
  if (figures.includes(1)) {
    wrapper1.innerHTML = "";
  }
  if (figures.includes(2)) {
    wrapper2.innerHTML = "";
  }
  if (figures.includes(3)) {
    wrapper3.innerHTML = "";
  }

  if (figures.includes(1)) {
    figure1(rows);
  }
  if (figures.includes(2)) {
    figure2(rows, state.figure2.season);
  }
  if (figures.includes(3)) {
    figure3(rows, state.figure3.season, state.figure3.team);
  }
};

const main = async () => {
  rows = await d3.csv("/files/foot-on-the-line/data.csv");
  for (const row of rows) {
    row.tpa = parseInt(row.tpa, 10);
    row.fol = parseInt(row.fol, 10);
  }

  render([1, 2, 3]);
};

main().catch(console.error);

let running = false;
const resizeListener = () => {
  if (running) {
    return;
  }
  running = true;
  window.requestAnimationFrame(() => {
    render([1, 2, 3]);
    running = false;
  });
};
window.addEventListener("resize", resizeListener);
</script>
