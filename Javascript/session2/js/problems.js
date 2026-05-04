/*

//q1
var name = window.prompt("Enter Your Name ");
var age = +window.prompt("Enter Your Age ");
var yearOfBirth = 2026 - age;
var message = "Hello " + name + "! You are " + age + " years old and you were born around " + yearOfBirth;
console.log(message)

*/

/*
//q2
var egp = window.prompt("Enter Amount");
var usd = 47.22;
var eur = 54.35;
var gbp = 61.95;
var EgpToUSD = egp / usd;
var EgpToEUR = egp / eur;
var EgpToGBP = egp / gbp;
console.log(egp + " EGP = $" + EgpToUSD.toFixed(2) + " USD, €" + EgpToEUR.toFixed(2) + " EUR, £" + EgpToGBP.toFixed(2) + " GBP");
*/

/*
//q3
var num = +window.prompt("Enter a number");
if (num % 2 === 0) {
    console.log(num + " is an even number")
}
else {
    console.log(num + " is an odd number")
}

*/

/*
//q4 
var hour = window.prompt("Enter an hour");
if (hour >= 0 && hour <= 11) {
    console.log("Good morning!");
}
else if (hour >= 12 && hour <= 17){
    console.log("Good afternoon!");
}
else{
    console.log("Good evening!");
}
*/

/*
//q5
var score1 = +window.prompt("Enter Score1");
var score2 = +window.prompt("Enter Score2");
var score3 = +window.prompt("Enter Score3");
var avg = (score1 + score2 + score3) / 3;
var passOrFail;
if (avg >= 50) {
    passOrFail = 'Pass';
    console.log("Average: " + avg.toFixed(2) + ", Status: " + passOrFail);
}
else {
    passOrFail = 'Fail';
    console.log("Average: " + avg.toFixed(2) + ", Status: " + passOrFail);
}

*/

/*
//q6
var num1 = +window.prompt("Enter Number1 ");
var num2 = +window.prompt("Enter Number2 ");
var op = window.prompt("Enter Operator ");
switch (op) {
    case '+':
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
    case '-':
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
    case '*':
        console.log(num1 + " * " + num2 + " = " + (num1 * num2));
        break;
    case '/':
        console.log(num1 + " / " + num2 + " = " + (num1 / num2));
        break;
}
*/

/*
//q7 
var num = +window.prompt("Enter a number");
var output = '';
for (var i = 1; i <= 10; i++) {

    console.log(num + " x " + i + " = " + (num * i) + "\n");
}
*/

/*
//q8 
var output = '';
for (var i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        output += i;
    }
}
console.log(output);
*/

/*
//q9
var factOf5 = 1;
for (var i = 5; i >= 1; i--) {
    factOf5 *= i;
}
console.log(factOf5);
*/

/*
//q10
var n = 1;
var nMultin = 1;
while (nMultin < 50) {

    n++;
    nMultin = n * n;

}
console.log(n);
*/

/*
//q11
var num1 = +window.prompt("Enter number1 ");
var num2 = +window.prompt("Enter number2 ");
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log("After Swapping: num1=" + num1 + ", num2=" + num2);
*/

/*
//q12
var age = +window.prompt("Enter Your Age ");
var hasTicket = Boolean(window.prompt("Do you have a ticket ?") === 'yes');
if (age >= 18 || hasTicket) {
    console.log("Access granted: true");
}
else {
    console.log("Access granted: false");
}
*/

/*
//q13
var a = +window.prompt("Enter number1");
var b = +window.prompt("Enter number2");
var c = +window.prompt("Enter number3");
if (a > b) {
    if (a > c) {
        //a is largest
        console.log("Largest number is: " + a);
    } else {
        //c is largest
        console.log("Largest number is: " + c);
    }
}
else {
    if (b > c) {
        //b is largest
        console.log("Largest number is: " + b);
    }
    else {
        //c is largest
        console.log("Largest number is: " + c);
    }
}

*/

/*
//q14  Salary Calculator
var hours = window.prompt("Enter total hours you worked this week ?");
var rate = window.prompt("Enter the salary rate per day");
const reqularWeekHours = 40;
const overtimeWorkHour = hours - reqularWeekHours;
const rateIncrement = 1.5;
var regular, overtime, total;
if (overtimeWorkHour > 0) {
    regular = reqularWeekHours * rate;
    overtime = overtimeWorkHour * rateIncrement * rate;

}
else {

    regular = hours * rate;
    overtime = 0;

}
total = regular + overtime;
console.log("Regular: $" + regular + ", Overtime: $" + overtime + ", Total: $" + total);
*/

/*
//q15 BMI Calculator
var weight = +window.prompt("Enter  Your Weight ");
var height = +window.prompt("Enter  Your Height ");
const BMI = (weight) / (height * height);
var bmiStatus = '';
if (BMI < 18 / 5) {
    bmiStatus = 'Underweight';
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    bmiStatus = 'Normal weight';
}
else if (BMI >= 25 && BMI <= 29.9) {
    bmiStatus = 'Overweight';
}
else {
    bmiStatus = 'Obese ';
}
console.log("BMI: " + BMI.toFixed(2) + " - " + bmiStatus)
*/


/*

//q16 Shopping cart total 

var amount = +window.prompt("Enter an amount");
var subtotal, discount, tax, final;
subtotal = amount;
discount = 0;
tax = subtotal * 0.10;
if (amount > 100) {
    discount = subtotal * 0.05;
}
final = (subtotal + tax) - discount;
console.log("Subtotal: $" + subtotal + ", Tax: $" + tax + ", Discount: $" + discount + ", Final: $" + final);
*/

/*
//q17 ATM Simulator

var operation = window.prompt("get operation (1:Balance, 2:Withdraw, 3:Deposit)");

switch (operation) {
    case '1':
        var currentBalance = +window.prompt("Enter a Balance");
        console.log("Your balance is: $" + currentBalance);
        break;
    case '2':
        var amount = +window.prompt("Enter Amount");
        var currentBalance = +window.prompt("Enter a Balance");
        currentBalance -= amount;
        console.log("Withdrew $" + amount + ". New balance: $" + currentBalance);
        break;
    case '3':

        var amount = +window.prompt("Enter Amount");
        var currentBalance = +window.prompt("Enter a Balance");
        currentBalance += amount;
        console.log("Deposited  $" + amount + ". New balance: $" + currentBalance);
        break;

}

*/

/*
//q18 FizzBuzz
var output = '';
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        output += 'FizzBuzz ';
    }
    else if (i % 3 == 0) {
        output += 'Fizz ';
    }
    else if (i % 5 == 0) {
        output += 'Buzz ';
    }
    else {
        output += i + ' ';
    }

}
console.log(output);
*/


/*
//q19 stars pattern (left)
var rows = window.prompt("Enter number of  rows ");
var rowOfStar = '';
for (var i = 1; i <= rows; i++) {
    rowOfStar = '';
    for (var j = 1; j <= i; j++) {
        rowOfStar += "*";
    }
    console.log(rowOfStar + "\n");
}
 */


//v20 stars pattern(right)

var rows = window.prompt("Enter number of  rows ");
var rowOfStar = '';
for (var i = 1; i <= rows; i++) {
    rowOfStar = '';
    for (var j = 1; j <= (rows - i); j++) {
        rowOfStar += " ";
    }
    for (var j = (rows - i); j < rows; j++) {
        rowOfStar += "*";
    }
    console.log(rowOfStar + "\n");
}
