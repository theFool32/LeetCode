/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    } else if (x === 0) {
        return true;
    }

    var str = x.toString(),
        len = str.length,i = 0;
    for (; i < len / 2; ++i) {
        if (str[i] !== str[len - i -1]) {
            return false;
        }
    }
    return true;
};
