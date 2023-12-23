#include <bits/stdc++.h>
using namespace std;

int a[9];
int sum;
vector<int> v;
vector<int> v2;

void solve() {
	for (int i = 0; i < 9; i++) {
		for (int j = i + 1; j < 9; j++) {
			if (sum - a[i] - a[j] == 100) {
				v.push_back(i);
				v.push_back(j);
				return;
			}
		}
	}
}

int main() {
	for (int i = 0; i < 9; i++) {
		cin >> a[i];
		sum += a[i];
	}
	
	solve();
	
	for (int i = 0; i < 9; i++) {
		if (v[0] == i || v[1] == i) continue;
		v2.push_back(a[i]);
	}
	sort(v2.begin(), v2.end());
	for (int i : v2) cout << i << "\n";

	return 0;
}