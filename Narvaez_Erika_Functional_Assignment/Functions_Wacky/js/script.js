/**
 * Erika Narvaez
 * June 26, 2014
 * Functional Wacky
 */

//prompts the user their name 
var name = prompt("What is your name?");
console.log(name);

//prompts the user to determine if they want to play a game 
var setUp = prompt("Hi "+name+" do you want to play a game!");
console.log(setUp);

//if statement will be decided if user specifies "yes"
if(setUp === "yes"){
	alert("Great! Let's go!");
		
		// Question asking user capital for State in quiz
		var quest1 = prompt("What is the name of Florida's capitol?");
		console.log(quest1);

		// if statement will hold correct answer
		if(quest1 === "Tallahassee"){
		
		alert("Great Job!");
		console.log("Great Job!");
	
	}else {
		 
		//alert advises the user they have entered the incorrect answer 
		alert("Oooo! Sorry you got that one wrong!");
		console.log("Oooo! Sorry you got that one wrong!");
		
	}	

	// Question asking user capital for State in quiz
	var quest2 = prompt("What is the name of New York's capitol?");
		console.log(quest2);

	// if statement will hold correct answer
	if(quest2 === "Albany"){
		
		//alert advises the user they have entered the correct answer 
		alert("Great Job!");
		console.log("Great Job!");
	
	}else {
		
		//alert advises the user they have entered the incorrect answer 
		alert("Oooo! Sorry you got that one wrong!");
		console.log("Oooo! Sorry you got that one wrong!");
		
	}
		// Question asking user capital for State in quiz
		var quest3 = prompt("What is the name of Hawaii's capitol?");
		console.log(quest3);

		// if statement will hold correct answer
		if(quest3 === "Honolulu"){
			
		//alert advises the user they have entered the correct answer 
		alert("Great Job!");
		console.log("Great Job!");	
	
	}else {
		
		//alert advises the user they have entered the incorrect answer 
		alert("Oooo! Sorry you got that one wrong!");
		console.log("Oooo! Sorry you got that one wrong!");
	
}
	// Question asking user capital for State in quiz
	var quest4 = prompt("What is the name of Illinois capitol?");
		console.log(quest4);

	// if statement will hold correct answer
	if(quest4 === "Springfield"){
		 
		//alert advises the user they have entered the correct answer 
		alert("Great Job!");
		console.log("Great Job!");
		
	}else {
		 
		//alert advises the user they have entered the incorrect answer 
		alert("Oooo! Sorry you got that one wrong!");
		console.log("Oooo! Sorry you got that one wrong!");
			
}
		// Question asking user capital for State in quiz
		var quest5 = prompt("What is the capitol of West Virginia?");
		console.log(quest5);

	// if statement will hold correct answer
	if(quest5 === "Charleston"){
		 
		//alert advises the user they have entered the correct answer 
		alert("Great Job!");
		console.log("Great Job!");
	
	}else {
		 
		//alert advises the user they have entered the incorrect answer 
		alert("Oooo! Sorry you got that one wrong!");
		console.log("Oooo! Sorry you got that one wrong!");
}	

		//alerts the user they did a great job trying to play the game
		alert("Thanks for playing "+name+" you did great!");
		console.log("Thanks for playing "+name+" you did great!");

// else if statement is used if user states that they don't wish to play the game 		
}else if(setUp === "no"){
	
// alerts the user game is closing 
alert("Awww man! That's okay maybe next time.");

}

