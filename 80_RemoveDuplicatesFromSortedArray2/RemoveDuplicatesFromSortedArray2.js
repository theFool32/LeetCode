/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var len = nums.length;
  if (len <= 2) {
    return len;
  }
  var result = 2;
  for (var i = 2; i < len;++i) {
    if (nums[i] !== nums[result - 2]) {
      nums[result++] = nums[i];
    }
  }
  return result;
};
