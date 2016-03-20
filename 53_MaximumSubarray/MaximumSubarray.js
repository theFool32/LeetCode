/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var max = -Number.MAX_VALUE;
  var cur = 0;
  for (var i = 0, len = nums.length; i < len;++i) {
    cur += nums[i];
    if (cur > max) {
      max = cur;
    }
    if (cur < 0) {
      cur = 0;
    }
  }
  return max;
};
