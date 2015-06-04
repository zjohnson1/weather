

//weather function
var loadWeather = function(){
  $.simpleWeather({
    location: 'Austin, TX',
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