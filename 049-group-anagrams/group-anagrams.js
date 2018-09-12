// Given an array of strings, group anagrams together.
//
// Example:
//
//
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
//
// Note:
//
//
// 	All inputs will be in lowercase.
// 	The order of your output does not matter.
//
//


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var hash = {};
    var getKey = function(str) {
        return str.split('').sort().join('');   
    };
    
    for (var i = 0, len = strs.length; i < len; ++i) {
        var key = getKey(strs[i]);
        hash[key] = hash[key] || [];
        hash[key].push(strs[i]);
    }
    var results = [];
    for (var key in hash) {
        results.push(hash[key].sort());
    }
    return results;
};
