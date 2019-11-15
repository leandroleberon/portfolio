(function($) {
    
    //Start Transitions
    $(document).ready(function(){
        $(".logo").delay(6000).animate({
            opacity: 1
        }, 1000);
        $("#navhome").delay(200).animate({
            opacity: 1
        }, 1000);
        $("#navabout").delay(300).animate({
            opacity: 1
        }, 1000);
        $("#naveducation").delay(400).animate({
            opacity: 1
        }, 1000);
        $("#navcoding").delay(500).animate({
            opacity: 1
        }, 1000);
        $("#navanimation").delay(600).animate({
            opacity: 1
        }, 1000);
        $("#navcontact").delay(700).animate({
            opacity: 1
        }, 1000);
        $(".underlined").delay(300).animate({
            left: "+=87%",
            opacity: 1
        }, 800), $(".underlined").animate({
            left: "-=87%",
            opacity: 1}, 800);
        $("#linkedin").delay(900).animate({
            opacity: 1
        }, 1000);
        $("#facebook").delay(1000).animate({
            opacity: 1
        }, 1000);
        $("#twitter").delay(1100).animate({
            opacity: 1
        }, 1000);
        $("#instagram").delay(1200).animate({
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




    //Education Section Button Hover Functions
    $("#istbutton").hover(function(){
        $(this).css("transition", ".2s ease-in-out")
        $(this).css("background","rgb(63, 63, 63)");
        $(this).css("color","rgb(202, 202, 202)")
    },function(){
        $(this).css("background","rgb(202, 202, 202)");
        $(this).css("color","rgb(63, 63, 63)")
    });

    $("#fsubutton").hover(function(){
        $(this).css("transition", ".2s ease-in-out")
        $(this).css("background","rgb(63, 63, 63)");
        $(this).css("color","rgb(202, 202, 202)")
    },function(){
        $(this).css("background","rgb(202, 202, 202)");
        $(this).css("color","rgb(63, 63, 63)")
    });

    $("#udemybutton").hover(function(){
        $(this).css("transition", ".2s ease-in-out")
        $(this).css("background","rgb(63, 63, 63)");
        $(this).css("color","rgb(202, 202, 202)")
    },function(){
        $(this).css("background","rgb(202, 202, 202)");
        $(this).css("color","rgb(63, 63, 63)")
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
    

    //Next and Previous Hover Functions
    $(".next").hover(function(){
        $(this).css("transition", ".2s ease-in-out")
        $(this).css("opacity","0.6");
        $(this).css("transform","translateX(3px)")
    },function(){
        $(this).css("opacity","1");
        $(this).css("transform","translateX(-3px)")
    });

    $(".previous").hover(function(){
        $(this).css("transition", ".2s ease-in-out")
        $(this).css("opacity","0.6");
        $(this).css("transform","translateX(-3px)")
    },function(){
        $(this).css("opacity","1");
        $(this).css("transform","translateX(3px)")
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
        
    }

    function showeducation(){
        $(".education").removeClass("hidden").removeClass("invisible").addClass("active")
        if ($(".education").hasClass("flag") == false){
            $("#educationh1").delay(1000).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#istbox").delay(1700).animate({
                left: "+=5%",
                opacity: 1
            }, 1000);
            $("#fsubox").delay(1900).animate({
                left: "+=36.5%",
                opacity: 1
            }, 1000);
            $("#udemybox").delay(2100).animate({
                left: "+=68%",
                opacity: 1
            }, 1000);
            $(".education").addClass("flag")
        }
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
            $(".cdots").delay(2000).animate({
                bottom: "+=10%",
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
            $(".adots").delay(2000).animate({
                bottom: "+=10%",
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
            $("#cdot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
        } else if ($("#portfolio").hasClass("display") == true ){
            $("#weatherapp").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
            $("#portfolio").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#resume").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#cdot1").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        } else if ($("#resume").hasClass("display") == true ){
            $("#weatherapp").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#portfolio").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
            $("#resume").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#cdot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        }
    }

    function codingnext(){
        if ($("#weatherapp").hasClass("display") == true ){
            $("#weatherapp").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#portfolio").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display");
            $("#resume").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#cdot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        } else if ($("#portfolio").hasClass("display") == true ){
            $("#weatherapp").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#portfolio").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#resume").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display");
            $("#cdot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
        } else if ($("#resume").hasClass("display") == true ){
            $("#weatherapp").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display");
            $("#portfolio").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#resume").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#cdot1").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        }
    }



    //Coding Gallery Functions

    function animationprevious(){
        if ($("#doughnuts").hasClass("display") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#bowling").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#flag").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
            $("#adot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
        } else if ($("#bowling").hasClass("display") == true ){
            $("#doughnuts").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
            $("#bowling").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#adot1").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        } else if ($("#concrete").hasClass("display") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#bowling").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
            $("#concrete").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#adot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        } else if ($("#flag").hasClass("display") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#bowling").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#concrete").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display");
            $("#flag").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#adot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        }
    }

    function animationnext(){
        if ($("#doughnuts").hasClass("display") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#bowling").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display");
            $("#concrete").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#adot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        } else if ($("#bowling").hasClass("display") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#bowling").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#concrete").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display");
            $("#flag").removeClass("display").addClass("hideleft").addClass("invisible");
            $("#adot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        } else if ($("#concrete").hasClass("display") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#bowling").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#flag").removeClass("hideleft").removeClass("invisible").addClass("display");
            $("#adot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
        } else if ($("#flag").hasClass("display") == true ){
            $("#doughnuts").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display");
            $("#bowling").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#adot1").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        }
    }



})(jQuery);