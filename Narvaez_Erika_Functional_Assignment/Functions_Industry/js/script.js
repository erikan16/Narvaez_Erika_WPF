/**
 * Erika Narvaez
 * June 26, 2014
 * Functional Industry
 */

//alert the user what the next prompt is for 
alert("Office Party and you are the organizer! \nWe need to buy sandwiches for everyone!");
console.log("Office Party and you are the organizer! \nWe need to buy sandwiches for everyone!");

//prompts the user to enter a choice 
var sandwich = prompt("Do you prefer your sandwiches on pita bread or regular bread?");
console.log("sandwich");

// if else 
if(sandwich === "pita"){
	
		alert("Great Pita bread it is!");
		console.log("Great Pita bread it is!");
		
}else{
		var bread = prompt("Okay! We have white, wheat, honey wheat, or potato bread?");
	    console.log(bread);
	    		
		alert("Great! I love "+bread+" too!");
		console.log("Great! I love "+bread+" too!");
}

var people = prompt("How many people are going to attend your office party?");
console.log(people);

var results = (people > 20) ? alert("Wow that's a great party!") : alert("That's great!");
console.log(results);

alert("We charge $3.00 for each sandwich. \n Your order is coming right up!");
console.log("We charge $3.00 for each sandwich. \n Your order is coming right up!")		

var price = people * 3;
console.log(price); 

alert("Your order for "+people+" sandwiches is $"+price);
console.log("Your order for "+people+" sandwiches is $"+price);

