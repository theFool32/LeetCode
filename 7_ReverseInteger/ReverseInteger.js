/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = Math.sign(x),
        absx = Math.abs(x),
        reverse = +(absx.toString().split('').reverse().join(''));
    if (reverse >= Math.pow(2,31)) {
        return 0;
    } else {
        return reverse * sign;
    }
};
