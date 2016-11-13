/**
 * Definition for undirected graph.
 * struct UndirectedGraphNode {
 *     int label;
 *     vector<UndirectedGraphNode *> neighbors;
 *     UndirectedGraphNode(int x) : label(x) {};
 * };
 */
class Solution {
public:
    map<int, UndirectedGraphNode*> nodeMap;
    UndirectedGraphNode *cloneGraph(UndirectedGraphNode *node) {
        if (!node) return nullptr;
        if (nodeMap.find(node->label) != nodeMap.end()) {
            return nodeMap[node->label];
        }
        UndirectedGraphNode *clone = new UndirectedGraphNode(node->label);
        nodeMap[node->label] = clone;
        for (auto neighbor : node->neighbors) {
            clone->neighbors.push_back(cloneGraph(neighbor));
        }
        return clone;
    }
};
