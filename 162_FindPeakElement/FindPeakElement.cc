class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int len = nums.size();
        if (len < 2) return len-1;
        int low = 0, high = len-1;
        while (low < high) {
            int mid1 = (low+high)/2;
            int mid2 = mid1 + 1;
            if (nums[mid1] > nums[mid2]) {
                high = mid1;
            } else {
                low = mid2;
            }
        }
        return low;
    }
};
