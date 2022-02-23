$(document).ready(function () {
    // Show Project highlights text
    var number;
    $('.project-highlights-img').click(function () {
        number = $('.project-highlights-img').index(this);
        if ($('.project-highlights').eq(number).css("display") == 'none') {
            $('.project-highlights').hide();
        }
        $('.project-highlights').eq(number).slideToggle();
    });

    // Show services text
    $('.services-btn').click(function () {
        $(this).parent().find('.services-list').slideToggle();
    });
});