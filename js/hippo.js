$(function() {

    var $nav = $(".nav");
    var clicked = [];
    var aboutTrigger = $("#about").offset().top - 30,
        musicTrigger = $("#music").offset().top - 80,
        tourTrigger = $("#tour").offset().top - 150;

    $(window).scroll(function() {
    if ($(window).scrollTop() > 151) {
        $("#top").removeClass("hide");
    } else {
        $("#top").addClass("hide");
    }

    if($(window).scrollTop() > aboutTrigger-50){
        $("#pink").animate({
            "left":"400px",
            "top":"400px"
        },1200);
    }
    
    if($(window).scrollTop() > musicTrigger-50){
        $("#blue").animate({
            "left":"250px",
            "top":"1100px"
        },1200);
    }

    if($(window).scrollTop() > tourTrigger-50){
        $("#yellow").animate({
            "left":"650px",
            "top":"1900px"
        },1200);
    }

    });


    $nav.hover(function (e){
    var $target = $(e.target);
    $target.animate({
        "opacity":"0.6",
        },200);
    });

    $nav.mouseleave(function (e){
    var $target = $(e.target);
    $target.animate({
        "opacity":"1",
        },200);
    });

    $nav.click(function (e){
        var $target = $(e.target);
        if ($target.text() === clicked[0]) {
            return;
        }

        reset();

        $target.css({
                "text-decoration":"line-through",
                "opacity":"0.6"
            });
        clicked.pop();
        clicked.push($target.text());
        $target.off('mouseenter');
        $target.off('mouseleave');

        if ($target.text() === "ABOUT") {
            $('body').animate({
            scrollTop: aboutTrigger
            }, 500);
        } 
        else if ($target.text() === "MUSIC") {
            $('body').animate({
            scrollTop: musicTrigger
            }, 500);
        }
        else if ($target.text() === "TOUR") {
            $('body').animate({
            scrollTop: tourTrigger + 200
            }, 500);
        }

    });


    $("#top").click(function(){
    $('body').animate({
            scrollTop: 0
        });
    reset();
    
    });


    function reset() {
            $nav.each(function(e) {
            $(this).css({
                "text-decoration":"none",
                "opacity":"1"
            });

            $(this).on('mouseenter',function (){
                $(this).animate({
                "opacity":"0.6",
                 },200);});

            $(this).on('mouseleave',function (){
                $(this).animate({
                "opacity":"1",
                },200);});
        });
    }


});
