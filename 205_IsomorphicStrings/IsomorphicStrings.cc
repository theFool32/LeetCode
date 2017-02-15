class Solution {
public:
    bool isIsomorphic(string s, string t) {
        vector<int> s2t(256, -1);
        vector<int> t2s(256, -1);
        
        for (int i = 0; i < s.length(); ++i) {
            if (s2t[s[i]] != -1 && s2t[s[i]] != t[i]) {
                return false;
            }
            if (t2s[t[i]] != -1 && t2s[t[i]] != s[i]) {
                return false;
            }
            s2t[s[i]] = t[i];
            t2s[t[i]] = s[i];
        }
        return true;
    }
};
