/**
 * Erika Narvaez
 * June 15, 2014
 * Conditional Personal
 */
//alert to help calculate a coupon sale
alert("Hello! Let's help you calculate your sale.");
console.log("Hello! Let's help you calculate your sale.");

//prompts the user to enter what item they have a coupon for 
var name = prompt("What's the individual sale item? \nExample: chicken, cereal, or pasta ");
console.log(name);

//advises client that we have confirmed their input and we are going to get started
alert("Great! "+name+" is on sale");
console.log("Hi "+name+" let's get started!")

//prompts the client to enter the amount of coupons being used for the sale item
var numCoupon = prompt("How many coupons do you have for this particular item?");
console.log(numCoupon);

//setting up the condition
if(numCoupon > 1){
	//prompted used if condition is more than 1 coupon used
	var  moreThan1 = prompt("What is the total amount off with all coupons combined?")
	console.log(moreThan1);

