---
layout: post
title: 2020 was horrible, but not for Basketball GM
date: 2021-01-01
tags:
  - post
  - Milestone
---

Happy New Year!

I know, everybody's talking about how 2020 sucked and how they hope 2021 will be better. But it's also true that 2020 had at least one redeeming quality - it was a great year for Basketball GM! COVID lockdowns left me with more time to work on development, and it left many of you with more time to play. The end result has been [a ton of new features](/changelog/) that I won't even try to summarize here, and new records in all usage stats:

<div class="table-responsive">

| Year | Sessions  | Pageviews   | Total Play Time (years) |
| ---- | --------- | ----------- | ----------------------- |
| 2013 | 135,664   | 13,661,063  | 18.14                   |
| 2014 | 471,553   | 39,662,532  | 42.06                   |
| 2015 | 982,926   | 76,650,999  | 66.73                   |
| 2016 | 1,101,256 | 86,009,829  | 70.09                   |
| 2017 | 1,657,749 | 144,489,273 | 86.79                   |
| 2018 | 1,868,091 | 184,571,462 | 100.70                  |
| 2019 | 2,403,039 | 222,568,917 | 136.32                  |
| 2020 | 3,440,761 | 299,207,611 | 206.10                  |

{.table}

</div>

That's a lot of Basketball GM in 2020! And that's not even including [Football GM](https://football-gm.com/) which of course did a lot better in 2020 than in 2019 because it didn't even exist at the beginning of 2019.

I hope Basketball GM and Football GM brought you all some fun and distraction, I know they did for me. And I promise you, I have even bigger things planned for 2021 :)

<!--more-->

<div id="chart_div_1"></div>
<div id="chart_div_2"></div>
<div id="chart_div_3"></div>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(() => {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Value');
  data.addRows([
    ['2013', 135664],
    ['2014', 471553],
    ['2015', 982926],
    ['2016', 1101256],
    ['2017', 1657749],
    ['2018', 1868091],
    ['2019', 2403039],
    ['2020', 3440761]
  ]);

const data2 = new google.visualization.DataTable();
data2.addColumn('string', 'Year');
data2.addColumn('number', 'Value');
data2.addRows([
['2013', 13661063],
['2014', 39662532],
['2015', 76650999],
['2016', 86009829],
['2017', 144489273],
['2018', 184571462],
['2019', 222568917],
['2020', 299207611]
]);

const data3 = new google.visualization.DataTable();
data3.addColumn('string', 'Year');
data3.addColumn('number', 'Value');
data3.addRows([
['2013', 18.14],
['2014', 42.06],
['2015', 66.73],
['2016', 70.09],
['2017', 86.79],
['2018', 100.70],
['2019', 136.32],
['2020', 206.10]
]);

const options = {
legend: { position: 'none' },
lineWidth: 5,
pointSize: 20,
vAxis: { format: 'short' }
};

const chart = new google.visualization.LineChart(document.getElementById('chart_div_1'));
chart.draw(data, {
...options,
colors: ['red'],
title: 'Sessions',
});

const chart2 = new google.visualization.LineChart(document.getElementById('chart_div_2'));
chart2.draw(data2, {
...options,
colors: ['green'],
title: 'Pageviews',
});

const chart3 = new google.visualization.LineChart(document.getElementById('chart_div_3'));
chart3.draw(data3, {
...options,
colors: ['blue'],
title: 'Total Play Time (years)',
});
});
</script>
