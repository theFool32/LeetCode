class MinStack {
public:
    MinStack() {
    }
    
    void push(int x) {
        m_stack.push(x);
        if (m_minStack.empty() || m_minStack.top() >= x) m_minStack.push(x);
    }
    
    void pop() {
        int t = m_stack.top();
        m_stack.pop();
        if (t == m_minStack.top()) m_minStack.pop();
    }
    
    int top() {
        return m_stack.top();
    }
    
    int getMin() {
        return m_minStack.top();
    }

private:
    stack<int> m_stack;
    stack<int> m_minStack;
};
