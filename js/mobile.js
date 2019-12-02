
jQuery(function ($) { "use strict";

  //Smooth Scrolling
  var scroll = new SmoothScroll('a[href*="#"]');
  
  //Swiper 
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

  //Menu
  $("#menuicon").hover(function(){
    $("#menu").css("transform","translateX(500px)")
    $("#menu").css("-webkit-transform","translateX(500px)")
  });

  $(".frame").hover(function(){
    $("#menu").css("transform","translateX(0px)");
    $("#menu").css("-webkit-transform","translateX(0px)")
    $("#contact").css("transform","translateX(0px)");
    $("#contact").css("-webkit-transform","translateX(0px)")
  });

  //Contact 
  $("#contactbtn").hover(function(){
    $("#contact").css("transform","translateX(-500px)");
    $("#contact").css("-webkit-transform","translateX(-500px)")
  },function(){
      $("#contact").css("transform","translateX(0px)");
      $("#contact").css("-webkit-transform","translateX(0px)")
  });

  
  //Copy to Clipboard
  new ClipboardJS('.btn');
});





