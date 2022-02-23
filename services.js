$(document).ready(function () {
    $('.services-btn').click(function () {
        $(this).parent().find('.services-list').slideToggle();
    });

    var number;
    $('.project-highlights-img').click(function () {
        number = $('.project-highlights-img').index(this);
        if ($('.project-highlights').eq(number).css("display") == 'none') {
            console.log('not open');
            $('.project-highlights').hide();
            $('.project-highlights').eq(number).slideToggle();
            console.log('now open');
        }
        else {           
            $('.project-highlights').eq(number).slideToggle();
            console.log('now closed');
        }
        
        
    });


});