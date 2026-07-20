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
    sum += salaries[key]

}

//q4
function multiplyNumeric(obj) {
    for 
}