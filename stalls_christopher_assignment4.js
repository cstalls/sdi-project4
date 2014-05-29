//alert("JavaScript works!");

//Christopher Stalls
//SDI 1405
//Project 4
//Functions

//Format number to use 2 decimal places
function convertMoney (itemTotal, tax)
{
	var total;
	//calculate total
	total = itemTotal * tax;
	
	return total.tofixed(2);
}

//Return string number as actual number
function realNumber (numberPassed)
{
	var stringNumber = numberPassed;
	//change string to number
	parseInt(stringNumber);
	
	return stringNumber;
}

//Find if string is part of URL
function findURL (url)
{
	var stringURL = url;
	var urlPosition; 
	var isURL;
	
	//get index of http should start at 0
	urlPosition = stringURL.indexof("http");
	
	//check if url is true/false
	if (urlPosition >= 0)
	{
		isURL = true;
	} else {
		isURL = false;
	}
	
	return isURL;
}

//title case a string
function capString (someString)
{
	var initString = someString;
	
	initString = "stallschris";
	
	var lastName = initString.substr(0, 6);
	var firstName = initString.substr(6, 10);
	
	var fullName = lastName.substr(0,1).toUpperCase() + lastName.substr(1) + " " + firstName.substr(0, 1).toUpperCase() + firstName.substr(1);
	
	return fullName;
	
}

//compare two dates
function compareDates ()
{
	var bDayOne = new Date("13 Jan 1989");
	var bDayTwo = new Date("12 June 1988");
	
	var firstMsg = "Birthday one is older than birthday two.";
	var secondMsg = "Birthday two is older than birthday one.";
	
	if (bDayOne < bDayTwo)
	{
		return firstMsg;
	} else {
		return secondMsg;
	}
	
}

var dates = compareDates();

console.log(dates);