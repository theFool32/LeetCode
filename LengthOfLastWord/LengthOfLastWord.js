/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var right = s.length - 1;
  while (right >= 0) {
    if (s[right] === ' ') {
      --right;
    } else {
      break;
    }
  }
  if (right < 0) {
    return 0;
  }
  var left = right - 1;
  while (left >= 0) {
    if (s[left] !== ' ') {
      --left;
    } else {
      break;
    }
  }
  return right - Math.max(left, -1);
};
