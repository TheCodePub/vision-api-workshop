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

// function drawSquaresOnImages(result){
//   if (!result.faceAnnotations.length) {
//     // no faces detected :(
//     return;
//   }
//   // create an empty image the same size as the image we uploaded
//   var paper = Raphael(
//     $('#image-preview').position().left,
//     $('#image-preview').position().top,
//     $('#image-preview').width(),
//     $('#image-preview').height()
//   );
//
//   //loop through the detected images
//   for (var i = 0; i < result.faceAnnotations.length; i++) {
//     var rectangle;
//     facePositions = result.faceAnnotations[i].boundingPoly.vertices;
//
//     // these are the coordinates of the corners of the face. e.g. {'x' : 10, 'y' : 20}
//     leftTop = facePositions[0]
//     rightTop = facePositions[1]
//     rightBottom = facePositions[2]
//     leftBottom = facePositions[3];
//
//     width = rightTop.x - leftTop.x;
//     height = leftBottom.y - leftTop.y;
//
//     //place a square on the image on the coordinates we got
//     rectangle = paper.rect(leftTop.x, leftTop.y, width, height);
//     rectangle.attr({'stroke': '#ccff15', 'stroke-width' : '3'})
//   }
// }
