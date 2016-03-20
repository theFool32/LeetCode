/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort(function(a,b) { return a - b; });
    var i      = 0,
        j      = 0,
        len    = nums.length,
        result = [],
        low,high;
    for (;i < len - 3;++i) {
        for (j = i + 1;j < len - 2;++j) {
            low = j + 1; high = len - 1;
            while (low < high) {
                if (nums[i] + nums[j] + nums[low]
                        + nums[high] === target) {
                    result.push([nums[i],nums[j],nums[low],
                            nums[high]]);
                    while (low < len - 1 
                            && nums[low] === nums[low+1]) {
                        ++low;
                    }
                    ++low;
                } else {
                    if (nums[i] + nums[j] + nums[low]
                            + nums[high] < target) {
                        ++low;
                    } else {
                        --high;
                    }
                }
            }
            while (j < len - 2 && nums[j] === nums[j+1]) {
                ++j;
            }
        }
        while (i < len - 3 && nums[i] === nums[i+1]) {
            ++i;
        }
    }
    return result;
};
