/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var r = [];
  var i = 0;
  while (i < s.length) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      r.push(s[i]);
    } else if (s[i] === ')') {
      if (r[r.length - 1] === '(') r.pop();
      else return false;
    } else if (s[i] === '}') {
      if (r[r.length - 1] === '{') r.pop();
      else return false;
    } else if (s[i] === ']') {
      if (r[r.length - 1] === '[') r.pop();
      else return false;
    }
    ++i;
  }
  return r.length > 0 ? false : true;
};
