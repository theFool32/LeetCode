// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
//
//
// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!
//
// Example:
//
//
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var l = 0, h = height.length - 1,
        area = 0, secHeight = 0;
    while (l < h) {
        if (height[l] < height[h]) {
            secHeight = Math.max(height[l], secHeight);
            area += secHeight - height[l];
            ++l;
        } else {
            secHeight = Math.max(height[h], secHeight);
            area += secHeight - height[h];
            --h;
        }
    }
    return area;
};

