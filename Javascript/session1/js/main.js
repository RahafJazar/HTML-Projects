
// document.getElementById("vip").innerHTML = "TEST";
// console.log("hello");
// var user = "Ahmed"; //declaration+assignment
// var age;//declarationm
// age = 20;//assignment
// agee = 60 //override 
// var age = 80;//redeclare => all languages causes error but js allow redeclaring 
// console.log(age)//this print value of age

// console.log('age')//this print age string 'age'
// console.log('age is', age)

// var userName = "Ahmad";

// console.log('user name is', userName);

// var userRelation = "single";
// var userAge = 34;
// var isAdmin = true;
// var imgSrc = null; // معناها ما عهنده صورة وما حيكون عنده 
// var universityName; //يعني ممكن يكون عنده جامعة لبعدين بس مش عارفين شو اسمها
// //data types
// //1-primitive datatypes
// /*
// -string :" " , '', 's' ,'true' ,'null';
// -number : 2, 6.4 , 7.88888;
// -boolean :true ,false;
// -null : empty value (i don't want to give a value )
// -undefined : empty value (something is not declarative because there's no data in it , i can't know it's datatype , but maybe later i will assign a value to it
// )

// ***Check Type of JS Datatypes use => typeof()

// */

// console.log("type of userRelation", typeof (userRelation));
// console.log("type of userAge", typeof (userAge));
// console.log("type of isAdmin", typeof (isAdmin));
// console.log("type of imgSrc", typeof (imgSrc));
// console.log("type of universityName", typeof (universityName));

// var myName = window.prompt("Enter Your Name");

// var myAge = window.prompt("Enter Your Age");
// userName = myName;
// userAge = myAge;
// console.log("myName is ", myName);
// console.log("username is ", myName);
// document.getElementById("vip").innerHTML = 'your name is ' + userName + ' , and your age is ' + userAge;
// console.log("2 power  3", 2 ** 3);

// var num1 = window.prompt("Enter number1"); //decl+assignment  ,, prompt ->string
// var num2 = window.prompt("Enter number2");    //,, prompt ->string
// console.log("number 1" + num1 + ' type of it ' + typeof (num1));
// console.log("number2" + num2 + ' type of it ' + typeof (num2));
// var subtract2Num = num1 - num2; //implicit conversion
// var add2mnum = Number(num1) + Number(num2); // concatenation 
// var num1PowerNum2 = num1 ** num2;//implicit conversion 
// console.log("num1 -num2 = ", subtract2Num);
// console.log("num1 +num2 = ", add2mnum);

// console.log("num1 ** num2 = ", num1PowerNum2);

// console.log(Number(false));
// console.log(Number(true));
// console.log(Number(null));
// console.log(Number('ahmad'));
// console.log(Number('3'));
// console.log(Number(undefined));
// console.log(typeof (NaN));
// console.log('2' + '5' * '3');
// console.log('ahmad' * '4' + '3');
// var color = window.prompt("Enter a color ");
// switch (color) {
//     case ("green"):
//         console.log("Go .....");
//         break;
//     case ("yellow"):
//         console.log("wait....");
//         break;
//     case ("red"):
//         console.log("stop .........");
//         break;
//     default:
//         color = window.prompt("Enter a  valid color");
//         break;
// }
// var num = + window.prompt("Enter a number");
// switch (num > 10) {
//     case true:
//         console.log("number >10");
//         break;
//     case false: switch (num == 10) {
//         case true:
//             console.log("number equal 10");
//             break;
//         case false:
//             console.log("number <10 ");
//             break;
//     }
//         break;

// }

function getAvg(x, y) {
    var avg = (x + y) / 2; //local variable 
    return avg;
}
// console.log(avg); //uncaught Reference error:
getAvg(10, 3);

/*Story :
I have a  store that sell  a  watches ,
I want to add a payment watches and calculate  profits after subtract tax , advertisment
*/
// function getPrice(price, profit, tax, ads) {
//     var price1 = price + profit; //1000+200 =1200;
//     var price2 = price1 * tax; //1200*1.4
//     var price3 = price2 + ads;

//     return price3;
// }

// console.log(getPrice(400, 200, 1.2, 200))
// var avgPrice = getAvg(getPrice(400, 200, 1.2, 200), 10);
// console.log("price  avg =", avgPrice);

// function parent() {
//     function child() {
//         console.log("This is child function innside parent function ");

//     }
//     return child();

// }


// parent(); //uncaught reference , child is not defined 
// sayhello(); //sayhello is not a 
// var sayhello = function () {
//     console.log("hello");
//     return 5;
// }

// console.log(sayhello());


// //hoisting 
// console.log(x);
// var x = "dena ";
console.log(foo());
function foo() {
    function bar() {
        return "bar-" + 3;
    }
    return bar();
    var bar = function () {
        return "bar-" + 8;
    }
}

var product = {
    name: 'lipstick',
    marka: 'sheglam',
    type: 3,
    price: '5JD',
    details: function () { //expression function
        console.log("the product was made in 2023");
        return 'Product1 '
    }
}
printProduct();
function printProduct() {
    console.log("name :", product['name']);
    console.log("marka :", product['marka']);
    console.log("type :", product['type']);
    console.log("price :", product['price']);
    console.log('details : ', product.details());

}

var person = {
    name: 'Ahmad',
    age: 30,
    sallary: 3000,
    wife: {
        name: 'Lara',
        age: 24,
        sallary: 1000,
        sun: {
            name: 'adam',
            age: 4
        }
    }
}

console.log('son name : ', person.wife.sun.name);
console.log('wife name : ', person.wife.name);
console.log('person name : ', person.name);
person.weight = 90;
console.log(person)

//2-non premitive (reference )datatypes


const isTrue = true == [];
const isFalse = true == ![];

console.log(isTrue + isFalse);