/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  var l = 0, h = nums.length - 1, m;
  while (l <= h) {
    m = ~~((l + h) / 2);
    if(nums[m] === target) {
      return true;
    }
    if(nums[l] < nums[m]){
      if(target < nums[l] || target > nums[m]){
        l = m + 1;
      }else{
        h = m - 1;
      }
    } else if(nums[l] > nums[m]){
      if(target < nums[m] || target > nums[h]){
        h = m -1;
      }else{
        l = m + 1;
      }
    }else{
      ++l;
    }
  }
  return false;
};
