/**
 * Erika Narvaez
 * June 15, 2014
 * Conditional Industry
 */
//welcome client with prompt
alert("Hi and welcome to our virtual website build calculator.");
console.log("Hi and welcome to our virtual website build calculator.");

//allows client to enter name
var name = prompt("What is your name?");
console.log(name);

//advises client that their order is about to begin
alert("Hi "+name+" let's get started!");
console.log("Hi "+name+" let's get started!")

//prompts the client to decide if they want to keep going with order
var interest = prompt("Are you interested in a interface redesign?");
console.log(interest);

//setting up the condition
if(interest == 'yes'){
	//prompted used if condition is true
	alert("Great! Let's get started!")
	console.log("Great! Let's get started!");
	
	var cost = prompt("We charge $300 for a interface redesign per site. How many sites are you needing to update?");
	console.log(cost);

	var amount = 300 * cost;

	alert(name+"the total cost for "+cost+" websites will be $"+amount);
	console.log(name+"the total cost for "+cost+" websites will be $"+amount);

}else{
	//prompted used if client enters false
	alert("Awww Man we can't help you... come back again later.");
	console.log("Awww Man we can't help you... come back again later.");
} 

