

/*HOVER STYLES*/

$(".section").hover(function(evt){

	window.$color = $(this).children("i").css("color");

	$(this).css("background-color", $color);
	$(this).children("i").css("color", "#fbfbfb");

}, function(){

	$(this).css("background-color", "#fbfbfb");
	$(this).children("i").css("color", $color);
});

/*AJAX REQUEST EVENT HANDLER*/

$(".section").click(function(evt){
	/*Reset .content*/
  $(".content").empty();  
  
  /*VARIABLES*/
	var url = "https://newsapi.org/v1/articles?source="
	var button = $(this).children(".title-text").text();
	var source = "";

	/*SWITCH*/
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

	url += source + "&apiKey=35ceb3b0db8c41388c640eee192df2a8";
		//url complete
  
	$(".section").removeClass("active"); //resets
	$(".title-text").hide();

	$(this).addClass("active");
	$(this).css("background-color", $color);
	$(this).children(".title-text").css("display", "inline-block");



	/*AJAX REQUEST & DOM PARSING*/

	$.getJSON(url, function(data){ //callback
    var content = "";
    var content = '<div class="card-columns">';
    
    $.each(data.articles , function(i,article) { //different height imgs
    if (i < 6) {
    content += '<a target="_blank" href="' + article.url + '">';
    content += '<div class="card card-number-' + (i+1) + '">'; 
      if (article.urlToImage === null) {
        content += '<img class="card-img-top img-fluid" src="img/default.jpg" alt="Card image cap">';
      } else {
        content += '<div class="overlay"><p class="overlay-text">Read More</p><img class="card-img-top img-fluid" src="' + article.urlToImage + '" alt="Card image cap"></div>';
      }
    content += '<div class="card-block">';
    content += '<h4 class="card-title">' + article.title + '</h4>';
    content += '<p class="card-text">' + article.description + '</p>';
    content += '</div></div>';
    content += '</a>'
    }//end if
      
    }); //end each
    
    content += '</div>';
    
    $(".content").append(content);
    
  }); //finish callback

  /*Overlay height set*/
   
});

/*$(".card").hover(function(event){
  $(".card .overlay-text").css("height", $(".card-img-top").height());
  });*/

/*hover outdated, use mousenter for overlay*/

$(document).on({
    mouseenter: function () {
        $(".card .overlay-text").css("height", $(".card-img-top").height());
    },
    mouseleave: function () {
        $(".card .overlay-text").css("height", $(".card-img-top").height());
    }
}, '.card');