class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int len = numbers.size();
        int l = 0, r = len-1;
        while (l<=r) {
            int t = numbers[l]+numbers[r];
            if (t == target) {
                return vector<int>{l+1, r+1};
            }
            if (t < target) {
                ++l;
            } else {
                --r;
            }
        }
        return vector<int>{-1,-1};
    }
};
