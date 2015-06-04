
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
        //load weather using your lat/lng coordinates. See _loadWeather()_ below
        var location = position.coords.latitude+','+position.coords.longitude; 
        // See latitute & longitude. Note, wait a few seconds
        console.log(location); 

        loadWeather(location);

    });
} else{
  loadWeather('Austin, TX');
}

//weather function
  var loadWeather = function(location){
    $.simpleWeather({
      location: location,
      woeid: '',
      unit: 'f',
      success: function(weather) {
          
          $('#page1 h2').text(weather.city + ', ' + weather.region);

          //hooks into page one temp
          $('#page1 b').text(weather.temp + weather.units.temp);

          //hooks into page one image
          $('#page1 div.weather-image').text("image");
    
        
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
  });
}
