/**
 * Definition for a point.
 * struct Point {
 *     int x;
 *     int y;
 *     Point() : x(0), y(0) {}
 *     Point(int a, int b) : x(a), y(b) {}
 * };
 */
class Solution {
public:
    int gcd(int a, int b) {
        if (a * b == 0) return a+b;
        a = abs(a); b = abs(b);
        if (b > a) {int t = a; a = b; b = t;}
        if (a % b == 0) return b;
        while (a % b) {
            int t = a % b;
            a = b;
            b = t;
        }
        return b;
    }
    string HASH(Point a, Point b) {
        // x(y1-y2)+y(x2-x1)=x2y1-x1y2
        // use 3 coefficients to represent a line
        int x1, y1, x2, y2;
        if (a.y >= b.y) {
            y1 = a.y; x1 = a.x;
            y2 = b.y; x2 = b.x;
        } else {
            y2 = a.y; x2 = a.x;
            y1 = b.y; x1 = b.x;
        }
        stringstream ss;
        int m = y1-y2, n = x2-x1, k = x2*y1-x1*y2;
        int g = max(gcd(m, gcd(n, k)), 1);
        m /= g;  n /= g; k /= g;
        if (m == 0 && n < 0) {
            n = -n; k = -k;
        } else if (m == 0 && n == 0 && k < 0) {
            k = -k;
        }
        ss << m << " " << n << " " << k;
        return ss.str();
    }
    int maxPoints(vector<Point>& points) {
        if (points.size() <= 2) return points.size();
        int ans = 0;
        for (int i = 0; i < points.size(); ++i) {
            unordered_map<string, int> h;
            int temp_ans = 0;
            int same = 0;
            for (int j = i+1; j < points.size(); ++j) {
                if (points[j].x==points[i].x && points[j].y==points[i].y) {
                    ++same;
                    continue;
                }
                string s = HASH(points[i], points[j]);
                ++h[s];
                temp_ans = max(temp_ans, h[s]);
            }
            ans = max(ans, temp_ans+same+1);
        }
        return ans;
    }
};
