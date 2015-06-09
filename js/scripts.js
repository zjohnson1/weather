
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
          
          
          $('#page1 h2').text(weather.city + ', ' + weather.region);

          //hooks into page one temp
          $('#page1 b').text(weather.temp + weather.units.temp);

          //give var wCode the right image with code
          var wCode;
          if(weather.code == 4 || (weather.code >= 37 && weather.code <=39) || weather.code == 47){
            wCode = "css/images/15.svg";
          }else if(weather.code == 11 || weather.code == 12 || weather.code == 35){
            wCode = "css/images/18.svg";
          }else if(weather.code == 24){
            wCode = "css/images/6.svg";
          }else if(weather.code >= 27 && weather.code <= 30){
            wCode = "css/images/8.svg";
          }else{
            wCode = "css/images/2.svg";
          }


          //hooks into page one image
          $('#page1 div.weather-image').append("<img id='theImg' style='height: 100%; width: 100%; position:absolute; top:5px' src='"+wCode+"'/>");

          $('.current-city b').text(weather.city + " 5 day forcast");

          //$('.five-day').text("");
          //$('.five-day').append("<ul><ul><li>this works</li></ul><ul><li>still working</li></u</ul>");




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

          var wCode;
          if(weather.code == 4 || (weather.code >= 37 && weather.code <=39) || weather.code == 47){
            wCode = "css/images/15.svg";
          }else if(weather.code == 11 || weather.code == 12 || weather.code == 35){
            wCode = "css/images/18.svg";
          }else if(weather.code == 24){
            wCode = "css/images/6.svg";
          }else if(weather.code >= 27 && weather.code <= 30){
            wCode = "css/images/8.svg";
          }else{
            wCode = "css/images/2.svg";
          }

          //hooks into page one image
        $('#page3 div.weather-image').append("<img id='theImg' style='height: 100%; width: 100%; position:absolute; top:5px' src='"+wCode+"'/>");

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


          var wCode;
          if(weather.code == 4 || (weather.code >= 37 && weather.code <=39) || weather.code == 47){
            wCode = "css/images/15.svg";
          }else if(weather.code == 11 || weather.code == 12 || weather.code == 35){
            wCode = "css/images/18.svg";
          }else if(weather.code == 24){
            wCode = "css/images/6.svg";
          }else if(weather.code >= 27 && weather.code <= 30){
            wCode = "css/images/8.svg";
          }else{
            wCode = "css/images/2.svg";
          }

          //hooks into page one image
        $('#page5 div.weather-image').append("<img id='theImg' style='height: 100%; width: 100%; position:absolute; top:5px' src='"+wCode+"'/>");


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


          var wCode;
          if(weather.code == 4 || (weather.code >= 37 && weather.code <=39) || weather.code == 47){
            wCode = "css/images/15.svg";
          }else if(weather.code == 11 || weather.code == 12 || weather.code == 35){
            wCode = "css/images/18.svg";
          }else if(weather.code == 24){
            wCode = "css/images/6.svg";
          }else if(weather.code >= 27 && weather.code <= 30){
            wCode = "css/images/8.svg";
          }else{
            wCode = "css/images/2.svg";
          }

          //hooks into page one image
        $('#page4 div.weather-image').append("<img id='theImg' style='height: 100%; width: 100%; position:absolute; top:5px' src='"+wCode+"'/>");



      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
  });
}




















