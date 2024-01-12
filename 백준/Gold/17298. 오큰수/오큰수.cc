#include <bits/stdc++.h>
using namespace std;

int n, el, idx, num;
int nge[1000004];
stack<pair<int, int>> stk;

int main() {
	cin >> n;
	for (int i = 1; i <= n; i++) {
		cin >> el;
		if (stk.empty()) stk.push({i, el});
		else if (stk.top().second >= el) stk.push({i, el});
		else {
			while (!stk.empty() && stk.top().second < el) {
				tie(idx, num) = stk.top();
				stk.pop();
				
				nge[idx] = el;
			}
			stk.push({i, el});
		}
	}
	
	while (!stk.empty()) {
		tie(idx, num) = stk.top();
		stk.pop();

		nge[idx] = -1;
	}
	for (int i = 1; i <= n; i++) {
		cout << nge[i] << " ";
	}
	return 0;
}