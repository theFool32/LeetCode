/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var index = 0, len = nums.length,
        i = len - 1, temp;
    if (i <= 0) {
        return ;
    }
    while (i > 0) {
        if (nums[i - 1] < nums[i]) {
            index = i;
            break;
        }
        --i;
    }
    if (index > 0) {
        i = len - 1;
        while (i >= index && nums[index - 1] >= nums[i]) {
            --i;
        }
        temp = nums[index - 1];
        nums[index - 1] = nums[i];
        nums[i] = temp;
    }
    for (i = 0;i < (len - index) / 2;++i) {
        temp = nums[index + i];
        nums[index + i] = nums[len - i - 1];
        nums[len - i - 1] = temp;
    }
};
