/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var hash = {}, maxLen = 0,
        cur = 0, start = 0;
    for (var i = 0, len = s.length; i < len;++i) {
        if (hash[s[i]] === undefined || hash[s[i]] < start) {
            ++cur;
            hash[s[i]] = i;
        } else {
            start = hash[s[i]];
            hash[s[i]] = i;
            cur = i - start;
        }

        if (cur > maxLen) maxLen = cur;
    }
    return maxLen;
};
