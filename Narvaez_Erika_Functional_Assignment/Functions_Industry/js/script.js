/**
 * Erika Narvaez
 * June 26, 2014
 * Functional Industry
 */

//alert the user what the next prompt is for 
alert("Office Party and you are the organizer! \nWe need to buy sandwiches for everyone!");
console.log("Office Party and you are the organizer! \nWe need to buy sandwiches for everyone!");

var sandwich = prompt("Do you prefer your sandwiches on pita bread or regular bread?");
console.log("sandwich");

if(sandwich === "pita"){
	
		alert("Great Pita bread it is!");
		console.log("Great Pita bread it is!");
		
}else{
		var bread = prompt("Okay! We have white, wheat, honey wheat, or potato bread?");
	    console.log(bread);
	    		
		alert("Great! I love "+bread+" too!");
		console.log("Great! I love "+bread+" too!");
}

var meat = prompt("Would you like lettuce and tomatoes?");
console.log(meat);






