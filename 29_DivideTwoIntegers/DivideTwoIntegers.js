/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var MAX_INT = 2147483647;
    if (divisor === 0) {
        return MAX_INT;
    } else if (divisor === -1 && dividend === -MAX_INT - 1) {
        return MAX_INT;
    } else if (divisor === 1) {
        return dividend;
    }

    var result = 0,
        sign   = Math.sign(dividend) * Math.sign(divisor);

    dividend = Math.abs(dividend);
    divisor  = Math.abs(divisor);

    while (dividend >= divisor) {
        var temp   = divisor,
            factor = 1;
        while ((temp << 1) <= dividend) {
            if ((temp << 1) <= 0) {
                break;
            }
            factor <<= 1;
            temp   <<= 1;
        }
        dividend -= temp;
        result += factor;
    }

    return sign * result;
};
