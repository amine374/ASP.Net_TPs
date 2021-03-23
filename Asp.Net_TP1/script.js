$(document).ready(function()
{
    $(".trois").children().css("color", "red");
    $(".btn").click(function()
    {
        $("li").children().css("color", "green");
    })

    $("div:even").css("background-color","red");

    $("input").css("background-color", "red");

    $('input[name="ch"]').on('click', function(){
        if ( $(this).is(':checked') ) {
            $('p[class="pp"]').show();
        } 
        else {
            $('p[class="pp"]').hide();
        }
    });

    $('input[name="bxP"]').on('click', function(){
        if ( $(this).is(':checked') ) {
            //$(".newText").text("hello world");
            $(".newText").text($(".tx").val());
        } 
        /*else {
            //$('p[class="pp"]').hide();
            //$(".newText").text("hello amine");
            $(".newText").text($("input:text").val());
        }*/
    });

})

/*function toggle(className, obj)
     {
        var $input = $(obj);
        if ($input.prop('checked')) $(className).hide();
        else $(className).show();
    }*/