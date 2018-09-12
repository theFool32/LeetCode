// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.
//
//
// Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].
//
//  
//
//
// The largest rectangle is shown in the shaded area, which has area = 10 unit.
//
//  
//
// Example:
//
//
// Input: [2,1,5,6,2,3]
// Output: 10
//
//


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
