$(function() {
  var canvas = document.getElementsByTagName('canvas')[0];
  canvas.width  = 900;
  canvas.height = 450;
  var lineChartData = {
    labels : ["1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", 
      "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013"],
    datasets : [
      {
        fillColor : "rgba(255,205,56,0.5)",
        strokeColor : "rgba(255,205,56,1)",
        pointColor : "rgba(255,205,56,1)",
        pointStrokeColor : "#fff",
        data : [10000, 14000, 23520, 25402, 32768, 50135, 41612, 41196, 30897, 40784, 49349, 
          53790, 59707, 69260, 50560, 65728, 80188, 68962, 79306, 103098],
        title : "TULA"
      },
      {
        fillColor : "rgba(56,156,255,0.5)",
        strokeColor : "rgba(56,156,255,1)",
        pointColor : "rgba(56,156,255,1)",
        pointStrokeColor : "#fff",
        data : [10000, 13700, 16851, 22412, 28911, 34983, 31834, 28014, 21851, 28188, 31288, 
          32853, 38109, 40015, 25209, 31764, 35575, 36287, 42093, 49669],
        title : "S&P 500"
      }
    ],
  }
  var options = {
    datasetFill : true,
    showLegend: true,
    bezierCurve : true
  };
  new Chart(document.getElementById("myChart").getContext("2d")).Line(lineChartData, options);
});
