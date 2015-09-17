/**
 * @param {number[]} slice of nums1
 * @param {number[]} slice of nums2
 * @param {number} k
 * @return {number}
 * 
 * works only for this problem
 */
var findKth = function(nums1,nums2,k) {
    var l1 = nums1.length,
        l2 = nums2.length,
        shortNums = l1 > l2 ? nums2 : nums1,
        longNums = l1 > l2 ? nums1 : nums2;
    l1 = shortNums.length;
    l2 = longNums.length;
    if (l1 === 0) {
        return longNums[k];
    }
    if (k === l1 + l2 - 1) {
        return Math.max(shortNums[l1-1],longNums[l2-1]);
    }
    var i = Math.floor(l1 / 2),
        j = k - i;
    return shortNums[i] > longNums[j] ?
            findKth(shortNums.slice(0,i),longNums.slice(j),i) :
            findKth(shortNums.slice(i),longNums.slice(0,j),j);
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len = nums1.length + nums2.length;
    return len % 2 == 1 ?
            findKth(nums1,nums2,Math.floor(len / 2)) :
            (findKth(nums1,nums2,len / 2 - 1) 
             + findKth(nums1,nums2,len / 2)) / 2;
};
