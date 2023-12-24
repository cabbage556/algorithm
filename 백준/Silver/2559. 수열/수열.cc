#include <bits/stdc++.h>
using namespace std;

int n, k, temp;
int psum[100004];
vector<int> sums;

int main() {
	cin >> n >> k;
	
	for (int i = 1; i <= n; i++) {
		cin >> temp;
		psum[i] = psum[i - 1] + temp;
	}

	for (int i = 0; i <= n - k; i++) {
		sums.push_back(psum[i + k] - psum[i]);
	}
	
	sort(sums.begin(), sums.end());
	cout << sums[sums.size() - 1] << "\n";

	return 0;
}