/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [-1,-1],
        l, h, m;
    l = 0; h = nums.length - 1;
    while (l <= h) {
        m = ~~((l + h) / 2);
        if (nums[m] >= target) {
            h = m - 1;
        } else {
            l = m + 1;
        }
        if (nums[m] === target) {
            result[0] = m;
        }
    }

    l = 0; h = nums.length - 1;
    while (l <= h) {
        m = ~~((l + h) / 2);
        if (nums[m] <= target) {
            l = m + 1;
        } else {
            h = m - 1;
        }
        if (nums[m] === target) {
            result[1] = m;
        }
    }

    return result;
};
