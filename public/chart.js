var Chart = function(series, title) {

  var container = document.getElementById("chart");

  var chart = new Highcharts.Chart({
    chart: { type: "line", renderTo: container },
    title: title,
    subtitle: { text: "Temperature"},
    xAxis: { type: "datetime", startOnTick: true, units: [["hour", [3] ]] },
    yAxis: { title: 
      { text: "Temperature (°C)" } 
    },
    series: series
  });
}