// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
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
// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
//
//
// Example 2:
//
//
// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
//
//
// Example 3:
//
//
// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false
//
//


class Solution {
public:
    bool wordBreak(string s, unordered_set<string>& wordDict) {
        int size = s.size();
        if (!size) return true;
        vector<bool> dp(size+1, false);
        dp[0] = true;

        for (int i = 1; i <= size; ++i) {
            for (int j = i-1; j >= 0; --j) {
                if (!dp[j]) continue;
                if (wordDict.find(s.substr(j, i-j)) != wordDict.end()) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[size];
    }
};

