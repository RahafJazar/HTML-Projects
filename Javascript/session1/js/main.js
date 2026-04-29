
document.getElementById("vip").innerHTML = "TEST";
console.log("hello");
var user = "Ahmed"; //declaration+assignment
var age;//declarationm
age = 20;//assignment
agee = 60 //override 
var age = 80;//redeclare => all languages causes error but js allow redeclaring 
console.log(age)//this print value of age

console.log('age')//this print age string 'age'
console.log('age is', age)

var userName = "Ahmad";

console.log('user name is', userName);

var userRelation = "single";
var userAge = 34;
var isAdmin = true;
var imgSrc = null; // معناها ما عهنده صورة وما حيكون عنده 
var universityName; //يعني ممكن يكون عنده جامعة لبعدين بس مش عارفين شو اسمها
//data types
//1-primitive datatypes
/*
-string :" " , '', 's' ,'true' ,'null';
-number : 2, 6.4 , 7.88888;
-boolean :true ,false;
-null : empty value (i don't want to give a value )
-undefined : empty value (something is not declarative because there's no data in it , i can't know it's datatype , but maybe later i will assign a value to it
)

***Check Type of JS Datatypes use => typeof()

*/

console.log("type of userRelation", typeof (userRelation));
console.log("type of userAge", typeof (userAge));
console.log("type of isAdmin", typeof (isAdmin));
console.log("type of imgSrc", typeof (imgSrc));
console.log("type of universityName", typeof (universityName));

var myName = window.prompt("Enter Your Name");

var myAge = window.prompt("Enter Your Age");
userName = myName;
userAge = myAge;
console.log("myName is ", myName);
console.log("username is ", myName);
document.getElementById("vip").innerHTML = 'your name is ' + userName + ' , and your age is ' + userAge;
console.log("2 power  3", 2 ** 3);
//2-non premitive (reference )datatypes
