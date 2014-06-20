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
	var mortgage = prompt("How much did you purchase your home for?");
	console.log(mortgage);
	
	comma = mortgage.search(',');
	
	comma = (comma == -1) ? true : false;
	console.log("Comma exists: " + comma);
	
	if(comma == true){
		// insert continuation code
	} else {
		alert("Please enter a number with no commas");
	}
};

//prompt requesting loan amount 


// mortgage = replace(/[^0-9]/g, '') ? console.log("No comma was used!"): alert("Please re-enter with no comma!");

var interest = prompt("What is your current interst rate?");
console.log(interest);

var calcInterest = mortgage * (interest / 100);
console.log(calcInterest);

