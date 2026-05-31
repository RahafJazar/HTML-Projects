// // //variables//
// // let name = "John";
// // let admin = name;
// // alert(admin);

// // const BIRTHDAY = '2001-03-01';
// // const age = someCode(birthday);

// 'use strict'
// // var name = prompt("What is your name ?", "");
// // alert(`The name is ${name}`);


// let x = 1;
// x = -x;
// alert(x);

// //+ unary plus =>one operand

// //+ binary plus  => Two operands


// // function printTotalAges() {
// //     let age1 = document.getElementById("user1Age").value;
// //     console.log('type of age1', typeof (+age1)); //unary plus
// //     let age2 = document.getElementById("user2Age").value;
// //     console.log('type of age2', typeof (+age2)); //unary plus
// //     console.log(age1 + age2); //string+string =string 
// //     console.log(+age1 + age2); //+string + string =number +string = string 
// //     console.log(+age1 + +age2);  //+string + +string =number +number =number
// // }
// /**
//  * @content => chained assignment & binary and unary opeartors
//  */
// /*
// let c, f, j, k;
// c = f = j = k = 5; //chained assignment->not prefer to use it  ->better is to split them in lines ;
// console.log('' + c + f + j + k); //binary plus 
//  */

// /**
//  * @content =>bitwise operators
//  */
// //bitwise operators 
// //& AND 
// console.log(10 & 3); //2 (true)
// console.log(5 & 0); //0 (false);
// console.log(4 & ''); //0(false);
// console.log(6 & '7'); //6(true);
// console.log(9 & null); //0(false);
// console.log(7 & true); //1(true);
// console.log(false & true); //0(fslse);
// console.log(true & undefined); //0(false);
// console.log(9 & NaN); //0(false);
// //| OR 
// console.log("**********************");
// console.log(10 | 3); //2 (true)
// console.log(5 | 0); //  (true);
// console.log(4 | ''); // (true);
// console.log(6 | '7'); //(true);
// console.log(9 | null); //(true);
// console.log(7 | true); //(true);
// console.log(false | true); //(true);
// console.log(true | undefined); //(true);
// console.log(9 | NaN); //(true);

// //^ XOR 
// console.log("**********************");
// console.log(1 ^ 3); //0001 ^ 0011 = 0010;

// //~ NOT
// console.log("**********************");
// console.log(~2); // ~0010 = 1101  //-3

// //<< LIFT SHIFT 
// console.log("**********************");
// console.log(5 << 1); //00000101 <<1 = 00001010=10

// //>> RIGHT SHIFT 
// console.log("**********************");
// console.log(5 >> 1); //00000101 <<1 = 00000010 =2

// //>>> Zero Fill RIGHT SHIFT 
// console.log("**********************");
// console.log(5 >> 1); //00000101 <<1 = 00000010 =2

// //tasks
// let a, b;
// a = b = 1; //chained assignment 
// let c = ++a; //prefix increment 
// let d = b++; //postfix increment 
// console.log("**********************");
// console.log(c);//2
// console.log(d); //1


// console.log("**********************");
// console.log("" + 1 + 0);//10
// console.log("" - 1 + 0); // -1
// console.log(true + false)


//Multuple ternary operator
//task 
// let login = window.prompt("Enter the logi n user type");
// let message = (login === 'Employee') ? 'Hello' : (login === 'Director') ? 'Greetings' : (login === '') ? 'No login' : '';
// console.log(message);







///////==========19-5-2026===========/////////
/*loops => break or continuue in nested loop
outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        let input = window.prompt(`value at coords(${i} , ${j})`);
        //if the input is an empty or closed (null) ,then break out of booth loops
        if (!input) break outer;

    }
}

alert("Done !")


let numInput = "";
do {
    numInput = Number(window.prompt("Enter a number greater than 100"));

} while ((numInput <= 100) && (numInput));

alert("done!");*/

//2-prime numbers
/*let n = Number(window.prompt("Enter the interval "));
let primeNumbers = ""
debugger
nextPrime: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (!(i % j)) continue nextPrime; //the i is not prime , go to the nextPrime
    }
    primeNumbers += i + ",";
}

alert(primeNumbers);*/

/*let message = (login === 'Employee') ? 'Hello' : (login === 'Director') ? 'Greetings' : (login === '') ? 'No login' : '';
console.log(message);

let age = window.prompt("Enter Your age");
if (!(age >= 14 && age <= 90)) {
    alert("the age " + age + " is  not between  14 and 90 ")
}*/


/*let loginUserType = window.prompt("Who's there");
if (loginUserType === "Admin") {
    let password = window.prompt("Passsword?");
    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === null || password == null) {
        alert("Cancelled")
    }
    else {
        //other
        alert("Wrong Password");
    }
}

else if (loginUserType === "" || loginUserType === null) {
    console.log(loginUserType)
    alert("Cancelled");

}
else {
    //other
    alert("I don't Know You ");
}

let x = 1 && 2 ?? 3; //syntax error : unexpeted token  of &&

*/

//4- switch case  to if..else
/*let browser = window.prompt("Enter  name of brwoser ");
if (browser === "Edge") {
    alert("You've got the Edge!");
}
else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    alert('Okay we support these browsers too');
}
else {
    alert('We hope that this page looks ok!');
}
*/
//5- If to Switch 
/*let a = + window.prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}*/


//6- functions declaration
///////////Evaluation of default parammeters ///////////////////
//thec default parameter is called when the second parameter is missing
//ex : 50 call of f1 function 
// 45 with parameter text 
//5 without giving a value to parameter text 
// ==> anotherFunction() will be called 5 times 
function f1(from, text = anotherFunction()) {
    console.log(from + " : " + text);
}
function anotherFunction() {
    return "The Defualt message ";
}

// f1("Aya", undefined);

//The default value is called every time the function is called 
//ex: 50 call f1 function 
// 45 with paarameter text 
//5 without giving value for parameter text 
//==> 50 calling  for text ="hello"
function f2(name, text = "Hello") {
    console.log(from + " : " + text);
}


// 7- nullish Coalescing operator (??)
function showCount(count) {
    if (count) {
        return count

    }
    else {
        return 'undefined';
    }
}
console.log("show count", showCount(5));
function showCountNullish(count) {
    return count ?? 'undefined'
}



function checkAge(age) {
    // return age > 18 ? true : "Did parents allow you?"; //ternary operator
    return age > 18 || confirm("Did parents allow you?");
}


function min(a, b) {


    return a < b ? a : b;

}

var base = prompt("Enter the Base ");
var exponent = prompt("Enter the Exponent");
function pow(x, n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(base, exponent));