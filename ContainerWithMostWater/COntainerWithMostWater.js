/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0,i = 0,j = height.length - 1,temp;
    while (i < j) {
        if (height[i] < height[j]) {
            max = Math.max(max,height[i]*(j-i));
            temp = height[i++];
            while (i < j && height[i] <= temp) {
                ++i;
            }
        } else {
            max = Math.max(max,height[j]*(j-i));
            temp = height[j--];
            while (i < j && height[j] <= temp) {
                --j;
            }
        }
    }
    return max;
};
