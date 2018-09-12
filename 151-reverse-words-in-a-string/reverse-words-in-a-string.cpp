// Given an input string, reverse the string word by word.
//
// Example:  
//
//
// Input: "the sky is blue",
// Output: "blue is sky the".
//
//
// Note:
//
//
// 	A word is defined as a sequence of non-space characters.
// 	Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// 	You need to reduce multiple spaces between two words to a single space in the reversed string.
//
//
// Follow up: For C programmers, try to solve it in-place in O(1) space.
//


class Solution {
public:
    void reverseWords(string &s) {
        auto b = s.begin();
        while ((*b) == ' ') ++b;
        s.erase(s.begin(), b);
        b = s.end(); --b;
        while ((*b) == ' ') --b;
        s.erase(++b, s.end());
        int i, j, k;
        for (i = 1; i < s.size();) {
            if (s[i] == ' ' && s[i-1] == ' ') {
                s.erase(i, 1);
            } else {
                ++i;
            }
        }
        reverse(s.begin(), s.end());
        for (i = 0; i < s.size(); ++i) {
            if (s[i] == ' ') continue;
            for (j = i+1; j < s.size(); ++j) {
                if (s[j] == ' ') break;
            }
            for (int k = 0; k < (j-i)/2; ++k) {
                char c = s[i+k];
                s[i+k] = s[j-k-1];
                s[j-k-1] = c;
            }
            i = j-1;
        }
    }
};

