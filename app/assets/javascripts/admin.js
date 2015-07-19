$(function() {
  // Header needed to verify CSRF token authenticity
  // http://stackoverflow.com/a/8175979/3614669
  $.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });
});
