// Implement strStr().
//
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// Example 1:
//
//
// Input: haystack = "hello", needle = "ll"
// Output: 2
//
//
// Example 2:
//
//
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
//
//
// Clarification:
//
// What should we return when needle is an empty string? This is a great question to ask during an interview.
//
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
//


class Solution {
public:
    int strStr(string haystack, string needle) {
        int lh = haystack.size();
        int ln = needle.size();
        if (ln == 0) return 0;
        if (lh < ln) return -1;
        int *next = new int[ln];
        next[0] = -1;
        int k = - 1;
        int j = 0;
        while (j < ln-1) {
            if (k==-1 || needle[k] == needle[j]) {
                ++k;
                ++j;
                next[j] = k;
            } else {
                k = next[k];
            }
        }
        
        k = 0; j = 0;
        while (k < lh && j < ln) {
            if (j == -1 || haystack[k] == needle[j]) {
                ++j; ++k;
            } else {
                j = next[j];
            }
        }
        if (j == ln) return k-j;
        return -1;
    }
};
