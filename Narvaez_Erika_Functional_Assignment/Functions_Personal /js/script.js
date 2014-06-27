/**
 * Erika Narvaez
 * June 26, 2014
 * Functional Personal
 */

alert("We are going to calculate your total purchase price!");
console.log("We are going to calculate your total purchase price!");

var shirt = prompt("How much did your shoes cost?");
console.log(shirt);

var pants = prompt("How much did your pants cost?");
console.log(pants);

var shoes = prompt("How much did your shoes cost?");
console.log(shoes);

var accesories = prompt("How much did your accesories cost?");
console.log(accesories);

var amountTotal = total(shirt, pants, shoes, accesories);
console.log(amountTotal);

function total(shirt, pants, shoes, accesories){
	
	var price = shirt + pants + shoes + accesories;
	
	return amountTotal;
}

alert("Your total amount is $"+amountTotal);
console.log("Your total amount is $"+amountTotal);

