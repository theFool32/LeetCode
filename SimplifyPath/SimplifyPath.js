/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  var pathArr = path.split('/'),
      stack = [],
      len = pathArr.length;

  for (var i = 0;i < len; ++i) {
    if (!pathArr[i] || pathArr[i] === '.') {
      continue;
    }
    if (pathArr[i] === '..') {
      if (stack.length) {
        stack.pop();
      }
    } else {
      stack.push(pathArr[i]);
    }
  }
  return '/' + stack.join('/');
};
