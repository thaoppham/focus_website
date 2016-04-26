$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".overview").offset().top},
        'slow');
});
