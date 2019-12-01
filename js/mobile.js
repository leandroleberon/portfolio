
jQuery(function ($) { "use strict";

  //Smooth Scrolling
  var scroll = new SmoothScroll('a[href*="#"]');
  
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    effect: 'slide',

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

  });

});





