
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

  //Home
  $(".home p").delay(2700).fadeIn(700);
  $("#explorebtn").delay(3700).fadeIn(700);
  $("#explorebtn").hover(function(){
    $("#explorebtn a").css("color","rgb(29, 29, 29)");
    $(this).css("background-color","white");
    $(this).css("transition",".3s");
  },function(){
    $("#explorebtn a").css("color","white");
    $(this).css("background-color","");
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
  $("#contactbtn, #contact, #email, #phone").hover(function(){
    $("#contact").css("transform","translateX(-500px)");
    $("#contact").css("-webkit-transform","translateX(-500px)")
  },function(){
    $("#contact").css("transform","translateX(0px)");
    $("#contact").css("-webkit-transform","translateX(0px)")
  });

  $("#email").hover(function(){
    $(this).css("color","grey");
    $("#alticon").css("color","grey");
    $("#copied").fadeIn().delay(500).fadeOut();
  },function(){
    $(this).css("color","white");
    $("#alticon").css("color","white");
  });

  $("#phone").hover(function(){
    $("#phone a").css("color","grey");
    $("#phoneicon").css("color","grey");
  },function(){
    $("#phone a").css("color","white");
    $("#phoneicon").css("color","white");
  });

  
  //Copy to Clipboard
  new ClipboardJS('.btn');
  

});





