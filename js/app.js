jQuery(document).ready(function(){
	$(".section").hover(function(evt){

		window.$color = $(this).children("i").css("color");

		$(this).css("background-color", $color);
		$(this).children("i").css("color", "#fbfbfb");

	}, function(){

		$(this).css("background-color", "#fbfbfb");
		$(this).children("i").css("color", $color);
	});

	$(".section").click(function(evt){
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

		url += source + "&apiKey=35ceb3b0db8c41388c640eee192df2a8?jsoncallback=?";
			//url complete

		var newsRequest = function(response){ //calback

			console.log(response);

		};

		$(".section").removeClass("active"); //resets
		$(".title-text").hide();

		$(this).addClass("active");
		$(this).css("background-color", $color);
		$(this).children(".title-text").css("display", "inline-block");



		/*AJAX REQUEST*/

		$.getJSON(url, newsRequest());


	});
});