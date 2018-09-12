// Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.
//
// Return the quotient after dividing dividend by divisor.
//
// The integer division should truncate toward zero.
//
// Example 1:
//
//
// Input: dividend = 10, divisor = 3
// Output: 3
//
// Example 2:
//
//
// Input: dividend = 7, divisor = -3
// Output: -2
//
// Note:
//
//
// 	Both dividend and divisor will be 32-bit signed integers.
// 	The divisor will never be 0.
// 	Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.
//
//


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

