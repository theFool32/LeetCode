/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var l = 0, h = nums.length - 1, m;
    while (l <= h) {
        m = ~~((l + h) / 2);
        if (target < nums[m]) {
            if (nums[l] < nums[h] || nums[m] < nums[l] || target > nums[h]) {
                h = m - 1;
            } else {
                l = m + 1;
            }
        } else if (target > nums[m]) {
            if (nums[l] < nums[h] || nums[m] > nums[l] || target < nums[l]) {
                l = m + 1;
            } else {
                h = m - 1;
            }

        } else {
            return m;
        }
    }
    return -1;
};
