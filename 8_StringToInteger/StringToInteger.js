/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var r = str.match(/^\s*([+-]?\d+)/),
        n = (r && +r[1]);
    return  !n ? 0 :
            n > 2147483647 ? 2147483647 :
            n < -2147483648 ? -2147483648 :
            n;
};
