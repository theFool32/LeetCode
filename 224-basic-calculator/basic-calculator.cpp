// Implement a basic calculator to evaluate a simple expression string.
//
// The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces  .
//
// Example 1:
//
//
// Input: "1 + 1"
// Output: 2
//
//
// Example 2:
//
//
// Input: " 2-1 + 2 "
// Output: 3
//
// Example 3:
//
//
// Input: "(1+(4+5+2)-3)+(6+8)"
// Output: 23
// Note:
//
//
// 	You may assume that the given expression is always valid.
// 	Do not use the eval built-in library function.
//
//


class Solution {
public:
    int calculate(string s) {
        stack<int> scale;
        int ss = 1;
        int old = 0;
        int cur = 0;
        int op = 1;

        for (auto&& c : s) {
            if (c == ' ') continue;
            if (isdigit(c)) {
                cur *= 10;
                cur += (c-'0');
            } else {
                old += (cur * op * ss);
                cur = 0;
                switch (c) {
                    case '+':
                        op = 1;
                        break;
                    case '-':
                        op = -1;
                        break;
                    case '(':
                        scale.push(op);
                        ss *= op;
                        op = 1;
                        break;
                    case ')':
                        ss *= scale.top();
                        scale.pop();
                        break;
                    default:
                        break;
                }
            }
        }
        // stop = 1;
        // if (!scale.empty()) stop = scale.top();
        // old += (cur * op * stop);
        old += (cur * op);
        return old;
    }
};

