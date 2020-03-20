jQuery(function ($) { "use strict";
    $( document ).ready(function() {
    
        // People Modals
        $(".modalbtn").click(function(event) {
            $(this).modal({
            fadeDuration: 250
            });
            return false;
        });
        
        // AOS Config
        AOS.init({
            once: true,
            duration: 700,
        });

        // Smooth Scrolling
        var scroll = new SmoothScroll('a[href*="#"]');
        
        //Hide Navigation Bar on scroll
        var prev = 0;
        var $window = $(window);
        var nav = $('#navbar');
        var smallnav = $('#small-navbar');

        $window.on('scroll', function(){
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hidden', scrollTop > prev);
        smallnav.toggleClass('hidden', scrollTop > prev);
        prev = scrollTop;
        })

    });
});
