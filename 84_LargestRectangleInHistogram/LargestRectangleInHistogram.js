/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  var len = heights.length;
  if (len <= 0) {
    return 0;
  }
  heights.push(0);
  ++len;

  var max = heights[0];
  for (var i = 1;i < len;++i) {
    if (heights[i-1] > heights[i]) {
      var j = i - 1, width = 0;
      while (j >= 0 && heights[j] > heights[i]) {
        ++width;
        max = Math.max(max, width * heights[j]);
        heights[j--] = heights[i];
      }
    }
  }
  return max;
};
