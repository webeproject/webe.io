$(document).ready(function() {
    $('meta[name="theme-color"]').attr('content', $('body').css('background-color'));
    $(window.screen).change(function() {
        $('meta[name="theme-color"]').attr('content', $('body').css('background-color'));
    });

    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 900);
        return false;
    });

    $('#message').keypress(function(e) {
      if(e.which == 13) {
        send('info@webe.io')
      }
    });


    $('.send').click(function () {
      send('info@webe.io')
    });
});


function send(mail) {
  var subj = $('#message').val();
  var mailToLink = "mailto:" + mail + "?subject=" + encodeURIComponent(subj) + "&body=Dear Webe Team, %0A   %0A  ";
  window.location.href = mailToLink;
}
