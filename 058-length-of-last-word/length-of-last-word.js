// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
//
// If the last word does not exist, return 0.
//
// Note: A word is defined as a character sequence consists of non-space characters only.
//
// Example:
//
// Input: "Hello World"
// Output: 5
//
//


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var right = s.length - 1;
    while (right >= 0) {
        if (s[right] === ' ') {
            --right;
        } else {
            break;
        }
    }
    if (right < 0) {
        return 0;
    }
    var left = right - 1;
    while (left >= 0) {
        if (s[left] !== ' ') {
            --left;
        } else {
            break;
        }
    }
    return right - Math.max(left, -1);
};
