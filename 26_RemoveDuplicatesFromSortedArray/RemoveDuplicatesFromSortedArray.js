/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    var i = 1,j = 1,len = nums.length;
    for (; j < len; ++j) {
        if (nums[j] !== nums[j-1]) {
            nums[i++] = nums[j];
        }
    }
    return i; 
};
