// Compare two version numbers version1 and version2.
// If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.
//
// You may assume that the version strings are non-empty and contain only digits and the . character.
// The . character does not represent a decimal point and is used to separate number sequences.
// For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
//
// Example 1:
//
//
// Input: version1 = "0.1", version2 = "1.1"
// Output: -1
//
// Example 2:
//
//
// Input: version1 = "1.0.1", version2 = "1"
// Output: 1
//
// Example 3:
//
//
// Input: version1 = "7.5.2.4", version2 = "7.5.3"
// Output: -1
//


class Solution {
public:
    int compareVersion(string version1, string version2) {
        int i = 0, j = 0;
        int l1 = version1.size();
        int l2 = version2.size();
        if (!l1) return -1;
        if (!l2) return 1;

        int v1 = 0, v2 = 0;
        while (i < l1 || j < l2) {
            v1 = 0;  v2 = 0;

            while (i < l1 && version1[i] != '.') v1 = v1*10 + version1[i++]-'0';
            while (j < l2 && version2[j] != '.') v2 = v2*10 + version2[j++]-'0';

            if (v1 > v2) return 1;
            if (v1 < v2) return -1;
            ++i; ++j;
        }
        return 0;
    }
};

