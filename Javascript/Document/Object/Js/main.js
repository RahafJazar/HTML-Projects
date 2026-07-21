//q1 
let user = {} //object literal
user.name = "john";
user.surname = "Smith";
user.name = "pete"; //reassign
delete user.name; //delete


//q2
function isEmpty(obj) {
    for (let j in obj) {
        //if the loop has started=> meaqns it has properties
        return false;
    }
    return true;
}

//q3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;

for (let k in salaries) {
    sum += salaries[k]

}

//q4



//replicate object (independent 2 objects)
let obj1 = {
    name: 'rahaf',
    age: 34,
    salary: 5000
}
let obj2 = {};;
for (let key in obj1) {
    obj2[key] = obj1[key];
}

let obj3 = {};
Object.assign(obj3, obj1);
obj3.age = 26;
console.log("age in obj1 is :", obj1.age);
console.log("obj3 is", obj3)

//clone nested object 
/* assign x
  structuredClone(user) ✔
*/

let obj4 = structuredClone(obj1);
obj4.name = "raya";
console.log(obj1.name)

