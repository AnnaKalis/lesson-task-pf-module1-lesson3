// Question 1

var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");}

// Question 2

var age = 11;
var minimumAge = "13";

if (age >= minimumAge) {
    console.log("Test passed");}
    else {
        console.log("Test failed");}
    
// Question 3

var income = "11.050";
var maximumIncome = "13.075";

if (income<= maximumIncome) {console.log("Test passed");}
else {console.log("Test failed");}

// Question 4

var colour = "blue";

if (colour === "orange") {
    console.log("This colour is a bit rubbish");
} else {console.log("This colour is nice");}

// Question 5

var invoicePaid = false;

if (invoicePaid === false) { console.log("Not paid");}
else {console.log("Paid");}

// Question 6

var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {console.log("You lose again");}

// Question 7

var dayOfTheWeek = 2;

switch (dayOfTheWeek) { case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day number");}