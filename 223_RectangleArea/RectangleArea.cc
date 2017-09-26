class Solution {
public:
    int computeArea(int A, int B, int C, int D, int E, int F, int G, int H) {
        /*
        //my solution
        //not work for odd test data
        auto overlap = [](int a, int b, int c, int d) {
            int l = max(a,c);
            int r = min(b,d);
            return (r-l) > 0 ? r-l : 0;
        };
        int w = overlap(A,C, E,G);
        int h = overlap(B,D, F,H);
        return w*h;
        */

        //from
        //https://discuss.leetcode.com/topic/17705/just-another-short-way
        int left = max(A,E), right = max(min(C,G), left);
        int bottom = max(B,F), top = max(min(D,H), bottom);
        return (C-A)*(D-B) - (right-left)*(top-bottom) + (G-E)*(H-F);
    }
};
