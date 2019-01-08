// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/*global searchTerm*/
$(document).ready(function(){
    $("button").click(function() {
      var searchTerm = $("#srch-term").val();
      callGiphyAPIWithSearchTerm(searchTerm);
      console.log(searchTerm);
    });
    
  function callGiphyAPIWithSearchTerm(searchTerm) {
   var giphyURL = giphyURLWithSearchTerm(searchTerm);
   console.log(searchTerm);
    $.ajax({
      url: giphyURL,
      method: "GET",
      success: function(response) {
        var url = response.data[0].images.original.url;
        appendImageToGallery(url);
      },
    });
  }
  
  function appendImageToGallery(srcURL) {
    $("#oneThirtyone").html("");
    $('#oneThirtyone').append('<img src=' + srcURL + '>');
  }
  
  function giphyURLWithSearchTerm(searchTerm) {
    var giphyURL = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    console.log(giphyURL);
    console.log(searchTerm);
    return giphyURL;
  }

});


// WRITE A CLICK HANDLER HERE
  /*
    1. click handler function
    2. get the typed input from the search input box
    3. call the functions below!
  */
  
// write a function that will return a url for the giphy API with

// the searchTerm provided in the parameters

// write a function that will append an <img> to the div with class="gallery"

// using the URL provided in the parameters

// use $.ajax to call the giphy api with the given search term from the parameters.
 
// get the first image url from the ajax response
// use appendImageToGallery to put the image onto the screen