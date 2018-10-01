// //BUSINESS LOGIC

var scores, roundScore, activePlayer, dice, gamePlaying;
init();
function nextPlayer() {
  //next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  $("#current-1").text("0");
  $("#current-2").text("0");

  $(".player-0-panel").toggleClass("active");
  $(".player-1-panel").toggleClass("active");

  $(".dice").css("display", "none");
}

$(".btn-new").click(init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  $(".dice").css("display", "none");
  $("#score-1").text("0");
  $("#score-2").text("0");
  $("#current-1").text("0");
  $("#current-2").text("0");
  $("#name-1").text("Player 1");
  $("#name-2").text("Player 2");
  $(".player-0-panel").removeClass("winner");
  $(".player-1-panel").removeClass("winner");
  $(".player-0-panel").removeClass("active");
  $(".player-1-panel").removeClass("active");
  $(".player-0-panel").addClass("active");
}

//USER INTERFACE

$(".btn-roll-dice").click(function() {
  if (gamePlaying) {
    dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM = $(".dice");
    diceDOM.css("display", "block");
    diceDOM.attr("src", "img/dice-" + dice + ".png");

    if (dice !== 1) {
      roundScore += dice;
      $("#current-" + activePlayer).text(roundScore);
    } else {
      nextPlayer();
    }
  }
});
$(".btn-hold").click(function() {
  0;
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    $("#score-" + activePlayer).text(scores[activePlayer]);
    //check if player won the game
    if (scores[activePlayer] >= 50) {
      $("#name-" + activePlayer).text("Winner!");
      $(".dice").css("display", "none");
      $(".player-" + activePlayer + "-panel").addClass("winner");
      $(".player-" + activePlayer + "-panel").addClass("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});
