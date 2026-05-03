/*
//JS Hoisting Behavior
//var teddy = undefined 
//(function sing() {console.log('ohhh la la')}) error  (IIFE)

console.log('1') //1
console.log(teddy) ///undefined
console.log(sing()) //ReferenceError: sing is not a defined 
var teddy = 'bear';
(function sing() { console.log('ohhh la la') })() //(IIFE)
*/

/*
console.log('1') //1
console.log(teddy) //ReferenceError:  cann't access teddy before inititalization (TDZ (Temporal Dead Zone))
let teddy = 'bear' // change it to let or const
*/

/*
//var sing2 
//function sing() {console.log('ohhh la la')}
console.log(sing()) //ohhh la la
//undefined
console.log(sing2)//undefined


// function expression
var sing2 = function () { console.log('uhhh la la') }

// function declaration
function sing() { console.log('ohhh la la') }

console.log(sing2())  //'uhhh la la'
//unedined

*/

/*
//var sing2
//function sing() { console.log('ohhh la la') }
console.log(sing())  //ohhh la la 
//undefined 
console.log(sing2())  //TypeError: sing2 is not a function

// function expression
var sing2 = function () { console.log('uhhh la la') }

// function declaration
function sing() { console.log('ohhh la la') }

console.log(sing2())

*/

/*
console.log(a) //f a(){console.log('hi')}
console.log(a()) //hi
//undefined
a() //hi
function a() { console.log('hi') }
*/

/*
//function a() {console.log('hi')}
//function a() {console.log('bye')}
a()  // bye
function a() { console.log('hi') }
a() //bye
function a() { console.log('bye') }
a() //bye
*/


/*
var favouriteFood = 'grapes'

var foodThoughts = function () {
// var favouriteFood =undefined (hoisted Local)
    console.log('Original favourite food: ' + favouriteFood) //'Original favourite food: ' + undefined 
    var favouriteFood = 'sushi'
    console.log("new favourite food: " + favouriteFood) //"new favourite food: " + sushi =new favourite food sushi
}

foodThoughts()

*/

/*
var favouriteFood = 'grapes'
var foodThoughts = function () {
    console.log('Original favourite food: ' + favouriteFood) // 'Original favourite food: ' + grapes 
    console.log("new favourite food: " + favouriteFood)// 'new favourite food:' + grapes 
}

foodThoughts()
*/

/*const a = 1
console.log(a) //1

var b
console.log(b) //undefined 
b = 2

console.log(c) //undefined
var c = 3

console.log(d) //ReferenceError: cann't access 'd' before initialization 
let d = 2
*/

//function greet() { console.log("Hello!"); } 
//var greet  

/*function greet() {
    console.log("Hello!");
}
greet(); //hello
var greet = function () {
    console.log("Hi!");
};
greet(); //hi
*/

/*
function test() {
    //var a  =undefined 
    //a() {}
    console.log(a); //f a(){}
    console.log(b); //TDZ (ReferenceError:cann't access 'b' before initialization )
    console.log(c); //TDZ (ReferenceError:cann't azccess 'c' before initialization)

    var a = 10; let b = 20; const c = 30;

    function a() { }
}

test();
*/

//var me=undefined 
//function findme(){  if(me){  console.log( me );//output 1   }  console.log( me ); //output 1}

// var me = 1;
// function findme() {
//     if (me) {
//         console.log(me);//output 1
//     }
//     console.log(me); //output 1
// }
// findme();


/*
console.log("-------------------------------");
//var me=undefined
//findme(){//var me =undefined  if(undefined) x -> console.log(undefined)}
var me = 1;
function findme() {
    if (me) { //if(undefined ) ===> falsy 
        var me = 100;
        console.log(me);
    }
    console.log(me);//undefined
}
findme();
*/

/*
//var d=undefined 
//IIFE =>
var d = 1;

(function () {
    d = '2'
    console.log(typeof d)
    function d() {
    }
})()

console.log(typeof d)
*/
//function outer() { ////1   //innerr (){var a =undefined ; console.log(a) /////undefined ; }
/*var a = 10;

function test() {
    console.log(a);
    a = 20;
    console.log(a);
}
test()*/


//Reference datatype (non primitive)
//object
// var product = {
//     name: 'lipstick',
//     price: 20,
//     id: 1,
//     onSale: false
// }
// var allProducts = [
//     { name: 'lipstick', price: 20, id: 1, onSale: false },
//     { name: 'eyeliner', price: 10, id: 2, onSale: true },
//     { name: 'cream', price: 32, id: 3, onSale: false },

// ]
// var cartona = ``;

// for (var i = 0; i < allProducts.length; i++) {
//     //use pair backtick characters 
//     cartona += ` <div class="col-md-6">
//                     <div class="bg-info">
//                         <h2>${allProducts[i].name}</h2>
//                         <h3>${allProducts[i].price}</h3>
//                     </div>
//                 </div>  `;
//     console.log(cartona);




// }
// document.getElementById('myRow').innerHTML = cartona;

// function test() {
//     var x = 10;
//     console.log(x);
// }
// console.log(x);

var subjects = ['English', 'Math', 'Science', 'History'];
var options = ``;


var i = 0;
while (i < subjects.length) {
    options += ` <option value='${subjects[i]}'> ${subjects[i]} </option> `;
    i++;
}
window.document.getElementById('subjects').innerHTML = options;

var num = 3;
do {
    console.log(num);
    i++;
} while (i < 3);

