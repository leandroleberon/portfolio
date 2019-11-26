
(function($) {
    //Home Button
    $("#button").click(function(){
        $(this).css("background-color","white");
        $(this).css("color","rgb(29, 29, 29)");
        $(this).css("transition",".3s");
    });

    //Smooth Scrolling
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault()
    
      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        300,
        'linear'
      )
    })

})(jQuery);



