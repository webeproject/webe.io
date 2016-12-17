$(document).ready(function() {
  // $('meta[name="theme-color"]').attr('content', $('body').css('background-color'));
  // $(window.screen).change(function () {
  //   $('meta[name="theme-color"]').attr('content', $('body').css('background-color'));
  // });


  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 900);
    return false;
  });
});
