// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
//
// Your algorithm should run in O(n) complexity.
//
// Example:
//
//
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
//
//


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

