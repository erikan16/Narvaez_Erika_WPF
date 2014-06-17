
/**
 * Erika Narvaez
 */
// notifying the user what we are going to calculate 
alert("We are going to calcuate how much money you spend on gas daily driving to work.");

// prompts user to enter the amount of $ they pay to fill their tank
var gas = prompt("Please enter how much you spend filling up your tank");
console.log(gas);

//prompts the user to identify how many times do they actually have to fill their tank
var fill = prompt("How many times in the month do you fill your gas tank?");
console.log(fill);

//prompts the user to state how many times they actually drive to work 

// average amount user pumps gas
var work = prompt("Please enter how many times during the week you drive to work");
console.log(work);

// calculate the amount of money they use driving to work
var total = Math.round (gas * fill / work / 7);//this is going to give us our daily usage of gas 
console.log(total);

//alert shows their calculation
alert("The amount you spend on gas is $ " + total + " dollars daily");// displays the amount in the box
console.log("The amount you spend on gas is $ " + total + " dollars daily");







