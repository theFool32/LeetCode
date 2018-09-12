// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.
//
// Note:
//
//
// 	The same word in the dictionary may be reused multiple times in the segmentation.
// 	You may assume the dictionary does not contain duplicate words.
//
//
// Example 1:
//
//
// Input:
// s = "catsanddog"
// wordDict = ["cat", "cats", "and", "sand", "dog"]
// Output:
// [
//   "cats and dog",
//   "cat sand dog"
// ]
//
//
// Example 2:
//
//
// Input:
// s = "pineapplepenapple"
// wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
// Output:
// [
//   "pine apple pen apple",
//   "pineapple pen apple",
//   "pine applepen apple"
// ]
// Explanation: Note that you are allowed to reuse a dictionary word.
//
//
// Example 3:
//
//
// Input:
// s = "catsandog"
// wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output:
// []
//


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

