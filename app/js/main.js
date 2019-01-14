;(function($){
    "use strict";

    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $('.nav').css('height', '60px') : $('.nav').css('height', '100px');
    });

    $('.nav__icon').click(function(){
        $(this).toggleClass('open');
    });

})(jQuery);