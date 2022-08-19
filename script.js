
$(document).keydown(function(event){

    start();
    begin();

});

$('.btn').on("click", function(){

    end();

});
function end()
{
    $("body").removeClass("bg");
    $("body").addClass("red");
    $(".screen1").addClass("hide");
    $(".start-btn").removeClass("hide");
    $(".texttt").text("Your Score :");
    $(".screen2").addClass("margin");
}
function start()
{
    $("body").removeClass("red");
    $("body").addClass("bg");
    $(".screen1").removeClass("hide");
    $(".start-btn").addClass("hide");
    $('.texttt').text("Level : 1");
    $(".screen2").removeClass("margin");
}
function help()
{
    var s="Its a game of memorizing things. 1)Memorize the buttons which blinks 2)In every blink you have to memorize the path and click the buttons in the same order"
    alert(s);
}
function begin()
{
    var level=1;
    var a=[5,10,15,20,25,30];
    
}
