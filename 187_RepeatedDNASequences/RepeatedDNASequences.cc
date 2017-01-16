class Solution {
public:
    vector<string> findRepeatedDnaSequences(string s) {
        vector<string> ans;
        unordered_map<string, int> m;
        for (int i = 0; i+9 < s.size(); ++i) {
            string sub = s.substr(i, 10);
            ++m[sub];
        }
        for (auto&& p : m) {
            if (p.second > 1) {
                ans.push_back(p.first);
            }
        }
        return ans;
    }
};
