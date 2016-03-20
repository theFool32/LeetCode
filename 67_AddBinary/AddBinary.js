/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var aLen = a.length,
  bLen = b.length,
  len = Math.max(aLen, bLen),
  results = new Array(len),
  c = 0;
  --aLen, --bLen, --len;
  var i, j;
  while (aLen >= 0 || bLen >= 0) {
    i = aLen >= 0 ? +a[aLen] : 0;
    j = bLen >= 0 ? +b[bLen] : 0;
    results[len] = i ^ j ^ c;
    c = i & j | c & (i ^ j);
    --aLen, --bLen, --len;
  }
  if (c) {
    results.unshift(1);
  }
  return results.join('');
};
