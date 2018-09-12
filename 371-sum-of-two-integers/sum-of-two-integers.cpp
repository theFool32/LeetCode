// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
//
//
// Example 1:
//
//
// Input: a = 1, b = 2
// Output: 3
//
//
//
// Example 2:
//
//
// Input: a = -2, b = 3
// Output: 1
//
//
//
//


class Solution {
public:
    int getSum(int a, int b) {
        if (a == 0) return b;
        if (b == 0) return a;
        int s = a ^ b;
        int c = (a&b) << 1;
        while (c) {
            int t = s ^ c;
            c = (s&c) << 1;
            s = t;
        }
        return s;
    }
};
