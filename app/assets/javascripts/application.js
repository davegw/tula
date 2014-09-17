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

// Locks the left column navbar from scrolling on the prospectus page.
$(function() {
  var max_scroll = 160
  $(window).scroll(function () {
    var navbar = $("#prospectus_container .left_column");
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop > max_scroll && !navbar.is(".navbar_fixed")) {
      console.log("go floated");
      navbar.addClass("navbar_fixed");
    }
    else if(scrollTop < max_scroll && navbar.is(".navbar_fixed")) {
      console.log("return to normal");
      navbar.removeClass("navbar_fixed");
    }
  });
});

// $(function() {
//   $('#prospectus_container .left_column ul ul li').hide();
//   $('.more_headings').click(function() {
//     console.log("hi");
//     $(this).children().show();
//   })
// })

// Add styling to selected prospectus section.
$(function() {
  $('#prospectus_container .left_column li').click(function() {
    $('#prospectus_container .left_column li').removeClass('selected_section');
    $(this).addClass('selected_section');
  });
});

// Add a dropdown menu from the navigation bar.
$(function() {
  // HTML to append to the navigation bar.
  var html = '<ul><a href="../why-tula"><li>Historical Return</li></a><a href="../why-tula/2013-acquired-companies"><li class="last_sub_nav_item">2013 Acquired Companies</li></a></ul>';
  $('.has_sub_nav').hover(
    function() {
      $(this).addClass('sub_nav');
      $(this).append(html);
    }, function() {
      $(this).children("ul").remove();
      $(this).removeClass('sub_nav');
    }
  );
});

// Add chart
$(function() {
  var canvas = document.getElementsByTagName('canvas')[0];
  // Check that canvas exists. Fixes error when loaded in other pages without a canvas.
  if (canvas) {
    canvas.width  = 900;
    canvas.height = 450;
    var lineChartData = {
      labels : ["1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", 
        "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
      datasets : [
        {
          fillColor : "rgba(255,205,56,0.5)",
          strokeColor : "rgba(255,205,56,1)",
          pointColor : "rgba(255,205,56,1)",
          pointStrokeColor : "#fff",
          data : [10000, 14000, 23520, 25402, 32768, 50135, 41612, 41196, 30897, 40784, 49349, 
            53790, 59707, 69260, 50560, 65728, 80188, 68962, 79306, 114994, 123618],
          title : "TULA"
        },
        {
          fillColor : "rgba(56,156,255,0.5)",
          strokeColor : "rgba(56,156,255,1)",
          pointColor : "rgba(56,156,255,1)",
          pointStrokeColor : "#fff",
          data : [10000, 13700, 16851, 22412, 28911, 34983, 31834, 28014, 21851, 28188, 31288, 
            32853, 38109, 40015, 25209, 31764, 35575, 36287, 42093, 54721, 58059],
          title : "S&P 500"
        }
      ],
    }
    var options = {
      datasetFill : true,
      showLegend: true,
      bezierCurve : true,
      // Scale gets whacky when over 110,000 for some reason.
      // Use scaleOverride to manually set scale on the y-axis.
      scaleOverride: true,
      scaleSteps: 11,
      scaleStepWidth: 10000,
      scaleStartValue: 10000
    };
    new Chart(document.getElementById("myChart").getContext("2d")).Line(lineChartData, options);
  };
});
