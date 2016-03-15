$('.js-drawer-hamburger').click(function() {
  $('.js-drawer').toggleClass('drawer--open');
})

var setDrawingState = function(state) {
  // Background color
  $(document.body).attr('data-drawing', state);

  // Title
  $('.js-drawingtitle').text(state);

  $('.js-drawinghint').text(state.toLowerCase().slice(0, state.length-1))
}

var drawingoptions = $('.js-drawingoption');
// Event handler
drawingoptions.on('change', function() {
  setDrawingState(this.getAttribute('value'));
})

// Initialisation
for (var i = 0; i < drawingoptions.length; i++) {
  if ($(drawingoptions[i]).prop('checked')) {
    setDrawingState(drawingoptions[i].getAttribute('value'));
  }
}

$('button.input').click(function() {
  $('input[type="file"]').trigger('click');
})

var startAnalyse = function() {
  $('.loader').addClass("loader--load");
}

var stopAnalyse = function() {
  $('.loader').removeClass("loader--load");
}
