// Given a string s, partition s such that every substring of the partition is a palindrome.
//
// Return all possible palindrome partitioning of s.
//
// Example:
//
//
// Input: "aab"
// Output:
// [
//   ["aa","b"],
//   ["a","a","b"]
// ]
//
//


class Solution {
public:
    bool isPalindrome(string s) {
        for (int i = 0, len = s.size(); i < len/2; ++i) {
            if (s[i] != s[len-1-i]) return false;
        }
        return true;
    }
    vector<vector<string>> partition(string s) {
        vector<vector<string>> ans;
        for (int i = 1;i <= s.size();++i) {
            string substring = s.substr(0, i);
            if (!isPalindrome(substring)) continue;
            vector<vector<string>> subAns = partition(s.substr(i));
            for (int j = 0; j < subAns.size(); ++j) {
                subAns[j].insert(subAns[j].begin(), substring);
                ans.push_back(subAns[j]);
            }
            if (subAns.size() == 0) {
                ans.push_back(vector<string>(1,substring));
            }
        }
        return ans;
    }
};

