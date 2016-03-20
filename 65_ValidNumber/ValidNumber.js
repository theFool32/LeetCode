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
