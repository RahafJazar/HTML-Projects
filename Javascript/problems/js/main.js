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
/*
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
*/




/* Pascal TriangleII*/
/**
 * @param {number} numRows
 * @return {number[]}
 */

/*var getRow = function (rowIndex) {
    var row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
    for (var i = 1; i <= rowIndex; i++) {
        for (var j = i; j >= 1; j--) {
            row[j] = row[j] + row[j - 1];

        }

    }
    return row;
};

console.log(getRow(2));*/


/**
 * @param {number[]} prices
 * @return {number}
 */
/*
var maxProfit = function (prices) {
    var minNum = prices[0];
    var profit = 0;
    for (var i = 1; i < prices.length; i++) {
        minNum = Math.min(prices[i], minNum);
        profit = Math.max((prices[i] - minNum), profit);

    }
    return profit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));

*/

/**
 * @param {string} s
 * @return {boolean}
 */
/*var isPalindrome = function (s) {
    debugger
    s = s.toLowerCase();
    let isPalindrome = true;
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {

        let Is_i_alphanumeric = isAplhanumeric(s[i]);
        let Is_j_Alphanumeric = isAplhanumeric(s[j]);

        if (Is_i_alphanumeric && Is_j_Alphanumeric) {
            if (s[i] == s[j]) {
                isPalindrome = true;
                i++;
                j--;
            }
            else {
                return false;
            }
        }
        else if (Is_i_alphanumeric && !Is_j_Alphanumeric) {
            j--;
        }
        else if (!Is_i_alphanumeric && Is_j_Alphanumeric) {
            i++;
        }
        else if (!Is_i_alphanumeric && !Is_j_Alphanumeric) {
            i++;
            j--;
        }
    }
    return isPalindrome;
};

var isAplhanumeric = function (ch) {
    return ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9'))
}

console.log(isPalindrome(" "));*/


//single number 
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    //a^b^a^x^b = (a^a)^(b^b)^c =0 ^0 ^ x =0^x=x  //commutative and associative properties (orders and grouping doesn't matter)
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];

    }
    return result;
};
console.log(singleNumber([1, 2, 5, 5, 7, 2, 1]));
