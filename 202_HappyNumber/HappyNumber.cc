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
