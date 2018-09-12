// You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.
//
// Example 1:
//
//
// Input:
//   s = "barfoothefoobarman",
//   words = ["foo","bar"]
// Output: [0,9]
// Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.
// The output order does not matter, returning [9,0] is fine too.
//
//
// Example 2:
//
//
// Input:
//   s = "wordgoodstudentgoodword",
//   words = ["word","student"]
// Output: []
//
//


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var w = {}, result = [];
    words.forEach(function(v) {
        w[v] = w[v] + 1 || 1;
        //++w[v];
    });
    for (var i = 0, len = s.length, 
            count = words.length, wLen = words[0].length;
            i < len - count * wLen + 1;
            ++i) {
        var temp = {}, j = 0;
        for (;j < count;++j) {
            var word = s.substr(i + j * wLen,wLen);
            if (w[word]) {
                temp[word] = temp[word] + 1 || 1;
                //++temp[word];
                if (temp[word] > w[word]) {
                    break;
                }
            } else {
                break;
            }
        }
        if (j >= count) {
            result.push(i);
        }
    }
    return result;
};

