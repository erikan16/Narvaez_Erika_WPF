/**
 * Erika Narvaez
 */
//Welcome's client and prompts to enter name
var name = prompt("Welcome to Ma's Pizza shop! What is your name?");
console.log(name);

//welcomes the user and continues on to the next step
alert("Hi " +name+ " we will start your order now!");

// Prompts user to enter a specific number of pizzas to purchase 
// Each costing $5  
var order = prompt("Our pizza's are $5 each. How many would you like to order?");
console.log(order);

//calculates each pizza purchased by the amount of each pizza
var total = order * 5;

//Alert a total amount of money for each pizza purchased
alert(name+" your current total for "+order+" pizza's comes out to be $"+total+".");
console.log(total);

// we will ask user to continue purchase
alert("Let's continue...")

// we will ask user to choose a specific pizza 
var flavor = prompt(name+" what kind of pizza would you like?");
console.log(flavor);

// prompts the user to enter their address
var address = prompt(name+" where would you like us to deliver these delicous pizza's to you?");
console.log(address);

//we will alert the user that we will now give them their complete order
alert(name+" we have an order of \n"+ order+" " +flavor+" pizza's with a total of $ "+total+" \n and will deliver them to "+address);
console.log(name+" we have an order of \n"+ order+" " +flavor+" pizza's with a total of $ "+total+" \n and will deliver them to "+address);
