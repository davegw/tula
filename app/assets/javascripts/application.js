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

