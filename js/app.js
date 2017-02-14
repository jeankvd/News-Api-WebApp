

/*HOVER STYLES*/

$(".section").hover(function(evt){

	window.$color = $(this).children("i").css("color"); //Get the color and store it on global var
  	$(this).addClass("hovered"); //add hover for transition
	$(this).css("background-color", $color); //Make $color the background color
	$(this).children("i").css("color", "#fbfbfb"); //Make the icon color white
  	$(this).children(".title-text").css("display", "inline-block"); //display the title of section

}, function(){ 							//Reverse all the styles just applied when hovered out
  	$(this).removeClass("hovered");
	$(this).css("background-color", "#fbfbfb");
	$(this).children("i").css("color", $color);
  	$(".title-text").hide();
});

/*AJAX REQUEST EVENT HANDLER*/

$(".section").click(function(evt){
	/*Reset .content*/
	$(this).removeClass("hovered");
	$(".title-text").hide();
  	$(".content").html("<h2 id='placeholder-text'>Searching, Please Wait.</h2>");  
  
  //Variables for the getAJAX request
	var url = "https://newsapi.org/v1/articles?source="
	var button = $(this).children(".title-text").text();
	var source = "";

	/*SWITCH*/ //To choose source
	switch(button.toLowerCase()) {
		case "science": //science
			source = "new-scientist";
			break;
		case "sports": //sports
			source = "espn";
			break;
		case "global": //World News
			source = "google-news";
			break;
		case "tech": //tech
			source = "hacker-news";
			break;
		case "business":
			source = "business-insider";
			break;
		case "politics": //politics
			source = "cnn";
			break;
		case "media": //pop culture
			source = "entertainment-weekly";
			break;
		case "gaming":
			source = "ign";
			break;
		case "others":
			source = "reddit-r-all";
			break;

	}

	url += source + "&apiKey=35ceb3b0db8c41388c640eee192df2a8"; //Final url for AJAX request
	
	/*AJAX REQUEST & DOM PARSING*/

	$.getJSON(url, function(data){ //callback
    var content = '<div class="card-columns">';
    
    $.each(data.articles , function(i,article) { //index is used for stylying
    if (i < 6) { //# of articles retrieved changes from source to source 
    content += '<a target="_blank" href="' + article.url + '">';
    content += '<div class="card card-number-' + (i+1) + '">'; 
      if (article.urlToImage === null) {
        content += '<img class="card-img-top img-fluid" src="img/default.png" alt="Card image cap">';
      } else {
        content += '<img class="card-img-top img-fluid" src="' + article.urlToImage + '" alt="Card image cap">';
      }
    content += '<div class="card-block">';
    content += '<h4 class="card-title">' + article.title + '</h4>';
    content += '<p class="card-text">' + article.description + '</p>';
    content += '</div></div>';
    content += '</a>'
    }//end if
      
    }); //end each
    
    content += '</div>';
    $(".content").empty(); //empty the "Searching.." Placeholder
    $(".content").append(content); //append the dom parsed json to content
    
  }); //finish callback

   
}); //Finish click function