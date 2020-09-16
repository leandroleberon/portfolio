jQuery(function ($) {
  "use strict";
  $(document).ready(function () {
    //Fancy Box
    $("[data-fancybox]").fancybox({
      defaultType: "image",
      animationDuration: 400,
      animationEffect: "zoom",
      protect: true,
      afterClose: ($.fancybox.defaults.hash = false),
    });

    // Simple Parallax JS
    var bird1 = document.getElementById("home-bird1");
    var bird2 = document.getElementById("home-bird2");
    var dragon = document.getElementById("dragon");
    var clouds1 = document.getElementById("clouds1");
    var clouds2 = document.getElementById("clouds2");
    var mountain1 = document.getElementById("transition2-1");
    var mountain2 = document.getElementById("transition2-2");
    new simpleParallax(bird1, {
      scale: 5,
      overflow: true,
      delay: 0.4,
      transition: "ease-out",
      orientation: "right",
    });
    new simpleParallax(bird2, {
      scale: 5,
      overflow: true,
      delay: 0.4,
      transition: "ease-out",
      orientation: "left",
    });
    new simpleParallax(dragon, {
      scale: 1.1,
      overflow: true,
      delay: 0.4,
      transition: "ease-out",
      orientation: "down",
    });
    new simpleParallax(clouds1, {
      scale: 1.5,
      overflow: true,
      delay: 0.4,
      transition: "ease-out",
      orientation: "right",
    });
    new simpleParallax(clouds2, {
      scale: 1.5,
      overflow: true,
      delay: 0.4,
      transition: "ease-out",
      orientation: "left",
    });
    new simpleParallax(mountain1, {
      scale: 1.5,
      overflow: true,
      delay: 0.4,
      transition: "ease-out",
      orientation: "right",
    });
    new simpleParallax(mountain2, {
      scale: 1.5,
      overflow: true,
      delay: 0.4,
      transition: "ease-out",
      orientation: "left",
    });

    // Prevent Right Click
    $("img").mousedown(function (e) {
      e.preventDefault();
    });
    $("img").on("contextmenu", function (e) {
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

    $window.on("scroll", function () {
      var scrollTop = $window.scrollTop();
      nav.toggleClass("hiddens", scrollTop > prev);
      prev = scrollTop;
    });

    // Change Navigation Bar font Color
    $(window).scroll(function () {
      var navbar = $("#navbar");
      var sidebar = $("#sidebar");
      var whitelogo = $("#whitelogo");
      var blacklogo = $("#blacklogo");

      if ($(window).scrollTop() > 650) {
        navbar.fadeOut("fast");
        sidebar.fadeIn("slow");
        whitelogo.fadeIn("slow");
        blacklogo.fadeOut("fast");
      } else {
        navbar.fadeIn("slow");
        sidebar.fadeOut("fast");
        whitelogo.fadeOut("fast");
        blacklogo.fadeIn("slow");
      }
    });

    // Isotope
    var $grid = $(".grid").isotope({
      // options
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
    });

    // Isotope Filter
    $(".filter-btn").click(function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
      $(".filter-btn").removeClass("active");
      $(this).addClass("active");
    });

    // Sidebar Underline Effect
    $(window).scroll(function () {
      var about_pos = $("#about").offset().top - 100;
      var portfolio_pos = $("#portfolio").offset().top - 100;
      var gallery_pos = $("#gallery").offset().top - 100;
      var contact_pos = $("#contact").offset().top - 900;
      var about_line = $(".about-nav .underline");
      var portfolio_line = $(".portfolio-nav .underline");
      var gallery_line = $(".gallery-nav .underline");
      var contact_line = $(".contact-nav .underline");
      var portfolio_text = $(".portfolio-nav a");
      var gallery_text = $(".gallery-nav a");
      var contact_text = $(".contact-nav a");

      if (
        $(window).scrollTop() >= about_pos &&
        $(window).scrollTop() < portfolio_pos
      ) {
        about_line.css("width", "100%");
      } else {
        about_line.css("width", "0%");
      }

      if (
        $(window).scrollTop() >= portfolio_pos &&
        $(window).scrollTop() < gallery_pos
      ) {
        portfolio_line.css("width", "100%");
      } else {
        portfolio_line.css("width", "0%");
      }

      if (
        $(window).scrollTop() >= gallery_pos &&
        $(window).scrollTop() < contact_pos
      ) {
        gallery_line.css("width", "100%");
      } else {
        gallery_line.css("width", "0%");
      }

      if ($(window).scrollTop() >= contact_pos) {
        contact_line.css("width", "100%");
      } else {
        contact_line.css("width", "0%");
      }
    });

    // Portfolio Hover Effects
    var portfolioitem = $(".project-img");
    var portfolioicon = $(".project-img i");
    var portfolioimg = $(".project-img img");

    portfolioitem.hover(
      function () {
        $(this).find(portfolioicon).css("opacity", "1");
        $(this).find(portfolioimg).css("opacity", "0.3");
      },
      function () {
        $(this).find(portfolioicon).css("opacity", "0");
        $(this).find(portfolioimg).css("opacity", "1");
      }
    );

    // Gallery Hover Effects
    var item = $(".grid-item");
    var image = $(".grid-item img");
    var overlay = $(".grid-item .overlay");

    item.hover(
      function () {
        $(this).find(image).css("transform", "scale(1.1)");
        $(this).find(overlay).css("opacity", "1");
      },
      function () {
        $(this).find(image).css("transform", "scale(1)");
        $(this).find(overlay).css("opacity", "0");
      }
    );
  });
});
