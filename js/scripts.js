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

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    $(".dice").css("display", "none");
  $("#score-1").text("0");
  $("#score-2").text("0");
  $("#current-score-1").text("0");
  $("#current-score-2").text("0");
  $("#player-1").text("Player 1");
  $("#player-2").text("Player 2");
  $(".player-panel-1").removeClass("winner");
  $(".player-panel-2").removeClass("winner");
  $(".player-panel-1").removeClass("active");
  $(".player-panel-2").removeClass("active");
  $(".player-panel-1").addClass("active");
}