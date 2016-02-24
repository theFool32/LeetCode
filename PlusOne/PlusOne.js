/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var length = digits.length - 1;
  while(length >= 0) {
    if(digits[length] == 9) {
      digits[length] = 0;
      length--;
    } else {
      digits[length] = digits[length] + 1;
      length--;
      break;
    }
  }
  if(digits[0] === 0) {
    digits.unshift(1);
  }
  return digits;
};
