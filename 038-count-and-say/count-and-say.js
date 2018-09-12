// The count-and-say sequence is the sequence of integers with the first five terms as following:
//
//
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
//
//
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
//
// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
//
// Note: Each term of the sequence of integers will be represented as a string.
//
//  
//
// Example 1:
//
//
// Input: 1
// Output: "1"
//
//
// Example 2:
//
//
// Input: 4
// Output: "1211"
//


/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var say = function(str) {
        var s = '',
            count = 1;
        for (var i = 1, len = str.length;i < len;++i) {
            if (str[i] === str[i - 1]) {
                ++count;
            } else {
                s += (String(count) + str[i - 1]);
                count = 1;
            }
        }
        s += (String(count) + str[len - 1]);
        return s;
    };

    var s = '1';
    for (var i = 1;i < n;++i) {
        s = say(s);
    }
    return s;
};

