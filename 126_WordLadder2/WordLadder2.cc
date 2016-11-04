class Solution {
public:
    void dfs(vector<vector<string>> &result, unordered_map<string, vector<string>> &father,
            vector<string> &current, string &from, string &now) {
        current.push_back(now);
        if (now == from) {
            result.push_back(current);
            reverse(result.back().begin(), result.back().end());
            current.pop_back();
            return;
        }
        for (auto &x : father[now]) {
            dfs(result, father, current, from, x);
        }
        current.pop_back();
    }

    vector<vector<string>> findLadders(string beginWord, string endWord, unordered_set<string> &wordList) {
        vector<vector<string>> result;
        if (beginWord == endWord) return result;
        unordered_map<string, vector<string>> father;
        unordered_set<string> current, next;
        bool found = false;
        current.insert(beginWord);
        while (!current.empty() && !found) {
            for (const auto &x : current) {
                wordList.erase(x);
            }
            for (auto &x: current) {
                for (int i = 0;i < x.size();++i) {
                    for (char j = 'a'; j <= 'z'; ++j) {
                        if (x[i] == j) continue;
                        string temp = x;
                        temp[i] = j;
                        if (temp == endWord) found = true;
                        if (wordList.find(temp) != wordList.end()) {
                            next.insert(temp);
                            father[temp].push_back(x);
                        }
                    }
                }
            }

            current.clear();
            swap(current, next);
        }
        if (found) {
            vector<string> c;
            dfs(result, father, c, beginWord, endWord);
        }
        return result;
    }
};
