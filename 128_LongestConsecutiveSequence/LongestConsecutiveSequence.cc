class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> set(nums.begin(), nums.end());
        int ans = 0;
        int current = 0;
        while (!set.empty()) {
            int x = (*set.begin());
            current += 1;
            set.erase(x);
            int temp = x-1;
            while (set.find(temp) != set.end()) {
                ++current;
                set.erase(temp);
                --temp;
            }
            temp = x+1;
            while (set.find(temp) != set.end()) {
                ++current;
                set.erase(temp);
                ++temp;
            }
            ans = std::max(ans, current);
            current = 0;
        }

        return ans;
    }
};
