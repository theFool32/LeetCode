/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var r = s.match(new RegExp(p));
    return r && r[0] === s || false;
};
