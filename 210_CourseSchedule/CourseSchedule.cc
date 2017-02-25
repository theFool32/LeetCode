class Solution {
public:
    vector<int> findOrder(int numCourses, vector<pair<int, int>>& prerequisites) {
        vector<vector<int>> inGraph(numCourses, vector<int>());
        vector<vector<int>> outGraph(numCourses, vector<int>());
        vector<int> ans;
        vector<bool> okCourse(numCourses, true);

        for (auto&& prerequisite : prerequisites) {
            outGraph[prerequisite.first].push_back(prerequisite.second);
            inGraph[prerequisite.second].push_back(prerequisite.first);
            okCourse[prerequisite.first] = false;
            okCourse[prerequisite.second] = false;
        }
        for (int i = 0; i < okCourse.size(); ++i) {
            if (okCourse[i]) ans.push_back(i);
        }
        while (true) {
            bool changed = false;
            for (int i = 0; i < numCourses; ++i) {
                if (okCourse[i]) continue;

                if (inGraph[i].empty()) {
                    okCourse[i] = true;
                    ans.push_back(i);
                    for (int j = 0; j < outGraph[i].size(); ++j) {
                        changed = true;
                        auto it = find(std::begin(inGraph[outGraph[i][j]]), std::end(inGraph[outGraph[i][j]]), i);
                        if (it != std::end(inGraph[outGraph[i][j]])) {
                            inGraph[outGraph[i][j]].erase(it);
                        }
                    }
                }
            }
            if (!changed) {
                break;
            }
        }
        for (int i = 0; i < numCourses; ++i) {
            if (!okCourse[i]) return vector<int>();
        }
        reverse(ans.begin(), ans.end());
        return ans;
    }
};
