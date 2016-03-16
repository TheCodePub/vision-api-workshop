## Google Vision API workshop
Welcome to the workshop about image recognition using Google's all new shiny :sparkles:Vision:sparkles:  API!

### Getting started

1. In your terminal do: `git clone https://github.com/TheCodePub/vision-api-workshop.git`
1. Set the `API_KEY` value in  `src/api.js` (we will email the key to you before the workshop)
1. Open `index.html` in your favourite browser and start playing with the code!


### About the sample code

The sample code we provide will give you a kickstart to start sending requests to Vision API. You can [read more](https://cloud.google.com/vision/docs/concepts#types_of_vision_api_requests) about the different types of API calls that Vision supports.

### Workshop suggestions

Now it's time to play with the code! If you don't know what to do, maybe try to build one of these ideas:

* Try to "translate" a face into an emoji
* Use face detection and try to re-create/draw the face using a graphics library (e.g [RaphaëlJS](http://dmitrybaranovskiy.github.io/raphael/))
* Try to detect and frame faces in a picture. You can look at the data in boundingPoly in the result of [faceAnnotations](https://cloud.google.com/vision/reference/rest/v1/images/annotate#FaceAnnotation)
