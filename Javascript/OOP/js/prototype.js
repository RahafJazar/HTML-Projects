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


function Doctor(name, age, salary = 400) {

    this.name = name;
    this.age = age;
    this.salary = salary
}
Doctor.prototype.login = function () {
    console.log(this.name)
}
let doc1 = new Doctor("fahid", 56)
let doc2 = new Doctor("dny", 23, 700)
let doc3 = new Doctor("aya", 24)
console.log(doc1)
console.log(doc2)
console.log(doc3)
console.log(doc1.login())

//new =>create object and connect this to this object 