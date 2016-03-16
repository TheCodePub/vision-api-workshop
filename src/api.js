var API_KEY = '<YOUR-API-KEY-HERE-PLEASE>';
var API_TYPE;  // Other possible types: https://cloud.google.com/vision/docs/concepts#types_of_vision_api_requests
var API_MAX_RESULTS = 10;

var gotFile = function() {
  var file    = $('input[type=file]').prop('files')[0];
  var reader  = new FileReader();

  // Retrieve data from the file input
  reader.addEventListener("load", function (e) {
    // render image preview.
    $('#image-preview').attr('src', e.target.result).toggle();

    var content = reader.result.split(',')[1];
    var data = { "requests":[
        {
          "image":{ "content": content },
          "features":[ { "type": API_TYPE, "maxResults": API_MAX_RESULTS } ]
        }
      ]
    };

    // Compute the sha1 of the image for the caching systeö
    var imageSha1 = sha1(content);

    // Check if the image is already cached
    // If yes, then call the callback function
    if (localStorage.getItem(imageSha1 + API_TYPE)) {
      var result = JSON.parse(localStorage.getItem(imageSha1 + API_TYPE))
      console.log("VISION API RESULT (cached):", result);
      return handleVisionResult(result);
    }

    // Show the UI loader
    startAnalyse();

    // Call Vision API
    $.ajax({
      type: "POST",
      contentType: 'application/json',
      url: 'https://vision.googleapis.com/v1/images:annotate?key=' + API_KEY ,
      data: JSON.stringify(data),
      success: function(result) {

        // Remove the UI loader
        stopAnalyse();
        // cache the image
        localStorage.setItem(imageSha1 + API_TYPE, JSON.stringify(result.responses[0]))

        // log the result and call the callback function
        console.log("VISION API RESULT: ", result.responses[0]);
        handleVisionResult(result.responses[0])
      },
      error: function(err) {
        stopAnalyse();
        console.log('Error in request : ', err);
      }
    })
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
