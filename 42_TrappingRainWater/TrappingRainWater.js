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

