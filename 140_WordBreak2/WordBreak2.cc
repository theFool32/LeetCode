class Solution {
public:
    unordered_map<string, vector<string>> m;
    vector<string> bt(const string &s, unordered_set<string>& wordDict) {
        if (m.find(s) != m.end()) return m[s];
        if (!s.size()) return {""};

        m[s] = vector<string>();
        for (int i = 1;i <= s.size();++i) {
            string sub = s.substr(0,i);
            if (wordDict.find(sub) == wordDict.end()) continue;
            for (string tail : bt(s.substr(i), wordDict)) {
                m[s].push_back(sub + (tail == "" ? "" : ' ' + tail));
            }
        }
        return m[s];
    };

    vector<string> wordBreak(string s, unordered_set<string>& wordDict) {
        return bt(s, wordDict);
    }
};
