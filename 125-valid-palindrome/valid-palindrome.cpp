// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
// Note: For the purpose of this problem, we define empty string as valid palindrome.
//
// Example 1:
//
//
// Input: "A man, a plan, a canal: Panama"
// Output: true
//
//
// Example 2:
//
//
// Input: "race a car"
// Output: false
//
//


class Solution {
public:
    bool isPalindrome(string s) {
        if (s.size() == 0) return true;

        int l = 0, r = s.size()-1;
        while (l < r) {
            if (!std::isalnum(s[l])) {
                ++l;
                continue;
            }
            if (!std::isalnum(s[r])) {
                --r;
                continue;
            }
            if (std::tolower(s[l]) != std::tolower(s[r])) return false;

            ++l; --r;
        }
        return true;
    }
};

