/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var colors = [0, 0, 0],
      len = nums.length;
  nums.forEach(function(v) {
    colors[v]++;
  });
  var i = 0, j = 0;
  for (;i < len; ++i) {
    var c = 0;
    while (colors[j] <= 0) {
      ++j;
    }
    c = j;
    --colors[j];
    nums[i] = c;
  }
};
