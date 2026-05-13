// //variables//
// let name = "John";
// let admin = name;
// alert(admin);

// const BIRTHDAY = '2001-03-01';
// const age = someCode(birthday);

'use strict'
// var name = prompt("What is your name ?", "");
// alert(`The name is ${name}`);


let x = 1;
x = -x;
alert(x);

//+ unary plus =>one operand

//+ binary plus  => Two operands


// function printTotalAges() {
//     let age1 = document.getElementById("user1Age").value;
//     console.log('type of age1', typeof (+age1)); //unary plus
//     let age2 = document.getElementById("user2Age").value;
//     console.log('type of age2', typeof (+age2)); //unary plus
//     console.log(age1 + age2); //string+string =string 
//     console.log(+age1 + age2); //+string + string =number +string = string 
//     console.log(+age1 + +age2);  //+string + +string =number +number =number
// }
/**
 * @content => chained assignment & binary and unary opeartors
 */
/*
let c, f, j, k;
c = f = j = k = 5; //chained assignment->not prefer to use it  ->better is to split them in lines ;
console.log('' + c + f + j + k); //binary plus 
 */

/**
 * @content =>bitwise operators
 */
//bitwise operators 
//& AND 
console.log(10 & 3); //2 (true)
console.log(5 & 0); //0 (false);
console.log(4 & ''); //0(false);
console.log(6 & '7'); //6(true);
console.log(9 & null); //0(false);
console.log(7 & true); //1(true);
console.log(false & true); //0(fslse);
console.log(true & undefined); //0(false);
console.log(9 & NaN); //0(false);
//| OR 
console.log("**********************");
console.log(10 | 3); //2 (true)
console.log(5 | 0); //  (true);
console.log(4 | ''); // (true);
console.log(6 | '7'); //(true);
console.log(9 | null); //(true);
console.log(7 | true); //(true);
console.log(false | true); //(true);
console.log(true | undefined); //(true);
console.log(9 | NaN); //(true);

//^ XOR 
console.log("**********************");
console.log(1 ^ 3); //0001 ^ 0011 = 0010;

//~ NOT
console.log("**********************");
console.log(~2); // ~0010 = 1101  //-3

//<< LIFT SHIFT 
console.log("**********************");
console.log(5 << 1); //00000101 <<1 = 00001010=10

//>> RIGHT SHIFT 
console.log("**********************");
console.log(5 >> 1); //00000101 <<1 = 00000010 =2

//>>> Zero Fill RIGHT SHIFT 
console.log("**********************");
console.log(5 >> 1); //00000101 <<1 = 00000010 =2

//tasks
let a, b;
a = b = 1; //chained assignment 
let c = ++a; //prefix increment 
let d = b++; //postfix increment 
console.log("**********************");
console.log(c);//2
console.log(d); //1


console.log("**********************");
console.log("" + 1 + 0);//10
console.log("" - 1 + 0); // -1
console.log(true + false)
