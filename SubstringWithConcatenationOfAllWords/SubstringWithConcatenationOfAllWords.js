/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var w = {}, result = [];
    words.forEach(function(v) {
        w[v] = w[v] + 1 || 1;
    });
    for (var i = 0, len = s.length, 
            count = words.length, wLen = words[0].length;
            i < len - count * wLen + 1;
            ++i) {
        var temp = {}, j = 0;
        for (;j < count;++j) {
            var word = s.substr(i + j * wLen,wLen);
            if (w[word]) {
                temp[word] = temp[word] + 1 || 1;
                if (temp[word] > w[word]) {
                    break;
                }
            } else {
                break;
            }
        }
        if (j >= count) {
            result.push(i);
        }
    }
    return result;
};
