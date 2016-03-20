/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var len = nums.length,
        i;
    for (i = 0;i < len;) {
        if (nums[i] > 0 && nums[i] <= len && nums[i] !== nums[nums[i] - 1]) {
            var temp = nums[i];
            nums[i] = nums[nums[i] - 1];
            nums[temp - 1] = temp;
        } else {
            ++i;
        }
    }
    for (i = 0;i < len;++i) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return len + 1;
};
