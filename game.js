var boxes = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var playerChoice = [];
var level = 0;
var flag = false;

$("#startBtn").click(function(event) {
    nextSequance();
    flag = true;
    $(this).removeClass("visible");
});

$(".btn").click(function() {
    playerChoice.push($(this).attr("id"));

    checkAnswer(playerChoice.length - 1);
    animation("#" + $(this).attr("id"), "pressed");
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === playerChoice[currentLevel]) {
        if (gamePattern.length === playerChoice.length) {
            setTimeout(function() {
                nextSequance();
                $("#score").text(level - 1);
            }, 1000);
        }
    } else {
        $("#level-title").text("Game Over, Press Restart");
        $("#startBtn").addClass("visible");
        $("#startBtn").text("Restart");
        animation("body", "game-over");
        startOver();
    }
}

function nextSequance() {
    playerChoice = [];
    ++level;
    $("#level-title").text("Level " + level);

    var randColor = Math.round(Math.random() * 3);
    gamePattern.push(boxes[randColor]);

    $("#" + boxes[randColor]).fadeOut(100).fadeIn(100);
}

function animation(component, className) {
    $(component).addClass(className);
    setTimeout(function() {
        $(component).removeClass(className);
    }, 100);
}

function startOver() {
    gamePattern = [];
    level = 0;
    flag = false;
}