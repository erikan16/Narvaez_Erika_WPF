/**
 * Erika Narvaez
 * June 26, 2014
 * Functional Personal
 */
// alert user what prompts are going to be 
alert("We are going to calculate your total purchase price!");
console.log("We are going to calculate your total purchase price!");

//prompts user to enter a purchase amount
var shirt = prompt("How much did your shirt cost?");
console.log(shirt);

//makes user enter a number 
while(isNaN(shirt) || ""){
		shirt = prompt("Please enter a number.");
}
//prompts user to enter a purchase amount
var pants = prompt("How much did your pants cost?");
console.log(pants);

//makes user enter a number
while(isNaN(pants) || ""){
	pants = prompt("Please enter a number.");
}
//prompts user to enter a purchase amount		
var shoes = prompt("How much did your shoes cost?");
console.log(shoes);

//makes user enter a number
while (isNaN(shoes) || ""){
	shoes = prompt("Please enter a number.");
}
//prompts user to enter a purchase amount
var accesories = prompt("How much did your accesories cost?");
console.log(accesories);

//makes user enter a number
while (isNaN(accesories) || ""){
	accesories = prompt("Please enter a number");	
}
// var result = total(shirt, pants, shoes, accesories);
// console.log(result);
console.log(typeof(shirt));

//function for purchases
function total(a, b, c, d){
	a = parseInt(a);
	b = parseInt(b);
	c = parseInt(c);
	d = parseInt(d);
	
	var price = a + b + c + d;
	
	return price;
}

//variable for function 
var finalprice = total(shirt, pants, shoes, accesories);

//alerts user final price
alert("Your total amount is $"+finalprice);
console.log("Your total amount is $"+finalprice);
document.write(finalprice);

