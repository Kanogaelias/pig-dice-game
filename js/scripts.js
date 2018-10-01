//BUSINESS LOGIC


var scores, roundScore, activePlayer, dice, gameplaying;
init();

function nextPlayer(){
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    $("#current-score-1").text("0");
    $("#current-score-2").text("0");

    $(".player-panel-1").toggleClass("active");
    $(".player-panel-2").toggleClass("active");

    $(".dice").css("display", "none");
}

$("btn-new").click(init);

