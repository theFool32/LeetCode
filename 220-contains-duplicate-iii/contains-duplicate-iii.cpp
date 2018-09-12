// Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.
//
//
// Example 1:
//
//
// Input: nums = [1,2,3,1], k = 3, t = 0
// Output: true
//
//
//
// Example 2:
//
//
// Input: nums = [1,0,1,1], k = 1, t = 2
// Output: true
//
//
//
// Example 3:
//
//
// Input: nums = [1,5,9,1,5,9], k = 2, t = 3
// Output: false
//
//
//
//


class Solution {
public:
    bool containsNearbyAlmostDuplicate(vector<int>& nums, int k, int t) {
        if (t < 0) return false;
        unordered_map<long, long> m;
#define BIN(i, t) (i < 0 ? (i+1)/(t+1)-1 : i/(t+1))
        for (int i = 0; i < nums.size(); ++i) {
            int b = BIN(nums[i], t);
            if (m.find(b) != m.end()) {
                return true;
            }
            if (m.find(b-1) != m.end() && abs(nums[i] - m[b-1]) <= t) {
                return true;
            }
            if (m.find(b+1) != m.end() && abs(nums[i] - m[b+1]) <= t) {
                return true;
            }
            m[b] = nums[i];

            if (i >= k) {
                m.erase(BIN(nums[i-k], t));
            }
        }
        return false;
    }
};

