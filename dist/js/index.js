$(document).ready(function() {
  $(window.screen).change(function () {
    $('meta[name="theme-color"]').attr('content', $('body').css('background-color'));
  });
});
