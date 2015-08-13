$(document).ready(function() {
    $('.models_wrap').click(function() {
        $('.models_wrap ul').slideDown('slow');
    });
    $('.models_wrap').mouseleave(function() {
        $('.models_wrap ul').slideUp('slow');
    });
});