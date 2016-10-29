//From discuss
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int s1 = 0,
            s2 = 0,
            b1 = -1<<31,
            b2 = -1<<31;
        for (auto i : prices) {
            b1 = std::max(b1, -i);
            s1 = std::max(s1, b1+i);
            b2 = std::max(b2, s1-i);
            s2 = std::max(s2, b2+i);
        }
        return s2;
    }
};
