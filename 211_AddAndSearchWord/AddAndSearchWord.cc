struct Node {
    Node(char ch):character(ch) { }
    char character;
    vector<Node*> next;
};

const char endChar = 1;
class WordDictionary {
public:
    /** Initialize your data structure here. */
    WordDictionary() {
        head = new Node(endChar);
    }

    ~WordDictionary() {
        del(head);
    }
    
    /** Adds a word into the data structure. */
    void addWord(string word) {
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
    
    /** Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. */
    bool search(string word) {
        word += endChar;
        return _search(word, head);
    }

private:
    Node *head;

    bool _search(string word, Node *n) {
        Node *p = n;
        for (int i = 0; i < word.size(); ++i) {
            char ch = word[i];
            int index=0;
            if (ch == '.') {
                string newWord = word.substr(i+1);
                for (;index < p->next.size();++index) {
                    if (_search(newWord, p->next[index])) return true;
                }
                return false;
            }
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

    void del(Node *h) {
        for (auto&& p : h->next) {
            del(p);
        }
        delete h;
    }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.addWord(word);
 * bool param_2 = obj.search(word);
 */
