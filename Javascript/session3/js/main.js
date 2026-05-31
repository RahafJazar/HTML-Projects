// var sumOfEvenNumbers = function (numbersArr) {

//     var sum = 0;
//     for (var i = 0; i < numbersArr.length; i++) {
//         if (numbersArr[i] % 2 == 0) {
//             sum += numbersArr[i];
//         }
//     }
//     if (sum != 0) {
//         return "The Sum of even numbers is :" + sum;
//     }
//     else {
//         return "No even Numbers , sum is 0 "
//     }
// }


// console.log(sumOfEvenNumbers([2, 6, 5, 3, 8, 5, 9, 2]));
// console.log(sumOfEvenNumbers([4, 2, 5]));
// console.log(sumOfEvenNumbers([3, 9, 3]));


// var addToArr = function (arr) {
//     console.log(arr.push('5'));
// }

// addToArr([4, 'alaa', 'aya', true, 6, 'rahaf'])

// var removeFromArr = function (arr) {
//     console.log(arr.pop());
// }

// removeFromArr([4, 3, 7]);

// var addToStart = function (arr) {
//     console.log(arr.unshift('dania', 'saea'));
// }

// addToStart(['laala', 'Farah']);

// var RemoveFrom = function (arr) {
//     console.log(arr.shift());
// }

// RemoveFrom([3, 4, 'aya']);
// RemoveFrom([])

// var doesInclude = function (arr, num) {
//     return arr.includes(num);
// }
// console.log(doesInclude([4, 2, 8, 4], 7))




//Array 

var friends = ['aya', 'Doaa', 'Samer', 'Rana', 'Malak', 'layla', 'Doaa', 'nuha'];


var nums = [3, 6, 26, 91, 9, 43, 67];
nums.sort();
console.log(friends)
var newLength = nums.push(74, 66, 88);

var indexOfSamer = friends.indexOf('Doaa');
var lastIndexOfSamer = friends.lastIndexOf('Doaa')

var newArr = friends.slice(1, 6);
friends.splice(2, 0, 'Tamer');
var gg = friends.concat(nums);
console.log(gg)
