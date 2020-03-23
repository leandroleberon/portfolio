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
        
        // Sidebar Underline Effect
        $(window).scroll(function(){
            var about_pos = $('#about').offset().top -100;
            var portfolio_pos = $('#portfolio').offset().top -100;
            var gallery_pos = $('#gallery').offset().top -100;
            var contact_pos = $('#contact').offset().top -600;
            var bottom = $(window).innerHeight();
            var about_link = $(".about-nav");
            var portfolio_link = $(".portfolio-nav");
            var gallery_link = $(".gallery-nav");
            var contact_link = $(".contact-nav");

            if($(window).scrollTop() >= about_pos && $(window).scrollTop() < portfolio_pos) {
                $("#about-underline").addClass("closed")
            }
            else {
                $("#about-underline").removeClass("closed")
            }

            if($(window).scrollTop() >= portfolio_pos && $(window).scrollTop() < gallery_pos) {
                portfolio_link.addClass("underline")
            }
            else {
                portfolio_link.removeClass("underline")
            }

            if($(window).scrollTop() >= gallery_pos && $(window).scrollTop() < contact_pos) {
                gallery_link.addClass("underline")
            }
            else {
                gallery_link.removeClass("underline")
            }

            if($(window).scrollTop() >= contact_pos) {
                contact_link.addClass("underline")
            }
            else {
                contact_link.removeClass("underline")
            }
        })

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
