// Write an algorithm to determine if a number is "happy".
//
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
//
// Example: 
//
//
// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
//
//


class Solution {
public:
    unordered_map<int, bool> m;

    bool isHappy(int n) {
        if (m.find(n) != m.end()) return m[n];
        int sum = 0;
        int save_n = n;
        while (n) {
            int t = n % 10;
            sum += t*t;
            n /= 10;
        }
        if (sum == 1) {
            return m[save_n] = true;
        }
        m[save_n] = false;
        return isHappy(sum);
    }
};

