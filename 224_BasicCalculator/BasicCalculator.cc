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
        old += (cur * op);
        return old;
    }
};
