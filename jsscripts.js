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
          
          $("#result").empty();
          
          $.each( response, function( key, value ) {
               $("#result").append("<br />"+key + ": " + value.name);
            });
          
      },
      error: function(xhr) {
        console.log("error");
          
        $("#result").empty();
      }
    });
  }