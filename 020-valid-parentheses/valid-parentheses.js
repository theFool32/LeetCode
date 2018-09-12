// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
//
// 	Open brackets must be closed by the same type of brackets.
// 	Open brackets must be closed in the correct order.
//
//
// Note that an empty string is also considered valid.
//
// Example 1:
//
//
// Input: "()"
// Output: true
//
//
// Example 2:
//
//
// Input: "()[]{}"
// Output: true
//
//
// Example 3:
//
//
// Input: "(]"
// Output: false
//
//
// Example 4:
//
//
// Input: "([)]"
// Output: false
//
//
// Example 5:
//
//
// Input: "{[]}"
// Output: true
//
//


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var r = [];
    var i = 0;
    while (i < s.length) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            r.push(s[i]);
        } else if (s[i] === ')') {
            if (r[r.length - 1] === '(') r.pop();
            else return false;
        } else if (s[i] === '}') {
            if (r[r.length - 1] === '{') r.pop();
            else return false;
        } else if (s[i] === ']') {
            if (r[r.length - 1] === '[') r.pop();
            else return false;
        }
        ++i;
    }
    return r.length > 0 ? false : true;
};
