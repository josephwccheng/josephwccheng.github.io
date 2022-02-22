$(document).ready(function(){
    $('.services-btn').click(function(){
        $(this).parent().find(".services-list").slideToggle();
    });
});