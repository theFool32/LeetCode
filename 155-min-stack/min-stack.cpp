//
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
//
// push(x) -- Push element x onto stack.
//
//
// pop() -- Removes the element on top of the stack.
//
//
// top() -- Get the top element.
//
//
// getMin() -- Retrieve the minimum element in the stack.
//
//
//
//
// Example:
//
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.
//
//


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

