//create players object constructor
function createPlayer(name) {
  this.name = name;
  this.counter = 0;
}

//start game
function startGame() {
  var player1 = new createPlayer("P1");
  var player2 = new createPlayer("P2");
  var moves = generateRandomMoves();
  setTimeout(countDown, 1000);
  populateButton(moves);
  // populateButton();


}

function generateRandomMoves() {
  var moves = [];
  while (moves.length < 12) {
    var rando = Math.floor(Math.random() * (222 - 48 + 1) + 48); //(max - min + 1) + min    222, 48 is max,min for keyboard vals
    var stringRando = rando.toString();
    if (Object.keys(keyCodes).includes((stringRando))) {
      moves.push(keyCodes[rando]);
    }
  }
  return moves;
}


//not quite working, only prints final "GO!", not actual countdown
function countDown(count){
   if(count > 0){
     var str = count.toString();
     $('#countdown').text(str);
     setTimeout(function() {countDown(count-1); },1000);
   } else {
     $('#countdown').text("GO!");
   }
}

function populateButton(moves) {
  var nextMove = moves.shift();
  var idx = 0
  $('#'+idx).text(nextMove);
  idx++
  if (idx === 12) {
    return
  }
}



//movement controller

//win logic
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

  $(window).keydown(function handleEvent(event) {
    var key = event.keyCode;
    console.log(key);
  });

  $('#start').click(function buttonHandler() {
    startGame();
  });

  $('.p2').click(function clickHandler() {
    $(this).css('background', 'red');
  });
});
