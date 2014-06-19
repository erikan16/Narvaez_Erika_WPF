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

//prompts the client to enter the purchase price of the item
var item = prompt("How much does the"+name+" cost?");
console.log(item);

//prompts the client to enter the amount of items wanting to purchase
var buying = prompt("How many are you needing to purchase?");
console.log(buying);

