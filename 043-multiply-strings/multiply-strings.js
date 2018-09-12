// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
//
// Example 1:
//
//
// Input: num1 = "2", num2 = "3"
// Output: "6"
//
// Example 2:
//
//
// Input: num1 = "123", num2 = "456"
// Output: "56088"
//
//
// Note:
//
//
// 	The length of both num1 and num2 is < 110.
// 	Both num1 and num2 contain only digits 0-9.
// 	Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// 	You must not use any built-in BigInteger library or convert the inputs to integer directly.
//
//


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var len1 = num1.length, 
        len2 = num2.length,
        res  = new Array(len1 + len2);
    res.fill(0);
    for (var i = len1 - 1;i >= 0; --i) {
        for (var j = len2 - 1;j >= 0; --j) {
            var temp = num1[i] * num2[j] + res[i+j+1];
            res[i+j+1] = (temp % 10);
            res[i+j] += ~~(temp / 10);
        }
    }
    for (i = 0;i < len1 + len2; ++i) {
        if (res[i] !== 0) {
            break;
        }
    }
    if (i >= len1 + len2) {
        return '0';
    } else {
        return res.slice(i).join('');
    }
};

