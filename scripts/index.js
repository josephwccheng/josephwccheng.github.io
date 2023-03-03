console.log('index javascript has successfully loaded');
$(document).ready(function(){
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
        console.log('testing');
    });
});