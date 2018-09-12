// All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
//
// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
//
// Example:
//
//
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
//
// Output: ["AAAAACCCCC", "CCCCCAAAAA"]
//
//


class Solution {
public:
    vector<string> findRepeatedDnaSequences(string s) {
        vector<string> ans;
        unordered_map<string, int> m;
        for (int i = 0; i+9 < s.size(); ++i) {
            string sub = s.substr(i, 10);
            ++m[sub];
        }
        for (auto&& p : m) {
            if (p.second > 1) {
                ans.push_back(p.first);
            }
        }
        return ans;
    }
};

