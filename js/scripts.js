//This constructor represents initial dice values.
function Dice() {
  this.diceOne = 1;
  this.diceValue = 0;
}

//This constructor represents player name
function Player(name){
  this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
  this.isTurn =false;
  this.Dice = new Dice();
}

Dice.prototype.rollDice = function(){
  this.diceOne = Math.floor(Math.random() * 6) + 1;
  alert(this.diceOne);
}



// User Interface Logic
$(document).ready(function() {
  $("#game-action").submit(function(event) {
    event.preventDefault();

    var inputFirstPlayer = $("#firstPlayer").val();
    var inputFirstPlayerName = $("FirstPlayerName").val();
    alert(inputFirstPlayerName);
    var newPlayer = new Player(inputFirstPlayerName);


    $(".player1Result").text("Hi");
    $("#showResult").show();
  });
});
