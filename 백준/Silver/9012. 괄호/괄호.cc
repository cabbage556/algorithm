#include <bits/stdc++.h>
using namespace std;

int t;
string s;

int main() { 
	cin >> t;
	for (int i = 0; i < t; i++) {
		cin >> s;

		stack<char> stk;
		for (int j = 0; j < s.size(); j++) {
			char c = s[j];
			if (stk.size() == 0) {
				stk.push(c);
				continue;
			}
			
			if (stk.top() == '(' && c == ')') stk.pop();
			else stk.push(c);
		}
		
		if (stk.size()) cout << "NO" << "\n";
		else cout << "YES" << "\n";
	}

	return 0;
}