
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
        //load weather using your lat/lng coordinates. See _loadWeather()_ below
        var location = position.coords.latitude+','+position.coords.longitude; 
        // See latitute & longitude. Note, wait a few seconds
        console.log(location); 

        loadWeather(location);

    });
}else{
  var zip = prompt("Please enter a zip", "zip code");
  loadWeather(zip);
}


//weather function
  var loadWeather = function(location){
    $.simpleWeather({
      location: location,
      woeid: '',
      unit: 'f',
      success: function(weather) {

          var zip = prompt("Please enter a zip", "zip code");
          
          $('#page1 h2').text(weather.city + ', ' + weather.region);

          //hooks into page one temp
          $('#page1 b').text(weather.temp + weather.units.temp);

          //hooks into page one image
          $('#page1 div.weather-image').append("<img id='theImg' style='height: 100%; position:relative' src='css/images/10.svg'/>");

      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
  });
  $.simpleWeather({
      location: 'Seattle WA',
      woeid: '',
      unit: 'f',
      success: function(weather) {
          
          $('#page3 h2').text(weather.city + ', ' + weather.region);

          //hooks into page one temp
          $('#page3 b').text(weather.temp + weather.units.temp);

          //hooks into page one image
          $('#page3 div.weather-image').text("image");

      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
  });
  $.simpleWeather({
      location: 'Omaha NE',
      woeid: '',
      unit: 'f',
      success: function(weather) {
          
          $('#page5 h2').text(weather.city + ', ' + weather.region);

          //hooks into page one temp
          $('#page5 b').text(weather.temp + weather.units.temp);

          //hooks into page one image
          $('#page5 div.weather-image').text("image");

      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
  });
    $.simpleWeather({
      location: 'Cheney WA',
      woeid: '',
      unit: 'f',
      success: function(weather) {
          
          $('#page4 h2').text(weather.city + ', ' + weather.region);

          //hooks into page one temp
          $('#page4 b').text(weather.temp + weather.units.temp);

          //hooks into page one image
          $('#page4 div.weather-image').text("image");


      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
  });
}




















