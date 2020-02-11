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
        $("#bird").delay(3500).animate({
            left: "+=68%",
            top: "+=25%"
        }, 6000);
    });
    

    //Bird animations
    $("#bird").click(function(){
        if ($(this).hasClass("flag") == false){
            $(this).css("transform","scaleX(-1)");
            $(this).animate({
                left: "-=45%"
            }, 4000);
            $(this).addClass("flag");
        } else {
            $(this).css("transform","scaleX(1)");
            $(this).animate({
                left: "+=75%",
                top: "-=30%"
            }, 6000);
            $(this).removeClass("flag");
        }
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
        setTimeout(function(){
            $(".underlined").css("transition", ".4s ease-in-out");
          }, 1900);
    });




    //Navigation Bar
    
    $(".navbar #navhome").click(function(){
        $(".underlined").stop();
        underlinehome();
        showhome();
        hideabout();
        hideeducation();
        hidecoding();
        hideanimation();
        hidecontact();
        shownextsection();
        hideprevsection();
    });

    $(".navbar #navabout").click(function(){
        $(".underlined").stop();
        underlineabout();
        hidehome();
        showabout();
        hideeducation();
        hidecoding();
        hideanimation();
        hidecontact();
        shownextsection();
        showprevsection();
    });

    $(".navbar #naveducation").click(function(){
        $(".underlined").stop();
        underlineeducation();
        hidehome();
        hideabout();
        showeducation();
        hidecoding();
        hideanimation();
        hidecontact();
        shownextsection();
        showprevsection();
    });

    $(".navbar #navcoding").click(function(){
        $(".underlined").stop();
        underlinecoding();
        hidehome();
        hideabout();
        hideeducation();
        showcoding();
        hideanimation();
        hidecontact();
        shownextsection();
        showprevsection();
    });

    $(".navbar #navanimation").click(function(){
        $(".underlined").stop();
        underlineanimation();
        hidehome();
        hideabout();
        hideeducation();
        hidecoding();
        showanimation();
        hidecontact();
        shownextsection();
        showprevsection();
    });

    $(".navbar #navcontact").click(function(){
        $(".underlined").stop();
        underlinecontact();
        hidehome();
        hideabout();
        hideeducation();
        hidecoding();
        hideanimation();
        showcontact();
        hidenextsection();
        showprevsection();
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
        shownextsection();
        showprevsection();
    });



    //Next and Previous Section Functions
    $("#nextsection").click(function(){
        if ($(".home").hasClass("hidden") == false){
            hidehome();
            showabout();
            underlineabout();
            $(".underlined").css("transition", ".4s ease-in-out");
            shownextsection();
            showprevsection();
        } else if ($(".about").hasClass("hidden") == false){
            hideabout();
            showeducation();
            underlineeducation();
            $(".underlined").css("transition", ".4s ease-in-out");
            shownextsection();
            showprevsection();
        } else if ($(".education").hasClass("hidden") == false){
            hideeducation();
            showcoding();
            underlinecoding();
            $(".underlined").css("transition", ".4s ease-in-out");
            shownextsection();
            showprevsection();
        } else if ($(".coding").hasClass("hidden") == false){
            hidecoding();
            showanimation();
            underlineanimation();
            $(".underlined").css("transition", ".4s ease-in-out");
            shownextsection();
            showprevsection();
        } else if ($(".animation").hasClass("hidden") == false){
            hideanimation();
            showcontact();
            underlinecontact();
            $(".underlined").css("transition", ".4s ease-in-out");
            hidenextsection();
            showprevsection();
        }
    });

    $("#prevsection").click(function(){
        if ($(".about").hasClass("hidden") == false){
            hideabout();
            showhome();
            underlinehome();
            $(".underlined").css("transition", ".4s ease-in-out");
            shownextsection();
            hideprevsection();
        } else if ($(".education").hasClass("hidden") == false){
            hideeducation();
            showabout();
            underlineabout();
            $(".underlined").css("transition", ".4s ease-in-out");
            shownextsection();
            showprevsection();
        } else if ($(".coding").hasClass("hidden") == false){
            hidecoding();
            showeducation();
            underlineeducation();
            $(".underlined").css("transition", ".4s ease-in-out");
            shownextsection();
            showprevsection();
        } else if ($(".animation").hasClass("hidden") == false){
            hideanimation();
            showcoding();
            underlinecoding();
            $(".underlined").css("transition", ".4s ease-in-out");
            shownextsection();
            showprevsection();
        } else if ($(".contact").hasClass("hidden") == false){
            hidecontact();
            showanimation();
            underlineanimation();
            $(".underlined").css("transition", ".4s ease-in-out");
            $("#nextsection").css("color","white");
            shownextsection();
            showprevsection();
        }
    });


    //About section plane animations

    $("#hondurasimg").click(function(){
        if ($("#plane1").hasClass("flag") == false){
            $("#plane1").addClass("flag");
            $("#plane1").css("opacity","1");
            $("#plane1").animate({
                left: "+=21.5%",
                bottom: "-=2%"
            }, 3000);
            setTimeout(function(){
                $("#plane1").css("opacity","0");
              }, 3000);
        }
    });

    $("#panamaimg").click(function(){
        if ($("#plane2").hasClass("flag") == false){
            $("#plane2").addClass("flag");
            $("#plane2").css("opacity","1");
            $("#plane2").animate({
                right: "-=28%",
                bottom: "+=3%"
            }, 3500);
            setTimeout(function(){
                $("#plane2").css("opacity","0");
              }, 3500);
        }
    });




    //Next and Previous Section Hover Functions
    $(".nextprevsection").hover(function(){
        $(this).css("cursor","pointer");
        $(this).animate({
            opacity: 0.7
        }, 200);
    },function(){
        $(this).animate({
            opacity: 1
        }, 200);
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

    //Gallery button hover functions
    $(".gallerybtn").hover(function(){
        $(this).css("transition", ".2s ease-in-out")
        $(this).css("background","white")
        $(this).css("color","rgb(46, 46, 46)")
        $(this).css("cursor","pointer")
    },function(){
        $(this).css("background","rgba(0,0,0,0)")
        $(this).css("color","white")
    });




    //Contact section Send button hover function
    $("#contactsubmit input").hover(function(){
        $(this).css("transition", ".2s ease-in-out")
        $(this).css("background-color","white")
        $(this).css("color","rgb(46, 46, 46)")
        $(this).css("cursor","pointer")
    },function(){
        $(this).css("background-color","rgba(0, 0, 0, 0.226)")
        $(this).css("color","rgb(190, 190, 190)")
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
        if ($(".about").hasClass("flag") == false){
            planeanimation1();
            planeanimation2();
            $(".about").addClass("flag")
        }
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
        $(".coding").removeClass("hidden").removeClass("invisible").addClass("active");
        if ($(".coding").hasClass("flag") == false){
            $("#codingh1").delay(1000).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#codingp").delay(1100).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#codinglines").delay(1100).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#weatherapph1").delay(1300).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#weatherappp").delay(1400).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#weatherappimg").delay(1900).animate({
                top: "-=50px",
                opacity: 1
            }, 1000);
            $("#weatherappbtn1").delay(1600).animate({
                bottom: "+=10%",
                opacity: 1
            }, 1000);
            $("#weatherappbtn2").delay(1700).animate({
                bottom: "+=10%",
                opacity: 1
            }, 1000);
            $("#codingprev").delay(3000).animate({
                left: "+=20%",
                opacity: 1
            }, 1000);
            $("#codingnext").delay(3000).animate({
                right: "+=20%",
                opacity: 1
            }, 1000);
            $(".cdots").delay(2100).animate({
                bottom: "+=10%",
                opacity: 1
            }, 1000);
            $(".coding").addClass("flag")
        } else {
            $("#weatherapp").removeClass("hideright").removeClass("hideleft").removeClass("invisible").removeClass("display").addClass("*");
            $("#portfolio").removeClass("display").removeClass("hideleft").removeClass("*").addClass("hideright").addClass("invisible");
            $("#resume").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#cdot1").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
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
            $("#animationlines").delay(1100).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#doughnutsh1").delay(1300).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#doughnutsp").delay(1400).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#doughnutsimg").delay(1900).animate({
                top: "-=50px",
                opacity: 1
            }, 1000);
            $("#doughnutsbtn").delay(1600).animate({
                bottom: "+=10%",
                opacity: 1
            }, 1000);
            $("#animationprev").delay(3000).animate({
                left: "+=20%",
                opacity: 1
            }, 1000);
            $("#animationnext").delay(3000).animate({
                right: "+=20%",
                opacity: 1
            }, 1000);
            $(".adots").delay(2100).animate({
                bottom: "+=10%",
                opacity: 1
            }, 1000);
            $(".animation").addClass("flag")
        } else{
            $("#doughnuts").removeClass("hideright").removeClass("hideleft").removeClass("invisible").removeClass("display").addClass("*");
            $("#bowling").removeClass("display").removeClass("hideleft").removeClass("*").addClass("hideright").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#adot1").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        }
    }

    function showcontact(){
        $(".contact").removeClass("hidden").removeClass("invisible").addClass("active")
        if ($(".contact").hasClass("flag") == false){
            $("#contacth1").delay(1000).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#contactp").delay(1500).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#emailicon").delay(1700).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#emailp").delay(1700).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#phoneicon").delay(1800).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#phonep").delay(1800).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#adressicon").delay(1900).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#adressp").delay(1900).animate({
                top: "-=10%",
                opacity: 1
            }, 1000);
            $("#contactform").delay(2300).animate({
                opacity: 1
            }, 1000);
            $("#contactname input").delay(2300).animate({
                opacity: 1,
                left: "-=10%"
            }, 1000);
            $("#contactemail input").delay(2500).animate({
                opacity: 1,
                left: "-=10%"
            }, 1000);
            $("#contactsubject input").delay(2700).animate({
                opacity: 1,
                left: "-=10%"
            }, 1000);
            $("#contactmessage textarea").delay(2900).animate({
                opacity: 1,
                left: "-=10%"
            }, 1000);
            $("#contactsubmit input").delay(3100).animate({
                opacity: 1,
                left: "-=10%"
            }, 1000);
            
            $(".contact").addClass("flag")
        }
    }


    //About section plane animation functions
    function planeanimation1(){
        if ($("#plane1").hasClass("flag") == false){
            $("#plane1").addClass("flag");
            setTimeout(function(){
                $("#plane1").css("opacity","1");
                }, 3000);
            $("#plane1").delay(3000).animate({
                left: "+=21.5%",
                bottom: "-=2%"
            }, 3000);
            setTimeout(function(){
                $("#plane1").css("visibility","hidden");
              }, 6000);
        }
    }

    function planeanimation2(){
        if ($("#plane2").hasClass("flag") == false){
            $("#plane2").addClass("flag");
            setTimeout(function(){
            $("#plane2").css("opacity","1");
            }, 7000);
            $("#plane2").delay(8000).animate({
                right: "-=28%",
                bottom: "+=3%"
            }, 3500);
            setTimeout(function(){
                $("#plane2").css("visibility","hidden");
              }, 11500);
        }
    }

    //Contact section copy to clipboard functions
    new ClipboardJS('.btn');
    $("#emailp").hover(function(){
        $(this).css("cursor","pointer")
        $(this).css("opacity","0.7")
    },function(){
        $(this).css("opacity","1")
    });

    //Fancy Box
    $(".galleryimage, #aboutimg").hover(function(){
        $(".popup").fadeIn();
        },function(){
            $(".popup").fadeOut();
    });

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




    //Hide and Show Previous Section and Next Section buttons
    function shownextsection(){
        $("#nextsection").css("visibility","visible");
        $("#nextsection").animate({
            opacity: 1
        }, 500);
    }

    function showprevsection(){
        $("#prevsection").css("visibility","visible");
        $("#prevsection").animate({
            opacity: 1
        }, 500);
    }

    function hidenextsection(){
        $("#nextsection").animate({
            opacity: 0
        }, 500);
        setTimeout(function(){
            $("#nextsection").css("visibility","hidden");
          }, 700);
    }   

    function hideprevsection(){
        $("#prevsection").animate({
            opacity: 0
        }, 500);
        setTimeout(function(){
            $("#prevsection").css("visibility","hidden");
          }, 700);
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
        if ($("#weatherapp").hasClass("*") == true ){
            $("#weatherapp").removeClass("display").removeClass("hideleft").removeClass("*").addClass("hideright").addClass("invisible");
            $("#portfolio").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#resume").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display").addClass("*");
            $("#cdot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
        } else if ($("#portfolio").hasClass("*") == true ){
            $("#weatherapp").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display").addClass("*");
            $("#portfolio").removeClass("display").removeClass("hideleft").removeClass("*").addClass("hideright").addClass("invisible");
            $("#resume").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#cdot1").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        } else if ($("#resume").hasClass("*") == true ){
            $("#weatherapp").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#portfolio").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display").addClass("*");
            $("#resume").removeClass("display").removeClass("hideleft").removeClass("*").addClass("hideright").addClass("invisible");
            $("#cdot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        }
    }

    function codingnext(){
        if ($("#weatherapp").hasClass("*") == true ){
            $("#weatherapp").removeClass("display").removeClass("hideright").removeClass("*").addClass("hideleft").addClass("invisible");
            $("#portfolio").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display").addClass("*");
            $("#resume").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#cdot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        } else if ($("#portfolio").hasClass("*") == true ){
            $("#weatherapp").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#portfolio").removeClass("display").removeClass("hideright").removeClass("*").addClass("hideleft").addClass("invisible");
            $("#resume").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display").addClass("*");
            $("#cdot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
        } else if ($("#resume").hasClass("*") == true ){
            $("#weatherapp").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display").addClass("*");
            $("#portfolio").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#resume").removeClass("display").removeClass("hideright").removeClass("*").addClass("hideleft").addClass("invisible");
            $("#cdot1").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#cdot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#cdot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        }
    }



    //Coding Gallery Functions

    function animationprevious(){
        if ($("#doughnuts").hasClass("*") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideleft").removeClass("*").addClass("hideright").addClass("invisible");
            $("#bowling").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#flag").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display").addClass("*");
            $("#adot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
        } else if ($("#bowling").hasClass("*") == true ){
            $("#doughnuts").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display").addClass("*");
            $("#bowling").removeClass("display").removeClass("hideleft").removeClass("*").addClass("hideright").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#adot1").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        } else if ($("#concrete").hasClass("*") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#bowling").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display").addClass("*");
            $("#concrete").removeClass("display").removeClass("hideleft").removeClass("*").addClass("hideright").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#adot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        } else if ($("#flag").hasClass("*") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#bowling").removeClass("display").removeClass("hideleft").addClass("hideright").addClass("invisible");
            $("#concrete").removeClass("hideright").removeClass("hideleft").removeClass("invisible").addClass("display").addClass("*");
            $("#flag").removeClass("display").removeClass("hideleft").removeClass("*").addClass("hideright").addClass("invisible");
            $("#adot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        }
    }

    function animationnext(){
        if ($("#doughnuts").hasClass("*") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideright").removeClass("*").addClass("hideleft").addClass("invisible");
            $("#bowling").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display").addClass("*");
            $("#concrete").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#adot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        } else if ($("#bowling").hasClass("*") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#bowling").removeClass("display").removeClass("hideright").removeClass("*").addClass("hideleft").addClass("invisible");
            $("#concrete").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display").addClass("*");
            $("#flag").removeClass("display").addClass("hideleft").addClass("invisible");
            $("#adot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        } else if ($("#concrete").hasClass("*") == true ){
            $("#doughnuts").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#bowling").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideright").removeClass("*").addClass("hideleft").addClass("invisible");
            $("#flag").removeClass("hideleft").removeClass("invisible").addClass("display").addClass("*");
            $("#adot1").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
        } else if ($("#flag").hasClass("*") == true ){
            $("#doughnuts").removeClass("hideleft").removeClass("hideright").removeClass("invisible").addClass("display").addClass("*");
            $("#bowling").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#concrete").removeClass("display").removeClass("hideright").addClass("hideleft").addClass("invisible");
            $("#flag").removeClass("display").removeClass("hideright").removeClass("*").addClass("hideleft").addClass("invisible");
            $("#adot1").css("transform","scale(1.5)").css("opacity","1").css("transition",".5s ease-in-out");
            $("#adot2").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot3").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
            $("#adot4").css("transform","scale(1)").css("opacity","0.6").css("transition",".5s ease-in-out");
        }
    }

})(jQuery);