// There are a total of n courses you have to take, labeled from 0 to n-1.
//
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
//
// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
//
// Example 1:
//
//
// Input: 2, [[1,0]] 
// Output: true
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0. So it is possible.
//
// Example 2:
//
//
// Input: 2, [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.
//
//
// Note:
//
//
// 	The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
// 	You may assume that there are no duplicate edges in the input prerequisites.
//
//


class Solution {
public:
    bool canFinish(int numCourses, vector<pair<int, int>>& prerequisites) {
        vector<vector<int>> inGraph(numCourses, vector<int>());
        vector<vector<int>> outGraph(numCourses, vector<int>());
        vector<bool> okCourse(numCourses, true);

        for (auto&& prerequisite : prerequisites) {
            outGraph[prerequisite.first].push_back(prerequisite.second);
            inGraph[prerequisite.second].push_back(prerequisite.first);
            okCourse[prerequisite.first] = false;
            okCourse[prerequisite.second] = false;
        }
        while (true) {
            bool changed = false;
            for (int i = 0; i < numCourses; ++i) {
                if (okCourse[i]) continue;

                if (inGraph[i].empty()) {
                    okCourse[i] = true;
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
            if (!okCourse[i]) return false;
        }
        return true;
    }
};

