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
