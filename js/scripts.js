//This constructor represents initial dice values.
function LetsPlay () {
  this.gameDie = new Dice();
  this.player1 = new Player();
  // console.log(gameDie);

  function Dice () {
    sides = 1;
  }
  Dice.prototype.rollDice = function () {
    return Math.floor(Math.random() * 6) + 1;
  }

function Player (userName) {
  this.userName = userName;
  this.turnScore = 0;
  this.totalScore = 0;
  this.isTurn =false;
}

Player.prototype.addItUp = function(input) {
  this.turnScore += input;
}

  // Dice.prototype.rollDice = function(){
  //   return Math.floor(Math.random() * 6) + 1;
    // this.diceOne = Math.floor(Math.random() * 6) + 1;
    //
    // alert(this.diceOne);
  // }

  // Dice.prototype.gameResult = function(){
  //   if(this.diceOne === 1){
  //     return this.turnScore = 0;
  //     // this.isTurn =false;
  //   }
  // }
}


// User Interface Logic
$(document).ready(function() {
  var newGame = new LetsPlay();

  $("#game-action").submit(function(event) {
    event.preventDefault();

    var thisRoll = newGame.gameDie.rollDice();

    newGame.player1.addItUp(thisRoll);
    // console.log(thisRoll);
    // if (thisRoll === 1) {
    //   alert('hello');
    // }

    // var inputFirstPlayer = $("#firstPlayer").val();
    var inputFirstPlayerName = $("#FirstPlayerName").val();

    // var newDice = new Dice();
    // newDice.gameResult();

    // $(".player1Result").text(newDice.turnScore);
    $("#showResult").show();
  });
});
