/**
 *This is a manifest file that'll be compiled into application.js, which will include all the files
 * listed below.
 *
 * Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
 * or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
 *
 * It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
 * the compiled file.
 *
 * WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
 * GO AFTER THE REQUIRES BELOW.
 */


// Pulse the coming soon text.
$(function() {
  $('#coming_soon h2').effect('pulsate', {times:2}, 10000, function() {
    // Change the font color to orange.
    $('#coming_soon h1 span').animate({color: '#FFA500'}, 2500);
  });
});

// Fade color in on TULA text on homepage.
$(function() {
  $('#home #header h1 span').animate({color: '#FFA500'}, 3000);
});

// Locks the left column navbar from scrolling on the prospectus page.
$(function() {
  var maxScroll = 160;
  $(window).scroll(function () {
    var navbar = $('#prospectus_container .left_column');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop > maxScroll && !navbar.is('.navbar_fixed')) {
      console.log('go floated');
      navbar.addClass('navbar_fixed');
    }
    else if(scrollTop < maxScroll && navbar.is('.navbar_fixed')) {
      console.log('return to normal');
      navbar.removeClass('navbar_fixed');
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
  var html = '<ul><a href="../why-tula"><li>Historical Return</li></a><a href="../why-tula/acquired-companies"><li class="last_sub_nav_item">Acquired Company List</li></a></ul>';
  $('.has_sub_nav').hover(
    function() {
      $(this).addClass('sub_nav');
      $(this).append(html);
    }, function() {
      $(this).children('ul').remove();
      $(this).removeClass('sub_nav');
    }
  );
});

// Add chart
$(function() {
  var canvas = $('canvas')[0];

  // Check that canvas exists. Fixes error when loaded in other pages without a canvas.
  if (canvas) {
    // canvas.css({'width': '900px', 'height': '450px'});
    canvas.width  = 900;
    canvas.height = 450;
    var $tableRows = $('table.why_table.return_dollar tr:not(:first)');
    var years = [];
    var sp500Return = [];
    var tulaReturn = [];
    $tableRows.each(function(idx, row) {
      years.push($(row).find('td').first().text().trim());
      sp500Return.push(+$(row).find('td:nth-child(2)').text().trim().replace(/\$|,/g, ''));
      tulaReturn.push(+$(row).find('td:nth-child(3)').text().trim().replace(/\$|,/g, ''));
    });
    var lineChartData = {
      labels: years,
      datasets: [
        {
          fillColor: 'rgba(255,205,56,0.5)',
          strokeColor: 'rgba(255,205,56,1)',
          pointColor: 'rgba(255,205,56,1)',
          pointStrokeColor: '#fff',
          data: tulaReturn,
          title: 'TULA'
        },
        {
          fillColor: 'rgba(56,156,255,0.5)',
          strokeColor: 'rgba(56,156,255,1)',
          pointColor: 'rgba(56,156,255,1)',
          pointStrokeColor: '#fff',
          data: sp500Return,
          title: 'S&P 500'
        }
      ],
    };
    var initialInvestment = tulaReturn[0];
    // Scale gets whacky when y-axis value is over 110,000 for some reason.
    // Use scaleOverride to manually set scale on the y-axis.
    var options = {
      datasetFill:     true,
      showLegend:      true,
      bezierCurve:     true,
      scaleOverride:   true,
      scaleSteps:      12,
      scaleStepWidth:  initialInvestment,
      scaleStartValue: initialInvestment
    };
    new Chart(document.getElementById('myChart').getContext('2d')).Line(lineChartData, options);
  }
});

$(function() {
  function displayYear(){
    var selectedYear = $('#acquisitions_container select').val();
    $('.acquisition_year').hide();
    $('span#selected_year').text(selectedYear);
    $('#'+selectedYear+'_acquisitions').show();
  }

  displayYear();
  $('#acquisitions_container select').on('change', function() {
    displayYear();
  });
});
//= require react
//= require react_ujs
//= require components
