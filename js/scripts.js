//This constructor represents initial dice values.
function LetsPlay () {
  this.gameDie = new Dice();
  this.player1 = new Player();
  // console.log(gameDie);

  function Dice () {
    sides = 1;
    this.dieOne = 1;
    this.dieValue = 0;
    this.dieOne = Math.floor(Math.random() * 6) + 1;
  }

  var newDice = new Dice();

  // Dice.prototype.rollDice = function () {
  //   this.dieOne = parseInt(Math.floor(Math.random() * 6) + 1);
  //   // alert(this.dieOne);
  //   return this.dieOne;
  // }

function Player (userName) {
  this.userName = userName;
  this.turnScore = 0;
  this.totalScore = 0;
  this.isTurn =false;
}

Player.prototype.gameResult = function() {
  // this.gameDie;
  Dice();
  alert(this.dieOne);
  if(this.dieOne === 1){
    alert("hi");
  return this.dieValue = 0;
} else {
  return this.dieValue += this.dieOne;
  }
}
}

// User Interface Logic
$(document).ready(function() {
  var newGame = new LetsPlay();

  $("#game-action").submit(function(event) {
    event.preventDefault();

    // var thisRoll = newGame.gameDie.rollDice();
    var thisGameResult = newGame.player1.gameResult();
    // newGame.player1.gameResult(thisGameResult);
    // console.log(thisRoll);

    // var inputFirstPlayer = $("#firstPlayer").val();
    var inputFirstPlayerName = $("#FirstPlayerName").val();

    $(".player1Result").text(thisGameResult);
    $("#showResult").show();
  });
});
