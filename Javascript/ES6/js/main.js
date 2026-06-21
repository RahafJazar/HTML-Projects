//1-let , const



//2-destructing
let person = {
    name: "rahaf",
    age: 25,
    sallary: 300,
    son: {
        name: "ali",
        age: 3
    }
}

//without destructing 
let userName = person.name;
let userAge = person.age;
let userSallary = person.sallary;

//destructing object
let name = "aya";
//way1
// let { name: username, age: userage, sallary } = person
// let { name: sonname, age: sonage } = person.son
// console.log(username);
// console.log(userage);
// console.log(sallary);
// console.log(sonname);
// console.log(sonage);

//way2
let { name: username, age: userage, sallary, son: { name: sonname, age: sonage } } = person
console.log(username);
console.log(userage);
console.log(sallary);
console.log(sonname);
console.log(sonage);

//destructing array
let friends = ["ahmad", "samir", "khaled"];
let [name1, name2] = friends
console.log(name1)
console.log(name2)

//3-spread operator
/*array*/
let newFriends = ["dania", friends];
console.log(newFriends); //array inside array (2) ['dania', Array(3)]

newFriends = ["ghaila", ...friends];
console.log(newFriends); //one array (4) ['ghaila', 'ahmad', 'samir', 'khaled']

/*object*/
let p1 = {
    name: "rahaf",
    age: 25,
    sallary: 300

}
let p2 = {
    locatio: "cairo",
    dep: "civil",
    p1

}
console.log(p2);
/*
{locatio: 'cairo', dep: 'civil', p1: {…}}
dep: "civil"
locatio: "cairo"
p1: {name: 'rahaf', age: 25, sallary: 300, son: {…}}
[[Prototype]]: Object
*/
p2 = {
    locatio: "cairo",
    dep: "civil",
    ...p1
}
console.log(p2);
/* 
{locatio: 'cairo', dep: 'civil', name: 'rahaf', age: 25, sallary: 300} 

*/


/* function */
function getAvg(x, y, z) {
    return (x + y + z) / 3;
}

let nums = [2, 3, 4]
console.log(getAvg(...nums));


//4-rest parameter 

function getSum(...nums) {
    let sum = 0;
    for (const n of nums) {
        sum += n;
    }
    return sum;
}
console.log(getSum(4, 3, 6, 2, 6, 8));



/*default parameter */
const h2 = document.querySelector("h2");
function sayHello(name = "dany", age = 22) {
    h2.innerHTML = "welocome " + name + " your age is :" + age
}
sayHello()


const test = document.querySelector(".test");
test.addEventListener("click", function (event) {
    console.log("click", this)
    //this => الايليمنت اللي معمول عليه الايفنت     <div class="test w-25 bg-info"> ...
    //this & event.target  => this : elem that take an event /// event.target: element that clicked (more clear and detailed)
})

console.log(this);

function testFn() {
    "use strict"
    console.log("this in func", this)
}
testFn()

let car = {
    categ: "mercedes",
    year: 2020,
    price: 40000,
    drive() {

        console.log("drive", this.categ);
    },
    getPrice: function () {

        console.log("get priice ", this.price); //get priice  40000
        const taxes = () => {
            "use strict"
            console.log("taxis", this.price - 4);
        }
        taxes()
    }
}

car.getPrice();


//for..of ==>array 
let cars = ["mercedes", "oudi", "porshe", "jetour"];
let newCars = [...cars];
newCars[0] = "Mer";
console.log(cars);
console.log(newCars)

//for..in ==>object 
person = {
    name: "rahaf",
    age: 25,
    sallary: 300,
    son: {
        name: "ali",
        age: 3
    }
}
for (const x in person) {
    console.log(x, ": ", person[x])
}
let newObj = structuredClone(person)
person.name = "rahaf samir"
person.son.age = 6
console.log(newObj)
/*
{name: 'rahaf', age: 25, sallary: 300, son: {…}}
age :  25
name :  "rahaf"
sallary :  300
son :  {name: 'ali', age: 3}
*/

///array method
let nums1 = [2, 3, 4, 5, 6, 7, 8];

let sum = nums1.reduce((prev, current) => {
    return (prev + current)
}, 5)
console.log(sum);

// const evenNums = nums1.filter((value, index) => {
//     return value % 2 == 0
// })
// const oddNums = nums1.filter((value, index) => {
//     return value % 2 != 0
// })


// console.log(evenNums)
// console.log(oddNums)

// //array of objects
// let allProducts = [
//     { name: "lenovo", price: 300, gen: "10", onSale: true },
//     { name: "Dell", price: 234, gen: "8", onSale: false },
//     { name: "HP", price: 560, gen: "8", onSale: true }
// ]
// let expensiveProds = allProducts.filter(product => product.price > 500);
// console.log(expensiveProds)


// const elemLessPrice = allProducts.findIndex(elem => elem.price < 500 && elem.onSale == false);
// console.log(elemLessPrice)


let newSet = new Set();
newSet.add(10).add(34).add(50).add(10)
console.log(newSet); //Set(3) {10, 34, 50}
newSet.delete(34);
console.log(newSet); //Set(2) {10, 50}
console.log(newSet.has(50)); //true
console.log(newSet.has(34));//false
console.log(newSet.size);//2
newSet.clear();
console.log(newSet); //Set(0) {size: 0}


let nums2 = [20, 30, 40, 50, 55, 40, 30];
let newArrSet = new Set(nums2);
console.log(newArrSet); //Set(5) {20, 30, 40, 50, 55}
let setToArr = Array.from(newArrSet);
console.log(setToArr) //(5) [20, 30, 40, 50, 55]

let personMap = new Map()
personMap.set('name', 'dalis');
personMap.set('salary', 579);
personMap.set('field', 'Cs');
console.log(personMap);  //Map(3) {'name' => 'dalis', 'salary' => 579, 'field' => 'Cs'}
console.log(personMap.has('name')) //true
console.log(personMap.has('countey')) //false
personMap.delete('salary');
console.log(personMap); //Map(2) {'name' => 'dalis', 'field' => 'Cs'}
console.log(personMap.values());//MapIterator {'dalis', 'Cs'}
console.log(personMap.keys());//MapIterator {'name', 'field'}
console.log(personMap);
for (let elem of personMap) {
    console.log("elem key ", elem[0]) //key
    console.log("elem value ", elem[1]) //value
    /*
    elem key  name
    main.js:251 elem value  dalis
    main.js:250 elem key  field
    main.js:251 elem value  Cs
    */
}
console.log("----------------------")
//use destructing
for (let [key, val] of personMap) {
    console.log("elem key ", key) //key
    console.log("elem value ", val) //value
    /*
    elem key  name
    main.js:251 elem value  dalis
    main.js:250 elem key  field
    main.js:251 elem value  Cs
    */
}

console.log(personMap.size); //2
personMap.clear();


const employee = {
    name: "ahmad",
    salary: 500,
    age: 24
}

console.log(Object.entries(employee)) //destruct key , value of the object using Object.entries()
let objentries = Object.entries(employee)
let newMap = new Map(objentries);
console.log(newMap)
console.log(newMap.size);
let mapToObj = Object.fromEntries(newMap);
console.log(mapToObj)
delete mapToObj.name
console.log(mapToObj)