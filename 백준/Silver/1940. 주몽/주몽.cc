#include <bits/stdc++.h>
using namespace std;

int N, M, num, ret;
int l, r;
vector<int> v;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	cin >> N >> M;
	for (int i = 0; i < N; i++) {
		cin >> num;
		v.push_back(num);
	}
	sort(v.begin(), v.end());
	
	r = v.size() - 1;
	while (l < r) {
		int sum = v[l] + v[r];
		if (sum < M) l++;
		else if (sum > M) r--;
		else {
			ret++;
			l++;
			r--;
		}
	}
	
	cout << ret << "\n";

	return 0;
}