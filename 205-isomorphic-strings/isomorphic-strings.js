// Given two strings s and t, determine if they are isomorphic.
//
// Two strings are isomorphic if the characters in s can be replaced to get t.
//
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
//
// Example 1:
//
//
// Input: s = "egg", t = "add"
// Output: true
//
//
// Example 2:
//
//
// Input: s = "foo", t = "bar"
// Output: false
//
// Example 3:
//
//
// Input: s = "paper", t = "title"
// Output: true
//
// Note:
// You may assume both s and t have the same length.
//


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var normal = function(str) {
        var hash = {};
        var arr = [];
        var index = 0;
        for (var i = 0;i < str.length;++i) {
            if (hash[str[i]] !== undefined) {
                arr[arr.length] = hash[str[i]];
            } else {
                arr[arr.length] = index;
                hash[str[i]] = index++;
            }
        }
        return arr;
    }
    
    var as = normal(s);
    var at = normal(t);
    for (var i = 0;i < as.length;++i) {
        if (as[i] !== at[i]) return false;
    }
    return true;
};
