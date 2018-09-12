// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example 1:
//
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//
//
// Example 2:
//
//
// Input: "cbbd"
// Output: "bb"
//
//


var isPalindrome = function(s,begin,end) {
    if (begin < 0) {
        return false;
    }
    while (begin < end && s[begin] === s[end]) {
        ++begin; --end;
    }
    return begin - end === 1 ||
            begin === end;
};
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var len = s.length,
        maxLen = 0,
        from = -1;
    if (len < 2) {
        return s;
    }
    for (var i = 0;i < len;++i) {
        if (isPalindrome(s,i - maxLen - 1,i)) {
            from = i - maxLen - 1;
            maxLen += 2;
        } else if (isPalindrome(s,i - maxLen,i)) {
            from = i - maxLen;
            ++maxLen;
        }
    }
    return s.substr(from,maxLen);
};

