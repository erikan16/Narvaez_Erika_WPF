/**
 * Erika Narvaez
 * June 15, 2014
 * Conditional Industry
 */
//welcome client with prompt
alert("Hi and welcome to our virtual website build calculator.");

//allows client to enter name
var name = prompt("What is your name?");
console.log(name);

//advises client that their order is about to begin
alert("Hi "+name+" let's get started!")

//prompts the client to decide if they want to keep going with order
var interest = prompt("Are you interested in a interface redesign?");
console.log(interest);

//setting up the condition
if(interest == 'yes'){
	//prompted used if condition is true
	 alert("Great! Let's get started!")
	console.log("Great! Let's get started!");
}else{
	//prompted used if client enters false
	alert("Awww Man we can't help you... come back again later.");
	console.log("Awww Man we can't help you... come back again later.");
} 


