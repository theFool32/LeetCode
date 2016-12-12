class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> s;
        for (auto it = tokens.begin(); it != tokens.end(); ++it) {
            if ((*it) == "+" || (*it) == "-" || (*it) == "*" || (*it) == "/") {
                int b = s.top(); s.pop();
                int a = s.top(); s.pop();
                if ((*it) == "+")
                    s.push(a + b);
                else if ((*it) == "-")
                    s.push(a - b);
                else if ((*it) == "*")
                    s.push(a * b);
                else if ((*it) == "/")
                    s.push(a / b);
            } else {
                s.push(stoi((*it)));
            }
        }
        return s.top();
    }
};
