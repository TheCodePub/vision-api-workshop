var resultDiv = $('.result');

/*
 *
 * Start doing things with the Vision API response here!
 *
 */
function handleVisionResult(result) {

  // Clear the results
  resultDiv.html('');

  if (result.faceAnnotations && result.faceAnnotations[0].joyLikelihood == "VERY_LIKELY") {
    resultDiv.html('<span class="emoji">😊</span>');
  }
}
