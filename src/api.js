var API_KEY = '<YOUR-API-KEY-HERE-PLEASE>';
var API_TYPE;  // Other possible types: https://cloud.google.com/vision/docs/concepts#types_of_vision_api_requests
var API_MAX_RESULTS = 10;

var gotFile = function() {
  var file    = $('input[type=file]').prop('files')[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    var content = reader.result.split(',')[1];
    var data = { "requests":[
        {
          "image":{ "content": content },
          "features":[ { "type": API_TYPE, "maxResults": API_MAX_RESULTS } ]
        }
      ]
    };

    var imageSha1 = sha1(content);

    // If the image is already cached
    if (localStorage.getItem(imageSha1 + API_TYPE)) {
      var result = JSON.parse(localStorage.getItem(imageSha1 + API_TYPE))
      console.log("VISION API RESULT (cached):", result);
      return handleVisionResult(result)
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
        stopAnalyse();
        localStorage.setItem(imageSha1 + API_TYPE, JSON.stringify(result.responses[0]))
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
