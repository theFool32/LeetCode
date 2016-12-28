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
