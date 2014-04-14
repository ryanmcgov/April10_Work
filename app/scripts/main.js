$(document).ready(function() {

	var emoteArray = ["Well Met", "Greetings Traveler", "Heh, greetings", "Hello", "I greet you", "Greetings", "My greetings", "The pleasure is mine", "Greetings friend"];
	var len = emoteArray.length;


	var emoteList = function(){
		event.preventDefault();
		var i;
		var $emote = $(".emoteText");

			for(i = 0; i < len; i++) {
				$emote.append("<li>" + emoteArray[i] + "</li>");
			}
			return $emote;
		
	}

$(".btn").click(emoteList);




});