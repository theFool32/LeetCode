/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var len    = nums.length,
        result = [],
        used   = new Array(len),
        temp   = new Array(len);

    var _permute = function(i) {
        if (i >= len) {
            result.push([].concat(temp));
            return ;
        }
        for (var j = 0;j < len;++j) {
            if (used[j]) {
                continue;
            }
            used[j] = true;
            temp[i] = nums[j];
            _permute(i + 1);
            used[j] = 0;
        }
    };

    _permute(0);
    return result;
};
