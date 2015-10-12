/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var say = function(str) {
        var s = '',
            count = 1;
        for (var i = 1, len = str.length;i < len;++i) {
            if (str[i] === str[i - 1]) {
                ++count;
            } else {
                s += (count + str[i - 1]);
                count = 1;
            }
        }
        s += (count + str[len - 1]);
        return s;
    };

    var s = '1';
    for (var i = 1;i < n;++i) {
        s = say(s);
    }
    return s;
};
