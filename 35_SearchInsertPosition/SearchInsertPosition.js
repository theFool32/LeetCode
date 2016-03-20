/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var l = 0, h = nums.length - 1, m;
    while (l <= h) {
        m = ~~((l + h) / 2);
        if (target < nums[m]) {
            h = m - 1;
        } else if (target > nums[m]) {
            l = m + 1;
        } else {
            return m;
        }
    }
    return l;
};
