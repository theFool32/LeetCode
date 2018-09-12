// Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.
//
// Example 1:
//
//
// Input: "aacecaaa"
// Output: "aaacecaaa"
//
//
// Example 2:
//
//
// Input: "abcd"
// Output: "dcbabcd"
//


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
