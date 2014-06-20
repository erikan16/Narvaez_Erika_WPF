/**
 * Erika Narvaez
 * June 15, 2014
 * Conditionals Wacky
 */

//alert before prompt begins
alert("Let's calculate your mortage interest!");

// receives users information
var name = prompt("What is your name?");
console.log(name);


var comma = false;

while(comma == false){
	//prompt requesting loan amount 
	var mortgage = prompt("How much did you purchase your home for?");
	console.log(mortgage);
	
	// searches for comma within entered prompt
	comma = mortgage.search(',');
	
	//valadates if comma is in prompt return to 
	comma = (comma == -1) ? true : false;
	console.log("Comma exists: " + comma);
	
	if(comma == true){
		// insert continuation code
	} else {
		//alerts to only enter a number variable
		alert("Please enter a number with no commas");
		console.log("Please a number with no commas");
	}
};

//prompts the client to enter their interest rate 
var interest = prompt("What is your current interst rate?");
console.log(interest);

//calculates your total interest rate 
var calcInterest = mortgage * (interest / 100);
console.log(calcInterest);

alert(name+" your "+interest+"% interest rate comes out to be $"+calcInterest+" dollars.");
console.log(name+" your "+interest+"% interest rate comes out to be $"+calcInterest+" dollars.");

