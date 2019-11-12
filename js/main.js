(function($) {
    
    //Start Transitions
    $(document).ready(function(){
        $(".logo").delay(3000).animate({
            opacity: 1
        }, 1000);
        $("#navhome").delay(500).animate({
            opacity: 1
        }, 1000);
        $("#navabout").delay(700).animate({
            opacity: 1
        }, 1000);
        $("#naveducation").delay(900).animate({
            opacity: 1
        }, 1000);
        $("#navcoding").delay(1100).animate({
            opacity: 1
        }, 1000);
        $("#navanimation").delay(1300).animate({
            opacity: 1
        }, 1000);
        $("#navcontact").delay(1500).animate({
            opacity: 1
        }, 1000);
        $(".underlined").delay(500).animate({
            opacity: 1
        }, 1000);
        $("#linkedin").delay(1900).animate({
            opacity: 1
        }, 1000);
        $("#facebook").delay(2100).animate({
            opacity: 1
        }, 1000);
        $("#twitter").delay(2300).animate({
            opacity: 1
        }, 1000);
        $("#instagram").delay(2500).animate({
            opacity: 1
        }, 1000);
    });
    


    //Navigation Hover Effects
    $(".smicon").hover(function(){
        $(this).css("transition", ".2s ease-in-out")
        $(this).css("opacity","0.6");
        $(this).css("transform","scale(1.3)")
    },function(){
        $(this).css("opacity","1");
        $(this).css("transform","scale(1)")
    });

    $(".navbar a").hover(function(){
        $(this).css("transition", ".2s ease-in-out");
        $(this).css("opacity","0.6");
    },function(){
        $(this).css("opacity","1");
    });

    $(".navbar").hover(function(){
        $(".underlined").css("transition", ".4s ease-in-out");
        $(".underlined").css("opacity","1");
    });




    //Navigation Bar
    
    $(".navbar #navhome").click(function(){
        underlinehome();
        showhome();
        hideabout();
        hideeducation();
        hidecoding();
        hideanimation();
        hidecontact();
    });

    $(".navbar #navabout").click(function(){
        underlineabout();
        hidehome();
        showabout();
        hideeducation();
        hidecoding();
        hideanimation();
        hidecontact();
    });

    $(".navbar #naveducation").click(function(){
        underlineeducation();
        hidehome();
        hideabout();
        showeducation();
        hidecoding();
        hideanimation();
        hidecontact();
    });

    $(".navbar #navcoding").click(function(){
        underlinecoding();
        hidehome();
        hideabout();
        hideeducation();
        showcoding();
        hideanimation();
        hidecontact();
    });

    $(".navbar #navanimation").click(function(){
        underlineanimation();
        hidehome();
        hideabout();
        hideeducation();
        hidecoding();
        showanimation();
        hidecontact();
    });

    $(".navbar #navcontact").click(function(){
        underlinecontact();
        hidehome();
        hideabout();
        hideeducation();
        hidecoding();
        hideanimation();
        showcontact();
    });



    //Home Button
    $(".home #button").click(function(){
        hidehome();
        showabout()
        hideeducation();
        hidecoding();
        hideanimation();
        hidecontact();
        underlineabout();
    });



    //Coding and Animation Gallery Previous and Next
    $("#codingprev").click(function(){
        codingprevious();
    });

    $("#codingnext").click(function(){
        codingnext();
    });

    $("#animationprev").click(function(){
        animationprevious();
    });

    $("#animationnext").click(function(){
        animationnext();
    });
    


    // FUNCTIONS


    // "Show" Functions
    function showhome(){
        $(".home").removeClass("hidden").removeClass("invisible").addClass("active")
        $(".home h1").addClass("nameappear")
        $(".home p").addClass("typewritter")
        $(".home #button").addClass("buttonappear")
    }

    function showabout(){
        $(".about").removeClass("hidden").removeClass("invisible").addClass("active")
        $(".about h1").addClass("h1-appear")
        $(".about p").addClass("p-appear")
        $(".about img").addClass("img-appear")
    }

    function showeducation(){
        $(".education").removeClass("hidden").removeClass("invisible").addClass("active")
        $(".education h1").addClass("h1-appear")
        $(".education p").addClass("p-appear")
        $(".education img").addClass("img-appear")
    }

    function showcoding(){
        $(".coding").removeClass("hidden").removeClass("invisible").addClass("active")
        if ($(".coding").hasClass("flag") == false){
            $("#codingh1").delay(1000).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#codingp").delay(1100).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#weatherapph1").delay(1500).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#weatherappp").delay(1500).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#weatherappimg").delay(1500).animate({
                top: "-=50px",
                opacity: 1
            }, 1000);
            $("#codingprev").delay(2500).animate({
                left: "+=20%",
                opacity: 1
            }, 1000);
            $("#codingnext").delay(2500).animate({
                right: "+=20%",
                opacity: 1
            }, 1000);
            $(".coding").addClass("flag")
        }
    }

    function showanimation(){
        $(".animation").removeClass("hidden").removeClass("invisible").addClass("active")
        $("")
        if ($(".animation").hasClass("flag") == false){
            $("#animationh1").delay(1000).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#animationp").delay(1100).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#doughnutsh1").delay(1500).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#doughnutsp").delay(1500).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#doughnutsimg").delay(1500).animate({
                top: "-=50px",
                opacity: 1
            }, 1000);
            $("#animationprev").delay(2500).animate({
                left: "+=20%",
                opacity: 1
            }, 1000);
            $("#animationnext").delay(2500).animate({
                right: "+=20%",
                opacity: 1
            }, 1000);
            $(".animation").addClass("flag")
        }
    }

    function showcontact(){
        $(".contact").removeClass("hidden").removeClass("invisible").addClass("active")
        $(".contact h1").addClass("h1-appear")
        $(".contact p").addClass("p-appear")
        $(".contact img").addClass("img-appear")
    }


    // "Hide" Functions
    function hidehome(){
        $(".home").removeClass("active").addClass("hidden").addClass("invisible")
    }

    function hideabout(){
        $(".about").removeClass("active").addClass("hidden").addClass("invisible")
    }

    function hideeducation(){
        $(".education").removeClass("active").addClass("hidden").addClass("invisible")
    }

    function hidecoding(){
        $(".coding").removeClass("active").addClass("hidden").addClass("invisible")
    }

    function hideanimation(){
        $(".animation").removeClass("active").addClass("hidden").addClass("invisible")
    }

    function hidecontact(){
        $(".contact").removeClass("active").addClass("hidden").addClass("invisible")
    }


    // "Underline" Functions
    function underlinehome(){
        $(".underlined").css("left","18px");
        $(".underlined").css("width","44px");
    }

    function underlineabout(){
        $(".underlined").css("left","95px");
        $(".underlined").css("width","47px");
    }

    function underlineeducation(){
        $(".underlined").css("left","175px");
        $(".underlined").css("width","76px");
    }

    function underlinecoding(){
        $(".underlined").css("left","285px");
        $(".underlined").css("width","52px");
    }

    function underlineanimation(){
        $(".underlined").css("left","370px");
        $(".underlined").css("width","80px");
    }

    function underlinecontact(){
        $(".underlined").css("left","482px");
        $(".underlined").css("width","60px");
    }




    //Coding Gallery Functions

    function codingprevious(){
        if ($("#weatherapp").hasClass("display") == true ){
            $("#weatherapp").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#portfolio").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#resume").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
        } else if ($("#portfolio").hasClass("display") == true ){
            $("#weatherapp").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
            $("#portfolio").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#resume").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
        } else if ($("#resume").hasClass("display") == true ){
            $("#weatherapp").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#portfolio").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
            $("#resume").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
        }
    }

    function codingnext(){
        if ($("#weatherapp").hasClass("display") == true ){
            $("#weatherapp").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#portfolio").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display");
            $("#resume").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
        } else if ($("#portfolio").hasClass("display") == true ){
            $("#weatherapp").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#portfolio").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#resume").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display");
        } else if ($("#resume").hasClass("display") == true ){
            $("#weatherapp").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display");
            $("#portfolio").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#resume").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
        }
    }



    //Coding Gallery Functions

    function animationprevious(){
        if ($("#doughnuts").hasClass("display") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#bowling").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#flag").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
        } else if ($("#bowling").hasClass("display") == true ){
            $("#doughnuts").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
            $("#bowling").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
        } else if ($("#concrete").hasClass("display") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#bowling").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
            $("#concrete").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
        } else if ($("#flag").hasClass("display") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#bowling").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#concrete").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
            $("#flag").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
        }
    }

    function animationnext(){
        if ($("#doughnuts").hasClass("display") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#bowling").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display");
            $("#concrete").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
        } else if ($("#bowling").hasClass("display") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#bowling").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#concrete").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display");
            $("#flag").removeClass("display").addClass("hideleft").addClass("invisible");
        } else if ($("#concrete").hasClass("display") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#bowling").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#flag").removeClass("hideleft").removeClass("invisible").addClass("display");
        } else if ($("#flag").hasClass("display") == true ){
            $("#doughnuts").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display");
            $("#bowling").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
        }
    }



})(jQuery);