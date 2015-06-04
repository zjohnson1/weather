


$.simpleWeather({
    location: 'Austin, TX',
    woeid: '',
    unit: 'f',
    success: function(weather) {
              $('#page1 h2').text("zackary");

        //hooks into page one temp
        $('#page1 b').text("this is the temp");

        //hooks into page one image
        $('#page1 div.weather-image').text("image");
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });