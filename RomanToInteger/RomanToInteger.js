/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        },
        result = 0;
    for (var i = 0,len = s.length;i < len;++i) {
        if (i < len - 1 && map[s[i]] < map[s[i+1]]) {
            result -= map[s[i]];
        } else {
            result += map[s[i]];
        }
    }
    return result;
};
