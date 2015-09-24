/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a,b) {
        return a - b;
    });
    var i = 0, len = nums.length,
        result = [],
        low,high;
    for (;i < len - 2;++i) {
        low = i + 1;
        high = len - 1;
        while (low < high) {
            if (nums[low] + nums[high] + nums[i] === 0) {
                result.push([nums[i],nums[low],nums[high]]);
                while (low < len - 1 
                        && nums[low] === nums[low+1]) {
                    ++low;
                }
                ++low;
            } else {
                if (nums[low] + nums[high] + nums[i] < 0) {
                    ++low;
                } else {
                    --high;
                }
            }
        }
        while (i < len - 3 && nums[i] === nums[i+1]) {
            ++i;
        }
    }
    return result;
};
