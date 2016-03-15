var API_KEY = '<YOUR-API-KEY-HERE-PLEASE>';
var API_TYPE = "FACE_DETECTION";  // Other possible types: https://cloud.google.com/vision/docs/concepts#types_of_vision_api_requests
var API_MAX_RESULTS = 10;

function gotFile() {
  var file    = $('input[type=file]').prop('files')[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    var content = reader.result.split(',')[1];
    var data = { "requests":[
        {
          "image":{ "content": content },
          "features":[ { "type": API_TYPE, "maxResults": API_MAX_RESULTS } ]
        }
      ]}
    $.ajax({
      type: "POST",
      contentType: 'application/json',
      url: 'https://vision.googleapis.com/v1/images:annotate?key=' + API_KEY ,
      data: JSON.stringify(data),
      success: handleVisionResult
    })
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

/*
 *
 * Start doing things with the Vision API response here!
 *
 */
function handleVisionResult(result) {
    console.log('SUCCESS:', result)
}
