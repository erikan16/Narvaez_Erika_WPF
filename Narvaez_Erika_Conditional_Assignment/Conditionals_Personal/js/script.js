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
console.log("Great! "+name+" is on sale")

//prompts the client to enter the purchase price of the item
var item = prompt("How much does the "+name+" cost?");
console.log(item);

//prompts the client to enter the amount of items wanting to purchase
var buying = prompt("How many are you needing to purchase?");
console.log(buying);

//prompts the client to enter the amount of coupons being used for the sale item
var numCoupon = prompt("How many coupons do you have for this particular item?");
console.log(numCoupon);


//setting up the condition
if(numCoupon > 1){
	//prompted used if condition is more than 1 coupon used
	var  moreThan1 = prompt("What is the total amount off with all coupons combined?")
	console.log(moreThan1);
	 
	 // calculation for sale price with more than 1 cp 
	 var price = parseInt(item * buying - moreThan1);
	 console.log(price);
	 
	 //alert shows total amount customer will have to pay after coupons
	 alert("After using "+numCoupon+" coupons you will only pay $"+price+" dollars for "+buying+" "+name);
	 
}else{
	//prompted used if condition is only 1 coupon
	var  just1 = prompt("What is the total amount of the coupon?")
	console.log(just1);
	
	// calculation for sale price with only 1 cp 
	 var totalPrice = parseInt(item * buying - just1);
	 console.log(totalPrice);
	 
	 //alert shows total amount customer will have to pay after coupons
	 alert("After using "+numCoupon+" coupon you will only pay $"+totalPrice+" dollars for "+buying+" "+name);
} 
