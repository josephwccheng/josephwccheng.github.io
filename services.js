$(document).ready(function () {
    // Show Project highlights text
    var number;
    $('.project-highlights-img').click(function () {
        number = $('.project-highlights-img').index(this);
        // if on mobile show project highlights below each picture
        if ($(window).width() < 576) {
            $('.project-highlights').hide();
            if ($('.project-highlights-mobile').eq(number).css("display") == 'none') {
                $('.project-highlights-mobile').hide();
            }
            $('.project-highlights-mobile').eq(number).slideToggle();
        } else {
            $('.project-highlights-mobile').hide();
            if ($('.project-highlights').eq(number).css("display") == 'none') {
                $('.project-highlights').hide();
            }
            $('.project-highlights').eq(number).slideToggle();
        }
    });

    // Show services text
    $('.services-btn').click(function () {
        $(this).parent().find('.services-list').slideToggle();
    });
});

// Expands the Services when a user selects the specific services from the menu bar
function expandServices(service) {
    const service_element = document.getElementById(service);
    $(service_element).slideDown();
};