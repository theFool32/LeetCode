// Given a 2D board and a list of words from the dictionary, find all words in the board.
//
// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
//
// Example:
//
//
// Input: 
// words = ["oath","pea","eat","rain"] and board =
// [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ]
//
// Output: ["eat","oath"]
//
//
// Note:
// You may assume that all inputs are consist of lowercase letters a-z.


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

    ~Trie() {
        del(head);
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
    
    Node* getNext(char c, Node *p) {
        int index=0;
        for (;index < p->next.size();++index) {
            if (p->next[index]->character == c) return p->next[index];
        }
        return nullptr;
    }

    inline Node* getHead() {
        return head;
    }

private:
    Node *head;

    void del(Node *h) {
        for (auto&& p : h->next) {
            del(p);
        }
        delete h;
    }
};


class Solution {
public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        trie = new Trie();
        for (auto&& word : words) {
            trie->insert(word);
        }
        set<string> ans;
        Node *head = trie->getHead();
        for (int x = 0; x < board.size(); ++x) {
            for (int y = 0; y < board[0].size(); ++y) {
                _findWords(board, x, y, head, "", ans);
            }
        }
        vector<string> actual_ans;
        for (auto&& a : ans) {
            actual_ans.push_back(a);
        }
        return actual_ans;
    }

private:
    Trie *trie;
    void _findWords(vector<vector<char>> &board, int x, int y, Node* p, string word, set<string> &ans) {
        if (x < 0 || x >= board.size() || y < 0 || y >= board[0].size() || board[x][y] == 0) {
            return;
        }

        if ((p=trie->getNext(board[x][y], p))) {
            word += board[x][y];
            if (trie->getNext(endChar, p)) {
                ans.insert(word);
            }

            char c = board[x][y];
            board[x][y] = 0;
            _findWords(board, x+1, y, p, word, ans);
            _findWords(board, x-1, y, p, word, ans);
            _findWords(board, x, y-1, p, word, ans);
            _findWords(board, x, y+1, p, word, ans);
            board[x][y] = c;
        }
    }
};

