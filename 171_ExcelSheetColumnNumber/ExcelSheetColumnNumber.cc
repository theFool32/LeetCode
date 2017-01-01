class Solution {
public:
    int titleToNumber(string s) {
        int ans = 0;
        for (auto& i : s) {
            ans = ans*26 + i-'A'+1;
        }
        return ans;
    }
};
