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

//q3
var num = +window.prompt("Enter a number");
if (num % 2 === 0) {
    console.log(num + " is an even number")
}
else {
    console.log(num + " is an odd number")
}
