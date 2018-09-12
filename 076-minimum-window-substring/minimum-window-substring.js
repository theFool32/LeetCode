// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
//
// Example:
//
//
// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
//
//
// Note:
//
//
// 	If there is no such window in S that covers all characters in T, return the empty string "".
// 	If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
//
//


//Can't figure out by myself
//Learnt from the url below:
//https://leetcode.com/discuss/72701/here-10-line-template-that-can-solve-most-substring-problems
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var map = new Array(128),
        counter = t.length,
        begin = 0,
        end = 0,
        d = Number.MAX_SAFE_INTEGER,
        head = 0;
    [].forEach.call(t, function(v) { 
        var code = v.charCodeAt(0);
        map[code] = map[code] ? map[code] + 1 : 1;
    });
    while (end < s.length) {
        if (map[s.charCodeAt(end++)]-- > 0) {
            counter--;
        }
        while (counter === 0) {
            if (end - begin < d) {
                d = end - (head=begin);
            }
            if (map[s.charCodeAt(begin++)]++ === 0) {
                counter++;
            }
        }
    }
    return d === Number.MAX_SAFE_INTEGER ? '' : s.substr(head, d);
};
