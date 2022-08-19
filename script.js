var started = false;
var level = 1, score = 0;
var but = ['a', 'b', 'c', 'd'];
var words = ['green', 'red', 'red', 'blue'];
var randomm = "";
var count = 0;
var clickedstring = "";
var index = 0;
$(document).keydown(function (event) {

    if (!started) {
        start();
        $(".textt2").addClass("hide");
        started = true;
    }
    else {
        begin();
    }

});
function begin() {
    $(".textt2").removeClass("hide");
    $('.texttt').text("Level " + level);
    if (count == 0) newelement();
    count++;
}
var usercount = 0;


function newelement() {
    var r = Math.random() * 4;
    r = Math.floor(r) + 1;
    playsound(but[r - 1]);
    randomm += but[r - 1];
    index++;
    score++;
    if (score % 5 == 0) {
        level++;
        $('.texttt').text("Level " + level);
    }
    $('.textt2').text(words[r - 1]);
    $('.textt2').css("text-shadow", "0px 0px 10px" + words[r - 1]);
    $('.textt2').css("color", words[r - 1]);
}
var flag = 0;
$('.btn').on('click', function () {

    if (count== 0) {
        begin();
        count++;
    }
    else {
        var user = $(this).attr("id");
        clickedstring += user;

        playsound(user);
        flag++;
        if (clickedstring[flag - 1] == randomm[flag - 1]) {
            if (flag == randomm.length)
                check(clickedstring);
        }
        else {
            end();
        }
    }


});

function check(ss) {
    console.log(randomm);
    console.log(clickedstring);
    if (randomm == clickedstring) {
        clickedstring = "";
        flag = 0;
        setTimeout(function () {
            newelement();
        }, 500 * level);

    }
    else {
        end();

    }
}








function end() {

    $("body").removeClass("bg");
    $("body").addClass("red");
    $(".screen1").addClass("hide");
    $(".start-btn").removeClass("hide");
    $(".texttt").text("Your Score :" + score);
    $(".screen2").addClass("margin");
    $(".textt2").addClass("hide");
    playsound("wrong");
    flag = 0;
    count = 0;
    level = 1;
    randomm = "";
    clickedstring = "";
    started = false;
}
function start() {

    started = true;
    $("body").removeClass("red");
    $("body").addClass("bg");
    $(".screen1").removeClass("hide");
    $(".start-btn").addClass("hide");
    $(".textt2").removeClass("hide");
    $('.texttt').text(" Press Any Key To Start");
    $(".screen2").removeClass("margin");
    // begin();
}
function help() {
    var s = "Its a game of memorizing things. 1)Memorize the buttons which blinks 2)In every blink you have to memorize the path and click the buttons in the same order"
    alert(s);
}


function playsound(a) {
    var s = new Audio("sounds/" + a + ".mp3");
    $("." + a).addClass("animate");
    $("#" + a).fadeIn(100).fadeOut(100).fadeIn(100);
    setTimeout(function () {
        $("." + a).removeClass("animate");
    }, 600);
    s.play();
}
