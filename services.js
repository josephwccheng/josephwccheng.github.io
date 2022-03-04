$(document).ready(function () {
    // Show Project highlights text
    var number;
    if ($(window).width() > 576) {

        $('.project-highlights-img').click(function () {
            number = $('.project-highlights-img').index(this);
            if ($('.project-highlights').eq(number).css("display") == 'none') {
                $('.project-highlights').hide();
            }
            $('.project-highlights').eq(number).slideToggle();
        });
    } else {
        $('.project-highlights').eq(0).slideToggle();
        var carousel = $('.carousel');
        var carouselItems = carousel.find('.carousel-item');
        carousel.carousel({
            interval: 2000
        }).on('slid.bs.carousel', function (event) {
            number = carouselItems.siblings('.active').index();
            if ($('.project-highlights').eq(number).css("display") == 'none') {
                $('.project-highlights').hide();
            }
            $('.project-highlights').eq(number).show();
        })
    }

    // Show services text
    $('.services-btn').click(function () {
        $(this).parent().find('.services-list').slideToggle();
    });
});

// Expands the Services when a user selects the specific services from the menu bar
function expandServices(service) {
    var service_element = document.getElementById(service);
    //get y position of services' respective button with offset of height of banner
    var service_element_btn = document.getElementById(service + "-btn");
    //scroll to position
    $('html, body').animate({
        scrollTop: $(service_element_btn).offset().top - 200
    });
    //display services dropdown div
    $(service_element).slideDown();

};