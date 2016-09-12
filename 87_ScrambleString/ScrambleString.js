/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var isScramble = function(s1, s2) {
  if (s1 === s2) {
    return true
  }
  if (s1.length != s2.length) {
    return false
  }
  if (s1.split('').sort().join('') !== s2.split('').sort().join('')) {
    return false
  }
  for (var i = 1;i < s1.length;++i) {
    if ((isScramble(s1.substr(0, i), s2.substr(0,i)) &&
         isScramble(s1.substr(i), s2.substr(i))) ||
        (isScramble(s1.substr(0, i), s2.substr(s1.length-i)) &&
         isScramble(s1.substr(i), s2.substr(0,s1.length-i))) ) {
            return true
          }
  }
  return false
};

