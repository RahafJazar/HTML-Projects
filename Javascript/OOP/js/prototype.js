let person = {
    name: 'aya',
    age: 34,
    sallary: 500
}
let eng = {
    dep: 'IT',
    address: 'tabrbour'
}

Object.setPrototypeOf(person, eng)
console.log(person)
console.log(person.dep)

let nums = [2, 3, 5];
console.log(nums)


//constructor function (<ES6)
function Doctor(name, age, salary = 400) {

    this.name = name;
    this.age = age;
    this.salary = salary
    this.friends = [3, 5, 6]
}

Doctor.prototype.login = function () {
    console.log(this.name)
}

let doc1 = new Doctor("fahid", 56)
doc1.friends[1] = 78
let doc2 = new Doctor("dny", 23, 700)
let doc3 = new Doctor("aya", 24)
console.log(doc1)
console.log(doc2)
console.log(doc3)
console.log(doc1.login())

//constructor function (ES6)
class Engineer {

    constructor(name, age, sallary = 300) {
        this.name = name;
        this.age = age;
        this.salary = sallary
        this.friends = [5, 6, 7]
    }

    login() {
        console.log("login", this.name)
    }
    sayHello() {
        console.log("welcome", this.name)
    }
    getAvg() {
        console.log("avg for", "enginer")
    }
}
let engObj1 = new Engineer("fahid", 56)
engObj1.friends[1] = 78
let engObj2 = new Engineer("dny", 23, 700)
let engObj3 = new Engineer("aya", 24)
console.log(engObj1)
console.log(engObj2)
console.log(engObj3)

//inheritance

class Person extends Engineer {
    engId = 4;
    #password = "32324"
    constructor(name, age, sallary, university, department) {
        super(name, age, sallary);
        this.university = university;
        this.department = department;
    }
    getAvg() {
        console.log("avg for", "person")
    }
}
let person1 = new Person("ahmad", 23, 450, "Universit of Jordan", "IT");
person1.friends[1] = 5

console.log(person1)
console.log(person1.getAvg())
console.log(person1.engId) //4 
console.log(person1.password)//undefined لانه ما حيشوف ال private 
/*
Person {name: 'ahmad', age: 23, salary: 450, friends: Array(3), university: 'Universit of Jordan', …}
age :  23
department :  "IT"
friends :  (3) [5, 5, 7]
name :  "ahmad"
salary :  450
university :  "Universit of Jordan"
[[Prototype]]: Engineer
constructor: class Person
[[Prototype]]: Object
constructor: class Engineer
login:
ƒ login()
sayHello:
ƒ sayHello()
[[Prototype]]: Object

*/
//new =>create object and connect this to this object 