// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


// Pulse the coming soon text.
$(function() {
  $('#coming_soon h2').effect("pulsate", {times:2}, 10000, function() {
    // Change the font color to orange.
    $('#coming_soon h1 span').animate({color: '#FFA500'}, 2500);;
  });
});

// Fade color in on TULA text on homepage.
$(function() {
  $('#home #header h1 span').animate({color: '#FFA500'}, 3000);;
});

// Add styling to selected prospectus section.
$(function() {
  $('#prospectus_container .left_column li').click(function() {
    $('#prospectus_container .left_column li').css({"color": "inherit", "font-weight": "inherit"});
    $(this).css({"color": "#F88017", "font-weight": "bold"});
  });
});

// Add chart
$(function() {
  var canvas = document.getElementsByTagName('canvas')[0];
  canvas.width  = 900px;
  canvas.height = 450px;
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
