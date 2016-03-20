/**
 *  * @param {number} num
 *   * @return {string}
 */

var intToRoman = function(num) {
    var values = [1000,900,500,400,100,90,50,40,10,9,5,4,1],
        strs = ['M','CM','D','CD','C','XC','L',"XL",'X',
                'IX','V','IV','I'],
        result = '';
    for (var i = 0,len = values.length; i < len;++i) {
        while (num >= values[i]) {
            num -= values[i];
            result += strs[i];
        }
    }
    return result;
};
