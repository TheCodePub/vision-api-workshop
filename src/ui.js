$('.js-drawer-hamburger').click(function() {
  $('.js-drawer').toggleClass('drawer--open');
})

var setDrawingState = function(state) {
  // Background color
  $(document.body).attr('data-drawing', state);

  // Title
  $('.js-drawingtitle').text(state);
}

$('.js-drawingoption').on('change', function() {
  setDrawingState(this.getAttribute("value"));
})
