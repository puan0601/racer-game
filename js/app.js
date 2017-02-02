//create players object constructor
function Player(name) {
  this.name = name;
  this.position = 0;
  this.key = [];
}
function generateRandomKey(player) {
  var tempkey = [];
  while (tempkey.length === 0) {
    var rando = Math.floor(Math.random() * (222 - 48 + 1) + 48); //(max - min + 1) + min    222, 48 is max,min for keyboard vals
    var stringRando = rando.toString();
    if (Object.keys(keyCodes).includes((stringRando))) {
      player.key.push(rando);
      tempkey.push(keyCodes[rando]);
    }
  }
  return tempkey;
}

function countDown(count){
   if(count > 0){
     var str = count.toString();
     $('#countdown').text(str);
     setTimeout(function() {countDown(count-1); },1000);
   } else {
     $('#countdown').text('GO');
     populateButton(player1);
     populateButton(player2);
   }
}

function populateButton(player) {
  if (win(player)) {
    $('#countdown').text(`${player.name} wins!!!`);

  }
  if (player === player1) {
    var position = player1.position;
    var move = generateRandomKey(player);
    $('#a'+position).text(move);
    player1.position++
  } else {
    var position = player2.position;
    var move = generateRandomKey(player);
    $('#b'+position).text(move);
    player2.position++
  }
}

function win(player) {
  if ((player.position === 6) && (player === player1)) {
    $(window).off();
    return player1;
  } else if ((player.position === 6) && (player === player2)) {
    $(window).off();
    return player2;
  }
}

// wait for the DOM to finish loading
$(document).ready(function() {

  $(window).keydown(function handleEvent(event) {
    var key = event.keyCode;
    var pos1 = player1.position - 1;
    var pos2 = player2.position - 1;

    if (key === player1.key[pos1]) {
      $('#a'+pos1).css('background', 'blue');
      populateButton(player1);
    } else if (key === player2.key[pos2]) {
      $('#b'+pos2).css('background', 'red');
      populateButton(player2);
    }
  });

  $('#reset').click(function resetHandler() {
    $('.box').text("");
    $('.box').css("background-image", 'url("https://i.imgur.com/gXjMHCz.jpg")');
    $('#countdown').text("");

  });

  $('#start').click(function buttonHandler() {
    //intentionally removed "var" to put players into global scope.
    player1 = new Player("Player 1");
    player2 = new Player("Player 2");
    countDown(3);

  });
});
