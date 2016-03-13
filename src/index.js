var API_KEY = '<YOUR-API-KEY-HERE-PLEASE>';
var API_TYPE = "FACE_DETECTION";
var API_MAX_RESULTS = 10;

$('button.input').click(function() {
  $('input[type="file"]').trigger('click');
})

function gotFile() {
  var file    = $('input[type=file]').prop('files')[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function (e) {
    $('#image-preview').attr('src', e.target.result).toggle();

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
  data = result.responses[0].faceAnnotations[0];
  likely = ['LIKELY', 'VERY_LIKELY'];

  // excuse the verbose code 😁
  if ($.inArray(data.angerLikelihood, likely) != -1) {
    emojiVersionOfImage ='😡';
  } else if ($.inArray(data.joyLikelihood, likely) != -1) {
    emojiVersionOfImage ='😀';
  } else if ($.inArray(data.sorrowLikelihood, likely) != -1) {
    emojiVersionOfImage ='😟';
  } else if ($.inArray(data.surpriseLikelihood, likely) != -1) {
    emojiVersionOfImage ='😮';
  }
  $('#result').html(emojiVersionOfImage);

}
