/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var len1 = haystack.length,
        len2 = needle.length,
        next = new Array(len2),
        i = 0, j = -1;
    next[0] = -1;

    while (i <= len2 - 1) {
        if (j === -1 || needle[i] === needle[j]) {
            ++i; ++j;
            next[i] = j;
        } else {
            j = next[j];
        }
    }
  
    i = 0; j = 0;
    while (i < len1 && j < len2) {
        if (j === -1 || haystack[i] === needle[j]) {
            ++i; ++j;
        } else {
            j = next[j];
        }
    }
    return j === len2 ? i - j : -1;
};
