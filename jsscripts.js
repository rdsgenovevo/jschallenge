function search(beer) {
    beer=beer.replace(/\s+/g,"_");
    var url = "https://api.punkapi.com/v2/beers";

    $.ajax({
      url: url,
      type: "get",
      data: { 
        beer_name: beer
      },
      success: function(response) {
          console.log(response);
          
          $("#result1").empty();
          
          $.each( response, function( key, value ) {
               $("#result1").append("<br />"+key + ": " + value.name);
            });
          
      },
      error: function(xhr) {
        console.log("error");
          
        $("#result1").empty();
      }
    });
  }

function searchByFood(food) {
    food=food.replace(/\s+/g,"_");
    var url = "https://api.punkapi.com/v2/beers";

    $.ajax({
      url: url,
      type: "get",
      data: { 
        food: food
      },
      success: function(response) {
          console.log(response);
          
          $("#result2").empty();
          
          $.each( response, function( key, value ) {
               $("#result2").append("<br />"+key + ": " + value.name);
            });
          
      },
      error: function(xhr) {
        console.log("error");
          
        $("#result2").empty();
      }
    });
  }

function searchByDate(date) {
    var url = "https://api.punkapi.com/v2/beers";

    $.ajax({
      url: url,
      type: "get",
      data: { 
        brewed_before: date
      },
      success: function(response) {
          console.log(response);
          
          $("#result3").empty();
          
          $.each( response, function( key, value ) {
               $("#result3").append("<br />"+key + ": " + value.name);
            });
          
      },
      error: function(xhr) {
        console.log("error");
          
        $("#result3").empty();
      }
    });
  }