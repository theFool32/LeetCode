/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  var max = 0;
  for (var i = 0, len = nums.length; i < len;++i) {
    if (max < i) {
      return false;
    }
    max = Math.max(max, i + nums[i]);
  }
  return true;
};
