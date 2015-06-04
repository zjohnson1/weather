

//hooks into page one title
$('#page1 h2').text("zackary");

//hooks into page one temp
$('#page1 b').text("this is the temp");

//hooks into page one image
$('#page1 div.weather-image').text("image");



/*
if (navigator.geolocation) {
    // Yes! Show button
    $('.getGeolocation').show(); 
  } else {
    // No. Hide button
    $('.getGeolocation').hide();
  }

$('.getGeolocation').on('click', function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
});
 
  

 var loadWeather = function(location) { 
  $.simpleWeather({

      //create function called testResults which take in a div takes the form in the div
      //and assigns the value wich should be a number zip code to the variable zip
      /*function testResults (div) {

        var zip = div.input.value;
      
      }
      $('#page1.city').text("zackary");

      
      location: location,
      
      
      success: function(weather) {
        //hide all of my icon
        console.log(weather);

      },
      
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
      
    });
  };


*/








