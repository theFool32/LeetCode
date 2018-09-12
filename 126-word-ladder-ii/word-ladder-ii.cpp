// Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:
//
//
// 	Only one letter can be changed at a time
// 	Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
//
//
// Note:
//
//
// 	Return an empty list if there is no such transformation sequence.
// 	All words have the same length.
// 	All words contain only lowercase alphabetic characters.
// 	You may assume no duplicates in the word list.
// 	You may assume beginWord and endWord are non-empty and are not the same.
//
//
// Example 1:
//
//
// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]
//
// Output:
// [
//   ["hit","hot","dot","dog","cog"],
//   ["hit","hot","lot","log","cog"]
// ]
//
//
// Example 2:
//
//
// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
//
// Output: []
//
// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
//
//
//
//
//


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
        // current.push_back(beginWord);
        current.insert(beginWord);
        while (!current.empty() && !found) {
            for (const auto &x : current) {
                wordList.erase(x);
                // showup.insert(x);
            }
            for (auto &x: current) {
                for (int i = 0;i < x.size();++i) {
                    for (char j = 'a'; j <= 'z'; ++j) {
                        if (x[i] == j) continue;
                        string temp = x;
                        temp[i] = j;
                        if (temp == endWord) found = true;
                        if (wordList.find(temp) != wordList.end()
                                // && showup.find(temp) == showup.end()
                                ) {
                            // next.push_back(temp);
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

