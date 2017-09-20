//https://discuss.leetcode.com/topic/25794/17-line-o-n-log-n-time-o-n-space-c-accepted-easy-solution-w-explanations
class Solution {
public:
    vector<pair<int, int>> getSkyline(vector<vector<int>>& buildings) {
        multimap<int, int> coords;
        for (auto&& building : buildings) {
            coords.emplace(building[0], building[2]);
            coords.emplace(building[1], -building[2]);
        }

        multiset<int> heights = {0};
        map<int, int> corners;
        for (auto&& p : coords) {
            if (p.second > 0) {
                heights.insert(p.second);
            } else {
                heights.erase(heights.find(-p.second));
            }
            corners[p.first] = *heights.rbegin();
        }
        auto eq2nd = [](pair<int, int> l, pair<int, int> r){ return l.second == r.second;  };
		vector<pair<int, int>> results;
		unique_copy(corners.begin(), corners.end(), back_insert_iterator<vector<pair<int, int>>>(results), eq2nd);

        return results;
    }
};
