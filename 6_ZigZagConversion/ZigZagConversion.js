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
