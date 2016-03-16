## Google Vision API workshop
Welcome to the workshop about image recognition using Google's all new shiny :sparkles:Vision:sparkles:  API!

### Getting started

1. In your terminal do: `git clone https://github.com/TheCodePub/vision-api-workshop.git`
1. Set the `API_KEY` value in  `src/api.js` (we will email the key to you before the workshop)
1. Open `index.html` in your favourite browser and start playing with the code!


### About the sample code

The sample code we provide will give you a kickstart to start sending requests to Vision API. You can [read more](https://cloud.google.com/vision/docs/concepts#types_of_vision_api_requests) about the different types of API calls that Vision supports.

### Workshop suggestions

Now it's time to play with the code! If you don't know what to do, maybe try to build one of these ideas

#### Suggestion #1: Face to emoji

Try to "translate" a face into an emoji. If you look at faceAnnotations you could do something like this to begin with:

    if (result.faceAnnotations && result.faceAnnotations[0].joyLikelihood == "VERY_LIKELY") {
        resultDiv.html('<span class="emoji">😊</span>');
    }

Here we just check the first face data (`result.faceAnnotations[0]`). Vision API can actually return data for multiple faces in the picture. Maybe generate emojis for all of the faces in the picture?

#### Suggestion #2: Frame all the faces in a picture

Use face detection and [boundingPoly](https://cloud.google.com/vision/reference/rest/v1/images/annotate#FaceAnnotation) and to add squares around peoples faces like this:

![Image of Yaktocat](http://cloudmesh.github.io/introduction_to_cloud_computing/_images/face-detection-people.jpg)

#### Suggestion #3: Drawing faces (advanced)
Try to recreate/draw a picture of a face using canvas or other graphics library. The [RaphaëlJS](http://dmitrybaranovskiy.github.io/raphael/) library is included in this repo so you can use that straight away if you want to. This can get as complex as you want!

 * You can look at `joyLikelyHood` and include a happy/sad mouth
 * You can look at 
