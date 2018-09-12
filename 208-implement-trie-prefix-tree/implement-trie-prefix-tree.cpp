// Implement a trie with insert, search, and startsWith methods.
//
// Example:
//
//
// Trie trie = new Trie();
//
// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");   
// trie.search("app");     // returns true
//
//
// Note:
//
//
// 	You may assume that all inputs are consist of lowercase letters a-z.
// 	All inputs are guaranteed to be non-empty strings.
//
//


struct Node {
    Node(char ch):character(ch) { }
    char character;
    vector<Node*> next;
};

const char endChar = 1;
class Trie {
public:
    /** Initialize your data structure here. */
    Trie() {
        head = new Node(endChar);
    }
    
    /** Inserts a word into the trie. */
    void insert(string word) {
        word += endChar;
        Node *p = head;
        for (auto&& ch : word) {
            int index=0;
            for (;index < p->next.size();++index) {
                if (p->next[index]->character == ch) break;
            }
            if (index != p->next.size()) {
                p = p->next[index];
            } else {
                p->next.push_back(new Node(ch));
                p = p->next[p->next.size()-1];
            }
        }
    }
    
    /** Returns if the word is in the trie. */
    bool search(string word) {
        word += endChar;
        return startsWith(word);
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    bool startsWith(string prefix) {
        Node *p = head;
        for (auto&& ch : prefix) {
            int index=0;
            for (;index < p->next.size();++index) {
                if (p->next[index]->character == ch) break;
            }
            if (index != p->next.size()) {
                p = p->next[index];
            } else {
                return false;
            }
        }
        return true;
    }

private:
    Node *head;
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * bool param_2 = obj.search(word);
 * bool param_3 = obj.startsWith(prefix);
 */

