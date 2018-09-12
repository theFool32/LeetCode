// Given a string, find the length of the longest substring without repeating characters.
//
//
// Example 1:
//
//
// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
//
//
//
// Example 2:
//
//
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
//
//
//
// Example 3:
//
//
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
//
//
//
//
//


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var hash = {}, maxLen = 0,
        cur = 0, start = 0;
    for (var i = 0, len = s.length; i < len;++i) {
        if (hash[s[i]] === undefined || hash[s[i]] < start) {
            ++cur;
            hash[s[i]] = i;
        } else {
            start = hash[s[i]];
            hash[s[i]] = i;
            cur = i - start;
        }

        if (cur > maxLen) maxLen = cur;
    }
    return maxLen;
};

