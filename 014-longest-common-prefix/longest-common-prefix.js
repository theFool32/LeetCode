// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
//
// Input: ["flower","flow","flight"]
// Output: "fl"
//
//
// Example 2:
//
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
//
// Note:
//
// All given inputs are in lowercase letters a-z.
//


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var count = strs.length,
        minS = strs[0],
        minLen;
    if (minS === undefined) {
        return '';
    }
    minLen = minS.length;
    for (var i = 1;i < count;++i) {
        if (minLen < strs[i].length) {
            minS = strs[i];
            minLen = minS.length;
        }
    }
    for (i = 0;i < count;++i) {
        for (var j = 0;j < minLen;++j) {
            if (minS[j] != strs[i][j]) {
                minLen = j;
                break;
            }
        }
    }
    return minS.slice(0,minLen);
};

