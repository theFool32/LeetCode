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
