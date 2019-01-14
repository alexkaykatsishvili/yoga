;(function($){
    "use strict";

    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $('.nav').css('height', '60px') : $('.nav').css('height', '100px');
        windowTop > 100 ? $('.nav__mob').css('top', '60px') : $('.nav__mob').css('top', '100px');
        windowTop > 100 ? $('.logo').css('display', 'none') : $('.logo').css('display', 'block');
    });

    //Mobile menu class toggle
    $('.nav__icon').click(function(){
        $(this).toggleClass('open');
        $('.nav__mob').toggleClass('nav__mob--open');
    });

    $(window).on('resize', function() {
        var win = $(this);
        if (win.width() > 650) {
            if ($(".nav__mob").hasClass("nav__mob--open")) {
                $(".nav__mob").removeClass("nav__mob--open");
            }
        }
    });

    //Smooth Scrolling Using Navigation Menu
    $('a[href*="#"]').on('click', function(e) {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
        }, 500);
        e.preventDefault();
    });

})(jQuery);