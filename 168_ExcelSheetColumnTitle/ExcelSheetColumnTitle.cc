class Solution {
public:
    string convertToTitle(int n) {
        string ans;
        while(n) {
            ans += (--n)%26+'A';
            n /= 26;
        }
        reverse(ans.begin(), ans.end());
        return ans;
    }
};
