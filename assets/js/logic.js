var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

// $(document).ready(function () {
//   // alert("Yes!");

//   APIkey = "M3OKahukEnUxjI9OpTx8jCP1zHWQmm1N";
//   // var subject = ["you+the+real+mvp", "cats", "ricky+bobby"];
//   var queryURL = "https://api.giphy.com/v1/gifs/search?q=you+the+real+mvp&api_key=" + APIkey +"&limit=1";

//   $.ajax({
//       url: queryURL,
//       method: "GET"
//   }).then(function (response) {
//       console.log(response);

//       var results = response.data;
//       for (var i = 0; i < results.length; i++) {
//           console.log(results[i]);
//           var gifImg = $("<img>");
//           var gifDiv = $("<div>")
//           var animated = results[i].images.fixed_height_small.url;
//           var still = results[i].images.fixed_height_small_still.url;

//           gifImg.attr("src", animated);
//           gifImg.attr("data-still", still);
//           gifImg.attr("data-animate", animated);
//           gifImg.attr("data-state", "animated");
//           gifImg.addClass("gif-image");

//           gifDiv.append(gifImg);

//           $(".gifLanding").append(gifDiv);
//       }
//   });
// })
// $(document).on("click", ".gif-image", function () {

//   var state = $(this).attr("data-state");

//   if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//   } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
//   }
// });

