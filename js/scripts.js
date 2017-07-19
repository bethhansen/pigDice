$(document).ready(function() {
  $("#game-action").submit(function(event) {
    event.preventDefault();

    var inputFirstPlayer = $("#firstPlayer").val();
    alert(inputFirstPlayer);
  })
});
