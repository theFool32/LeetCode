// Given a list of non negative integers, arrange them such that they form the largest number.
//
// Example 1:
//
//
// Input: [10,2]
// Output: "210"
//
// Example 2:
//
//
// Input: [3,30,34,5,9]
// Output: "9534330"
//
//
// Note: The result may be very large, so you need to return a string instead of an integer.
//


class Solution {
public:
    string largestNumber(vector<int>& nums) {
        auto cmp = [](int a, int b) {
            string sa = to_string(a);
            string sb = to_string(b);
            return sa+sb > sb+sa;
        };
        sort(nums.begin(), nums.end(), cmp);
        stringstream ss;
        for (auto&& i : nums) {
            ss << i;
        }
        string ans = ss.str();
        size_t i = 0;
        while (ans[i] == '0' && i < ans.size()-1) {
            ++i;
        }
        return ans.substr(i);
    }
};

