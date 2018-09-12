// Implement strStr().
//
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// Example 1:
//
//
// Input: haystack = "hello", needle = "ll"
// Output: 2
//
//
// Example 2:
//
//
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
//
//
// Clarification:
//
// What should we return when needle is an empty string? This is a great question to ask during an interview.
//
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
//


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var len1 = haystack.length,
        len2 = needle.length,
        next = new Array(len2),
        i = 0, j = -1;
    next[0] = -1;

    while (i <= len2 - 1) {
        if (j === -1 || needle[i] === needle[j]) {
            ++i; ++j;
            next[i] = j;
        } else {
            j = next[j];
        }
    }
  
    i = 0; j = 0;
    while (i < len1 && j < len2) {
        if (j === -1 || haystack[i] === needle[j]) {
            ++i; ++j;
        } else {
            j = next[j];
        }
    }
    return j === len2 ? i - j : -1;
};

