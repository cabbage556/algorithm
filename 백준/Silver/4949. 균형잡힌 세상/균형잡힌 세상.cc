#include <bits/stdc++.h>
using namespace std;

string s;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	while (true) {
		getline(cin, s);
		if (s == ".") break;
		
		stack<char> stk;
		bool balanced = true;
		for (int i = 0; i < s.size(); i++) {
			char c = s[i];
			if (c == '(' || c == '[') {
				stk.push(c);
			} else if (c == ')') {
				if (!stk.empty() && stk.top() == '(') stk.pop();
				else {
					balanced = false;
					break;
				}
			} else if (c == ']') {
				if (!stk.empty() && stk.top() == '[') stk.pop();
				else {
					balanced = false;
					break;
				}
			}
		}
		
		if (!balanced || !stk.empty()) cout << "no\n";
		else cout << "yes\n";
	}
	return 0;
}