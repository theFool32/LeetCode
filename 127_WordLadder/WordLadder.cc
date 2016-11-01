class Solution {
public:
    int ladderLength(string beginWord, string endWord, unordered_set<string>& wordList) {
        if (beginWord == endWord) return 0;
        std::queue<string> q;
        std::unordered_map<string, int> level;
        q.push(beginWord);
        level[beginWord] = 1;
        while (!q.empty()) {
            string p = q.front();
            q.pop();
            for (int i = 0;i < p.size();++i) {
                string pp = p;
                for (char l = 'a'; l <= 'z'; ++l) {
                    if (p[i] == l) continue;
                    pp[i] = l;
                    if (pp == endWord) return level[p]+1;
                    if (wordList.find(pp) != wordList.end() && level[pp]==0) {
                        q.push(pp);
                        level[pp] = level[p]+1;
                    }
                }
            }
        }
        return 0;
    }
};
