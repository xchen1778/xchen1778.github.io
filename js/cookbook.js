$(function() {

    var $dish = $(".dish");
    var clicked = [];

    $dish.hover(function (e){
    var $target = $(e.target);
    $target.animate({
        "opacity":"0.6",
        },200);
    });

    $dish.mouseleave(function (e){
    var $target = $(e.target);
    $target.animate({
        "opacity":"1",
        },200);
    });

    $dish.click(function (e){
        var $target = $(e.target);
        if ($target.text() === clicked[0]) {
            return;
        }

        $('#wgss').addClass('hide');
        $('#qsctc').addClass('hide');
        $('#sc').addClass('hide');

        $dish.each(function(e) {
            $(this).animate({
                "font-size":"1em",
                "color":"#707070",
                "font-weight":"100",
                "margin-left":"0"
            },80);

            $(this).on('mouseenter',function (){
                $(this).animate({
                "opacity":"0.6",
                 },200);});

            $(this).on('mouseleave',function (){
                $(this).animate({
                "opacity":"1",
                },200);});
        });

        $target.animate({
            "opacity":"1",
            "font-size":"1.8em",
            "margin-left":"30px",
            "font-weight":"900",
            "color":"#343434"
            },150);
        clicked.pop();
        clicked.push($target.text());
        $target.off('mouseenter');
        $target.off('mouseleave');

        if($target.text() === 'Wedding Gift Spaghetti Sauce') {
            $('#wgss').removeClass('hide');
        }
        else if($target.text() === 'Quick Slow Cooker Turkey Chili') {
            $('#qsctc').removeClass('hide');
        }
        else if($target.text() === 'Spider Cupcakes') {
            $('#sc').removeClass('hide');
        }

    });



});



