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
