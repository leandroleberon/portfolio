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
        
        // Sidebar Hover Effect
        $(".nav").hover(function(){
            if ($(this).find(".underline").hasClass("*") == false){
                $(this).find(".underline").css("width","30%")
            }
        }, function(){
            if ($(this).find(".underline").hasClass("*") == false){
                $(this).find(".underline").css("width","0%")
            }
        })


        // Sidebar Underline Effect
        $(window).scroll(function(){
            var about_pos = $('#about').offset().top -100;
            var portfolio_pos = $('#portfolio').offset().top -100;
            var gallery_pos = $('#gallery').offset().top -100;
            var contact_pos = $('#contact').offset().top -500;
            var about_line = $(".about-nav .underline");
            var portfolio_line = $(".portfolio-nav .underline");
            var gallery_line = $(".gallery-nav .underline");
            var contact_line = $(".contact-nav .underline");

            if($(window).scrollTop() >= about_pos && $(window).scrollTop() < portfolio_pos) {
                about_line.css("width","100%").addClass("*")
            }
            else {
                about_line.css("width","0%").removeClass("*")
            }

            if($(window).scrollTop() >= portfolio_pos && $(window).scrollTop() < gallery_pos) {
                portfolio_line.css("width","100%").addClass("*")
            }
            else {
                portfolio_line.css("width","0%").removeClass("*")
            }

            if($(window).scrollTop() >= gallery_pos && $(window).scrollTop() < contact_pos) {
                gallery_line.css("width","100%").addClass("*")
            }
            else {
                gallery_line.css("width","0%").removeClass("*")
            }

            if($(window).scrollTop() >= contact_pos) {
                contact_line.css("width","100%").addClass("*")
            }
            else {
                contact_line.css("width","0%").removeClass("*")
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
