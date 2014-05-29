//alert("JavaScript works!");

//Christopher Stalls
//SDI 1405
//Project 4
//Functions

//Format number to use 2 decimal places
function convertMoney (itemTotal, tax)
{
	var total;
	total = itemTotal * tax;
	
	return total.tofixed(2);
}

//Return string number as actual number
function realNumber (numberPassed)
{
	var stringNumber = numberPassed;
	parseInt(stringNumber);
	
	return stringNumber;
}