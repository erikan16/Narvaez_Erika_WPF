/**
 * Erika Narvaez
 */
//We are informing the user what we are going to calculate 
alert("We need to track the amount of time we spend daily on our projects to determine our daily pay.")

// We will prompt the user to track the time of each project
var x = prompt("How much time did you spend on X project today?");
console.log(x);

// We will prompt the user to track the time of each project
var y = prompt("How much time did you spend on Y project today?");
console.log(y);

// we will prompt the user to enter an hourly fee
var fee = prompt("Enter your hourly fee.");
console.log(fee);


//calculates the time spent working times the hourly fee to determine the daily pay
var day = parseInt(x) + parseInt(y) * fee;// adding time worked + hourly fee
console.log(day);

// this will display their daily profit amount
alert("You have earned today $ " + day + " dollars.");
console.log("You have earned today $ " + day + " dollars.");


