

  //hooks into page one title
  $('#page1 h2').text("zackary");

  //hooks into page one temp
  $('#page1 b').text("this is the temp");

  //hooks into page one image
  $('#page1 div.weather-image').text("image");
 
  

 var loadWeather = function(location) { 
  $.simpleWeather({


  //hooks into page one title
  $('#page1 h2').text("zackary");

  //hooks into page one temp
  $('#page1 b').text("this is the temp");

  //hooks into page one image
  $('#page1 div.weather-image').text("image");

      
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











