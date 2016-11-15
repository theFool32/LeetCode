class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int ans=0;
        for (int i = 0, size=nums.size();i<size;++i) {
            ans ^= nums[i];
        }
        return ans;
    }
};
