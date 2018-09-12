//
// Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.
//
// Note:
//
//
// 	All numbers will be positive integers.
// 	The solution set must not contain duplicate combinations.
//
//
// Example 1:
//
//
// Input: k = 3, n = 7
// Output: [[1,2,4]]
//
//
// Example 2:
//
//
// Input: k = 3, n = 9
// Output: [[1,2,6], [1,3,5], [2,3,4]]
//
//
//


class Solution {
public:
    vector<vector<int> > res;
    vector<int> current;
    int sum(vector<int> c) {
        int s = 0;
        for (auto &n : c) s += n;
        return s;
    }
    void dfs(int i, int k, int n) {
        /*
        cout << i << endl;
        for (auto &nn : current) cout << nn << ",";
        cout << endl;
        */
        if (i > 9 || current.size() == k) {
            if (current.size() !=k) return;
            if (sum(current) == n) res.push_back(current);
            return;
        }
        if (sum(current) >= n) return;
        for (int j = i;j <= 9;++j) {
            current.push_back(j);
            dfs(j+1, k, n);
            current.pop_back();
            
            //dfs(j+1, k, n);
        }
    }
    vector<vector<int>> combinationSum3(int k, int n) {
        dfs(1, k, n);
        return res;
    }
};
