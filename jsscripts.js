function search(name, by) {
    name=name.replace(/\s+/g,"_");
    var url = "https://api.punkapi.com/v2/beers";
    var num = 0;
    var par = "";
    
    //console.log(name);
    //console.log(by);
    
    switch(by) {
      case 'name':
        num = 1;
        par = "beer_name";
        break;
      case 'food':
        num = 2;
        par = "food";
        break;
      case 'date':
        num = 3;
        par = "brewed_before";
        break;  
      default:
            //error
    }
    
    var data = {};
    data[par] = name;
    
    //console.log(data);
    
    $.ajax({
      url: url,
      type: "get",
      data: data,
      success: function(response) {
          //console.log(response);
          
          $("#result" + num).empty();
          
          $.each( response, function( key, value ) {
               $("#result" + num).append("<br />"+key + ": " + value.name);
            });
          
      },
      error: function(xhr) {
        //console.log("not found");
          
        $("#result" + num).empty();
      }
    });
    
  }