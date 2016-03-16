$('.js-drawer-hamburger').click(function() {
  $('.js-drawer').toggleClass('drawer--open');
})

var setDrawingState = function(node) {
  var state = node.getAttribute('value');

  // Background color
  $(document.body).attr('data-drawing', state);

  // Title
  $('.js-drawingtitle').text(state);

  // Hint text under the upload button
  $('.js-drawinghint').text(state.toLowerCase().slice(0, state.length-1));

  // Change API var
  API_TYPE = node.getAttribute('data-apiname');
}

var drawingoptions = $('.js-drawingoption');
// Event handler
drawingoptions.on('change', function() {
  setDrawingState(this);
})

// Initialisation
for (var i = 0; i < drawingoptions.length; i++) {
  if ($(drawingoptions[i]).prop('checked')) {
    setDrawingState(drawingoptions[i]);
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

$("#file-input").change(function(){
  gotFile();
});
