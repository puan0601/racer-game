console.log('js loaded');
// wait for the DOM to finish loading
$(document).ready(function() {
  $('.p1').click(function clickHandler() {
    $(this).css('background', 'blue');
  });

  $('.p2').click(function clickHandler() {
    $(this).css('background', 'red');
  });

  $('#reset').click(function resetHandler() {
    $('.box').html("");
  });

  //create players object constructor
  function Player(name) {
    this.name = name;
    this.counter = 0;
  }

  //start game
  function startGame() {
    var player1 = new Player("P1");
    var player2 = new Player("P2");
    console.log(player1);
    console.log(player2);
  }
  startGame();
  //movement controller

  //win logic
});
