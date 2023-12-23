#include <bits/stdc++.h>
using namespace std;

int k;
int m;
int sum;
stack<int> stk;

int main() {
	cin >> k;
	while (k--) {
		cin >> m;
		if (m == 0) stk.pop();
		else stk.push(m);
	}
	
	while (stk.size()) {
		sum += stk.top();
		stk.pop();
	}
	cout << sum << "\n";

	return 0;
}