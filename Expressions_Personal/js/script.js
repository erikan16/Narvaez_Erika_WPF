// Erika Narvaez
var gas = prompt("We are going to calcuate how much money you spend on gas daily driving to work. Please enter how much you spend filling up your tank");
var fill = prompt("How many times in the month do you fill your gas tank?");
var work = prompt("Please enter how many times during the week you drive to work");

var total = Math.round (gas * fill / work / 7);//this is going to give us our daily usage of gas 


alert("The amount you spend on gas is $ " + total + " dollars daily");// displays the amount in the box

//console.log(total)//prints out the information
