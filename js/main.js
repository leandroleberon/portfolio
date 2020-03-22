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
        var nav = $(".navbar-row");

        $window.on('scroll', function(){
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hiddens', scrollTop > prev);
        prev = scrollTop;
        });

        // Change Navigation Bar font Color
        $(window).scroll(function(){
            var navbar = $("#navbar");
            var sidebar = $("#sidebar");
            var whitelogo = $("#whitelogo");
            var blacklogo = $("#blacklogo");

            if($(window).scrollTop() > 650) {
                navbar.fadeOut("fast")
                sidebar.fadeIn("slow")
                whitelogo.fadeIn("slow")
                blacklogo.fadeOut("fast")
            }
            else {
                navbar.fadeIn("slow")
                sidebar.fadeOut("fast")
                whitelogo.fadeOut("fast")
                blacklogo.fadeIn("slow")
            }
        
        })
        
        // Isotope
        var $grid = $(".grid").isotope({
            // options
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });

        // Isotope Filter
        $(".filter-btn").click(function(){
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $(".filter-btn").removeClass("active");
            $(this).addClass("active");
        });
        
        // Gallery Hover Effects
        var item = $(".grid-item");
        var image = $(".grid-item img");
        var overlay = $(".grid-item .overlay");

        item.hover(function(){
            $(this).css("transform","scale(1.05)")
            $(this).find(overlay).css("opacity","0.4")
        },function(){
            $(this).css("transform","scale(1)")
            $(this).find(overlay).css("opacity","0")
        })

    });
});
