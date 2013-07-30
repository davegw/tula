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

$(function() {
  $('#home #header h1 span').animate({color: '#FFA500'}, 3000);;
});

// $(function() {
//   $('#nav_bar li').mouseenter(function() {
//     $(this).css('color', 'orange');
//   })
// });

// $(function() {
//   $('#nav_bar li').mouseleave(function() {
//     $(this).css('color', 'inherit');
//   })
// });

// $(function() {
//   $('#nav_bar li').click(function() {
//     $(this).addClass('selected');
//   })
// })

// $(function() {
// // var $links = $('#nav_bar li');
//   $('#nav_bar li').click(function(){
//      $('#nav_bar li').removeClass('selected');
//      $(this).addClass('selected');
//   });
// });
