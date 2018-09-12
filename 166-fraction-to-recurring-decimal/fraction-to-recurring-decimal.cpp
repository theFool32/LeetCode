// Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
//
// If the fractional part is repeating, enclose the repeating part in parentheses.
//
// Example 1:
//
//
// Input: numerator = 1, denominator = 2
// Output: "0.5"
//
//
// Example 2:
//
//
// Input: numerator = 2, denominator = 1
// Output: "2"
//
// Example 3:
//
//
// Input: numerator = 2, denominator = 3
// Output: "0.(6)"
//
//


class Solution {
public:
    string fractionToDecimal(int numerator, int denominator) {
        string ans;
        long long n = numerator;
        long long d = denominator;
        if (n * d < 0) ans += '-';
        n = abs(n);
        d = abs(d);
        ans += to_string(n/d);
        if (n % d == 0) return ans;

        ans += '.';
        unordered_map<int, int> map;
        for (long long r = n%d; r ; r %= d) {
            if (map[r] > 0) {
                ans.insert(map[r], 1, '(');
                ans += ')';
                return ans;
            }
            map[r] = ans.size();
            r *= 10;

            ans += to_string(r / d);
        }
        return ans;
    }
};

