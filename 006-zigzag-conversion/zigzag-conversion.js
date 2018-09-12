// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//
//
// P   A   H   N
// A P L S I I G
// Y   I   R
//
//
// And then read line by line: "PAHNAPLSIIGYIR"
//
// Write the code that will take a string and make this conversion given a number of rows:
//
//
// string convert(string s, int numRows);
//
// Example 1:
//
//
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
//
//
// Example 2:
//
//
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
//
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
//


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var len = s.length,
        result = '',
        loop = 2 *numRows - 2,
        i,j;
    if (len <= numRows || numRows === 1) {
        return s;
    }
    for (i = 0;i < len;i += loop) {
        result += s[i];
    }
    for (i = 1;i < numRows - 1;++i) {
        for (j = i;j < len;j += loop) {
            result += s[j];
            if (j + loop - 2 * i <len) {
                result += s[j + 2 * (numRows - i) - 2];
            }
        }
    }
    for (i = numRows - 1;i < len;i += loop) {
        result += s[i];
    }
    return result;
};

