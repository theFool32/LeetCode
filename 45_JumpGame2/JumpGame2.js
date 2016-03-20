/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var result = 0;
    for (var i = 0, c = 0, len = nums.length - 1; c < len; ++result) {
        var max = 0;
        for (var j = i;j <= c; ++j) {
            max = Math.max(max, j + nums[j]);
        }
        i = c + 1;
        c = max;
    }
    return result;
};
