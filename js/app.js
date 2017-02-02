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

  //create players objects

  //start game

  //movement controller

  //win logic
});
