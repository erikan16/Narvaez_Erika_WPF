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

//prompt requesting loan amount 
var mortgage = prompt("How much did you purchase your home for?");
console.log(mortgage);

var number;

number = mortgage % 1 != 0 console.log("No comma was used!"): alert("Please re-enter with no comma!");

var interest = prompt("What is your current interst rate?");
console.log(interest);

var calcInterest = mortgage * (interest / 100);
console.log(calcInterest);

