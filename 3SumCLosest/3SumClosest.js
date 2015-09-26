/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b) {
        return a - b;
    });
    var len    = nums.length,
        minDis    = Number.MAX_VALUE,
        result = 0,
        i,low,high;
    for (i = 0;i < len;++i) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        low  = i + 1;
        high = len - 1;
        while (low < high) {
            var curSum = nums[i] + nums[low] + nums[high];
            var curDis = Math.abs(curSum - target);
            if (curDis < minDis) {
                minDis = curDis;
                result = curSum;
            }

            if (curSum === target) {
                return target;
            } else if (curSum > target){
                while (low < --high 
                        && nums[high] === nums[high + 1]);
            } else {
                while (++low < high
                        && nums[low] === nums[low - 1]);
            }
        }
    }
    return result;
};
