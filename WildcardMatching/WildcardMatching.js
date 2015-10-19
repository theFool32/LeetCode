//very slow
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var sLen = s.length,
        pLen = p.length,
        si = 0, pi = 0, tempSi, tempPi;

    while (si < sLen) {
        if (pi < pLen && (p[pi] === s[si] || p[pi] === '?')) {
            ++si; ++pi;
        } else if (pi < pLen && p[pi] === '*') {
            tempSi = si + 1;
            tempPi = pi;
            ++pi;
        } else if (tempSi !== undefined) {
            si = tempSi;
            pi = tempPi;
        } else {
            return false;
        }
    }

    for (var i = pi;i < pLen; ++i) {
        if (p[i] !== '*') {
            return false;
        }
    }
    return true;
};
