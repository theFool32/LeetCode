//
// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
//
//
//
// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
//
//
// Follow up:
// Could you do both operations in O(1) time complexity?
//
// Example:
//
// LRUCache cache = new LRUCache( 2 /* capacity */ );
//
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4
//
//


struct Node {
    int key;
    int value;
};

class LRUCache{
public:
    LRUCache(int capacity) {
        m_capacity = capacity;
    }
    
    int get(int key) {
        if (m_map.find(key) == m_map.end()) {
            return -1;
        }
        int value = m_map[key].first;
        m_list.push_front({key, value});
        m_list.erase(m_map[key].second);
        m_map[key].second = m_list.begin();
        return value;
    }
    
    void set(int key, int value) {
        if (m_map.find(key) == m_map.end()) {
            m_list.push_front({key, value});
            m_map[key] = make_pair(value, m_list.begin());
            if (m_list.size() > m_capacity) {
                m_map.erase(m_list.back().key);
                m_list.pop_back();
            }
            return;
        }
        m_list.push_front({key, value});
        m_list.erase(m_map[key].second);
        m_map[key].first = value;
        m_map[key].second = m_list.begin();
    }

private:
    list<Node> m_list;
    unordered_map<int, pair<int, list<Node>::iterator>> m_map;
    int m_capacity;
};

