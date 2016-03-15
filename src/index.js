var resultDiv = $('.result');

/*
 *
 * Start doing things with the Vision API response here!
 *
 */
function handleVisionResult(result) {

  // Example : draw the IKEA logo
  resultDiv.html(
    '<div class="logo-ikea">' +
      '<span>Ikea</span>' +
    '</div>'
  )
}
