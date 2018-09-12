// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.
//
//
// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
//
//
// The matching should cover the entire input string (not partial).
//
// Note:
//
//
// 	s could be empty and contains only lowercase letters a-z.
// 	p could be empty and contains only lowercase letters a-z, and characters like ? or *.
//
//
// Example 1:
//
//
// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
//
//
// Example 2:
//
//
// Input:
// s = "aa"
// p = "*"
// Output: true
// Explanation: '*' matches any sequence.
//
//
// Example 3:
//
//
// Input:
// s = "cb"
// p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
//
//
// Example 4:
//
//
// Input:
// s = "adceb"
// p = "*a*b"
// Output: true
// Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
//
//
// Example 5:
//
//
// Input:
// s = "acdcb"
// p = "a*c?b"
// Output: false
//
//


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var sLen = s.length,
        pLen = p.length,
        si = 0, pi = 0, tempSi, tempPi;

    while (si < sLen) {
        if (pi < pLen && (p[pi] === s[si] || p[pi] === '?')) {
            ++si; ++pi;
        } else if (pi < pLen && p[pi] === '*') {
            tempSi = si + 1;
            tempPi = pi;
            ++pi;
        } else if (tempSi !== undefined) {
            si = tempSi;
            pi = tempPi;
        } else {
            return false;
        }
    }

    for (var i = pi;i < pLen; ++i) {
        if (p[i] !== '*') {
            return false;
        }
    }
    return true;
};

