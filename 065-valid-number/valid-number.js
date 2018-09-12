// Validate if a given string can be interpreted as a decimal number.
//
// Some examples:
// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true
// " -90e3   " => true
// " 1e" => false
// "e3" => false
// " 6e-1" => true
// " 99e2.5 " => false
// "53.5e93" => true
// " --6 " => false
// "-+3" => false
// "95a54e53" => false
//
// Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:
//
//
// 	Numbers 0-9
// 	Exponent - "e"
// 	Positive/negative sign - "+"/"-"
// 	Decimal point - "."
//
//
// Of course, the context of these characters also matters in the input.
//
// Update (2015-02-10):
// The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button to reset your code definition.
//


/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    var isInt = function(str) {
        var i = 0;
        var length = str.length;
        if (length === 0) {
            return false;
        }
        while (i < length) {
            //if (+str[i] + 1 - (+str[i])) {
            if (str[i] <= '9' && str[i] >= '0') {
                ++i;
            } else {
                return false;
            }
        }
        return true;
    };
    var isFloat = function(str) {
        if (str.length <= 1) {
            return false;
        }
        var dotIndex = str.indexOf('.');
        if (dotIndex === -1) {
            return false;
        }
        return (dotIndex === 0 || isInt(str.slice(0, dotIndex)) ) && (dotIndex === str.length - 1 || isInt(str.slice(dotIndex + 1)));
    };
    
    s = s.trim();
    var eIndex = s.toLowerCase().indexOf('e');
    var leftStr = s, rightStr = '1';
    if (eIndex !== -1) {
        leftStr = leftStr.slice(0, eIndex);
        rightStr = s.slice(eIndex + 1);
    }
    if (leftStr[0] === '+' || leftStr[0] === '-') {
        leftStr = leftStr.slice(1);
    }
    if (rightStr[0] === '+' || rightStr[0] === '-') {
        rightStr = rightStr.slice(1);
    }
    return (isFloat(leftStr) || isInt(leftStr)) && isInt(rightStr);
};
