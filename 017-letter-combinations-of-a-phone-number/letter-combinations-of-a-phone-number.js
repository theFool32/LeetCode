// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
//
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//
//
//
// Example:
//
//
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//
//
// Note:
//
// Although the above answer is in lexicographical order, your answer could be in any order you want.
//


var map = {
        "0": [],
        "1": [],
        "2": "abc".split(""),
        "3": "def".split(""),
        "4": "ghi".split(""),
        "5": "jkl".split(""),
        "6": "mno".split(""),
        "7": "pqrs".split(""),
        "8": "tuv".split(""),
        "9": "wxyz".split("")
    };

/**
 * @param {string[]} result
 * @param {string} currentStr
 * @param {string} digits
 * @param {number} index
 * @param {number} length
 */
var procedure = function(result,currentStr,digits,index,length) {
    if (index === length) {
        currentStr && result.push(currentStr);
        return;
    }
    var i,len = map[digits[index]].length;
    for (i = 0;i < len;++i) {
        procedure(result,currentStr + map[digits[index]][i],
                digits,index + 1,length);
    }
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var result = [];
    procedure(result,'',digits,0,digits.length);
    return result;
};

