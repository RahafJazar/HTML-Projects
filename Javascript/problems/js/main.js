/**
 * @param {string} s
 * @return {number}
 */
/*  Roman to Integer  

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
*/

/**
 * @param {string} s
 * @return {boolean}
 */
/*Valid Paranthesis*/
//LIFO 
/*var isValid = function (s) {
    debugger
    var startsArr = [];
    var last;

    for (var i = 0; i < s.length; i++) {


        switch (s[i]) {
            case '{':
                startsArr.push(1);
                break;
            case '[':
                startsArr.push(2);
                break;
            case '(':
                startsArr.push(3);
                break;
            case '}':
                last = startsArr.pop();
                if (last != 1) {
                    return false;
                }
                break;
            case ']':
                last = startsArr.pop();
                if (last != 2) {
                    return false;
                }
                break;
            case ')':
                last = startsArr.pop();
                if (last != 3) {
                    return false;
                }
                break;

        }
    }

    return startsArr.length != 0 ? false : true;
}


s = "]";
console.log(isValid(s));*/



/*Pascal Triangle*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var pascalArr = [];
    for (var i = 0; i < numRows; i++) {
        var rowArr = [];
        for (var j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                rowArr.push(1);
            }
            else {
                rowArr.push(pascalArr[i - 1][j - 1] + pascalArr[i - 1][j]);
            }
        }
        pascalArr.push(rowArr);
    }
    return pascalArr;
};
console.log(generate(4));