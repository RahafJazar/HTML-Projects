//*  Roman to Integer 

/**
 * @param {string} s
 * @return {number}
 */

var romanNum = window.prompt("Enter a roman ");



var romanToInt = function (s) {
    debugger
    var romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        const curr = romanMap[s[i]];
        const next = romanMap[s[i + 1]];


        if (curr < next) {
            result -= curr;
        }
        else {
            result += curr;
        }


    }
    return result;
};

console.log(romanToInt(romanNum));

