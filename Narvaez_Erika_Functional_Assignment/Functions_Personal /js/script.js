/**
 * Erika Narvaez
 * June 26, 2014
 * Functional Personal
 */

alert("We are going to calculate your total purchase price!");
console.log("We are going to calculate your total purchase price!");


var shirt = prompt("How much did your shirt cost?");
console.log(shirt);
while(isNaN(shirt) || ""){
		shirt = prompt("Please enter a number.");
}

var pants = prompt("How much did your pants cost?");
console.log(pants);

while(isNaN(pants) || ""){
	pants = prompt("Please enter a number.");
}
		
var shoes = prompt("How much did your shoes cost?");
console.log(shoes);

while (isNaN(shoes) || ""){
	shoes = prompt("Please enter a number.");
}

var accesories = prompt("How much did your accesories cost?");
console.log(accesories);

while (isNaN(accesories) || ""){
	accesories = prompt("Please enter a number");	
}
var result = price(shirt, pants, shoes, accesories);
console.log(amountTotal);

function total(shirt, pants, shoes, accesories){
	
	var price = parseInt(shirtBuy + pantsBuy + shoesBuy + accesoriesBuy);
	
	return price;
}

alert("Your total amount is $"+result);
console.log("Your total amount is $"+result);

