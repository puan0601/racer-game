console.log('js loaded');
// wait for the DOM to finish loading
$(document).ready(function() {
  $('.p1').click(function clickHandler() {
    $(this).css('background', 'blue');
  });
  $('.p2').click(function clickHandler() {
    $(this).css('background', 'red');
  });
});
