#include <bits/stdc++.h>
using namespace std;

int n, el, idx, num;
int nge[1000004];
stack<pair<int, int>> stk;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	fill(nge, nge + 1000004, -1);

	cin >> n;
	for (int i = 1; i <= n; i++) {
		cin >> el;
		while (!stk.empty() && stk.top().second < el) {
			tie(idx, num) = stk.top();
			stk.pop();
			nge[idx] = el;
		}
		stk.push({i, el});
	}
	
	for (int i = 1; i <= n; i++) {
		cout << nge[i] << " ";
	}
	return 0;
}