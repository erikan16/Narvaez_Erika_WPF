// Erika Narvaez
// Here you can add what time was spent on each project
var x = prompt("We need to track the amount of time we spend daily on our projects to bill our clients accordingly. How much time did you spend on X project today?");
var y = prompt("How much time did you spend on Y project today?"); // Here you can add what time was spent on each project
var fee = prompt("Enter your hourly fee.");// this will calculate your hourly fee

var day = parseInt(x) + parseInt(y) * fee;// adding time worked + hourly fee


alert("You have earned today $ " + day + " dollars");// displays the amount in the box

//console.log(total)//prints out the information

