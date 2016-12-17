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

    $('.send').click(function() {
        var subj = $('#message').val();
        var mailToLink = "mailto:info@webe.io?subject=" + encodeURIComponent(subj) + "&body=Dear Webe Team, %0A   %0A  ";
        window.location.href = mailToLink;
    });
});
