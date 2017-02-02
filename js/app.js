console.log('js loaded');
// wait for the DOM to finish loading
$(document).ready(function() {
  $('.box').click(function clickHandler() {
    $(this).css('background', 'blue');
});
});
