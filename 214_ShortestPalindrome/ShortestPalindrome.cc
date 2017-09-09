class Solution {
public:
    string shortestPalindrome(string s) {
        string res(s);
        reverse(res.begin(), res.end());
        for (int i = 0;i < res.length();++i) {
            if (res.substr(i) == s.substr(0,s.length()-i)) {
                return res.substr(0,i) + s;
            }
        }
        return res + s;
    }
};
