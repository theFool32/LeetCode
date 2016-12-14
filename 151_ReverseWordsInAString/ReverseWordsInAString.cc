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
            for (k = 0; k < (j-i)/2; ++k) {
                char c = s[i+k];
                s[i+k] = s[j-k-1];
                s[j-k-1] = c;
            }
            i = j-1;
        }
    }
};
