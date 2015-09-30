/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = nums.length;
    if (len === 0) {
        return 0;
    }
    var j = 0, temp;
    for (var i = 0; i < len - j; ++i) {
        if (nums[i] === val) {
            temp = nums[i];
            nums[i] = nums[len - j - 1];
            nums[len - j - 1] = temp;
            ++j; --i;
        }
    }
    return len - j;
};
