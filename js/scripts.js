        $('#page1 h2').text("zackary");

        //hooks into page one temp
        $('#page1 b').text("this is the temp");

        //hooks into page one image
        $('#page1 div.weather-image').text("image");




 var loadWeather = function() { 
  $.simpleWeather({

      //create function called testResults which take in a div takes the form in the div
      //and assigns the value wich should be a number zip code to the variable zip
      /*function testResults (div) {

        var zip = div.input.value;
      
      }*/
      

      
      location: 'Austin, TX',
      
      
      success: function(weather) {
        //hide all of my icons
        

        //hooks into page one title
        $('#page1 h2').text("zackary");

        //hooks into page one temp
        $('#page1 b').text("this is the temp");

        //hooks into page one image
        $('#page1 div.weather-image').text("image");

        

        console.log(weather);

      },
      
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
      
    });
  };