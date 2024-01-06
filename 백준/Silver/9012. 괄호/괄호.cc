#include <bits/stdc++.h>
using namespace std;

int t;
string s;

int main() { 
	cin >> t;
	for (int i = 0; i < t; i++) {
		cin >> s;

		stack<char> stk;
		bool right = true;
		for (char c : s) {
			if (c == '(') stk.push(c);
			else if (!stk.empty()) stk.pop();
			else {
				right = false;
				break;
			}
		}
		
		if (!right) cout << "NO\n";
		else if (!stk.empty()) cout << "NO\n";
		else cout << "YES\n";
	}

	return 0;
}