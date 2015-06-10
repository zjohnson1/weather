
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

          //$('.five-day').remove();
          $('#page6 .five-day').append("<ul><li><span style='font-family: georgia, palatino;'>"+weather.forecast[0].day+"</span><ul><li>"+weather.forecast[0].text + ' High ' + weather.forecast[0].high + ', Low ' + weather.forecast[0].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[1].day+"</span><ul><li>"+weather.forecast[1].text + ' High ' + weather.forecast[1].high + ', Low ' + weather.forecast[1].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[2].day+"</span><ul><li>"+weather.forecast[2].text + ' High ' + weather.forecast[2].high + ', Low ' + weather.forecast[2].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[3].day+"</span><ul><li>"+weather.forecast[3].text + ' High ' + weather.forecast[3].high + ', Low ' + weather.forecast[3].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[4].day+"</span><ul><li>"+weather.forecast[4].text + ' High ' + weather.forecast[4].high + ', Low ' + weather.forecast[4].low+"</li></ul></li></ul>");

          $('#page6 h3.wind').text("Wind "+wind.speed+ units.speed + " "+ wind.direction);


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

          //hooks into page image
        $('#page3 div.weather-image').append("<img id='theImg' style='height: 100%; width: 100%; position:absolute; top:5px' src='"+wCode+"'/>");

          $('.current-city b').text(weather.city + " 5 day forcast");

          //$('.five-day').remove();
          $('.five-day').append("<ul><li><span style='font-family: georgia, palatino;'>"+weather.forecast[0].day+"</span><ul><li>"+weather.forecast[0].text + ' High ' + weather.forecast[0].high + ', Low ' + weather.forecast[0].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[1].day+"</span><ul><li>"+weather.forecast[1].text + ' High ' + weather.forecast[1].high + ', Low ' + weather.forecast[1].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[2].day+"</span><ul><li>"+weather.forecast[2].text + ' High ' + weather.forecast[2].high + ', Low ' + weather.forecast[2].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[3].day+"</span><ul><li>"+weather.forecast[3].text + ' High ' + weather.forecast[3].high + ', Low ' + weather.forecast[3].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[4].day+"</span><ul><li>"+weather.forecast[4].text + ' High ' + weather.forecast[4].high + ', Low ' + weather.forecast[4].low+"</li></ul></li></ul>");

          $('h3.wind').text("Wind "+wind.speed+ units.speed + " "+ wind.direction);

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

          $('.current-city b').text(weather.city + " 5 day forcast");

          //$('.five-day').remove();
          $('.five-day').append("<ul><li><span style='font-family: georgia, palatino;'>"+weather.forecast[0].day+"</span><ul><li>"+weather.forecast[0].text + ' High ' + weather.forecast[0].high + ', Low ' + weather.forecast[0].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[1].day+"</span><ul><li>"+weather.forecast[1].text + ' High ' + weather.forecast[1].high + ', Low ' + weather.forecast[1].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[2].day+"</span><ul><li>"+weather.forecast[2].text + ' High ' + weather.forecast[2].high + ', Low ' + weather.forecast[2].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[3].day+"</span><ul><li>"+weather.forecast[3].text + ' High ' + weather.forecast[3].high + ', Low ' + weather.forecast[3].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[4].day+"</span><ul><li>"+weather.forecast[4].text + ' High ' + weather.forecast[4].high + ', Low ' + weather.forecast[4].low+"</li></ul></li></ul>");

          $('h3.wind').text("Wind "+wind.speed+ units.speed + " "+ wind.direction);

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

          $('.current-city b').text(weather.city + " 5 day forcast");

          //$('.five-day').remove();
          $('#page8 .five-day').append("<ul><li><span style='font-family: georgia, palatino;'>"+weather.forecast[0].day+"</span><ul><li>"+weather.forecast[0].text + ' High ' + weather.forecast[0].high + ', Low ' + weather.forecast[0].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[1].day+"</span><ul><li>"+weather.forecast[1].text + ' High ' + weather.forecast[1].high + ', Low ' + weather.forecast[1].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[2].day+"</span><ul><li>"+weather.forecast[2].text + ' High ' + weather.forecast[2].high + ', Low ' + weather.forecast[2].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[3].day+"</span><ul><li>"+weather.forecast[3].text + ' High ' + weather.forecast[3].high + ', Low ' + weather.forecast[3].low+"</li></ul></li><li><span style='font-family: georgia, palatino;'>"+weather.forecast[4].day+"</span><ul><li>"+weather.forecast[4].text + ' High ' + weather.forecast[4].high + ', Low ' + weather.forecast[4].low+"</li></ul></li></ul>");

          $('#page8 h3.wind').text("Wind "+wind.speed+ units.speed + " "+ wind.direction);

      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
  });
}




















