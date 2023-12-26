#include <bits/stdc++.h>
using namespace std;

int N, M, num, ret;
vector<int> v;

int main() {
	cin >> N >> M;
	for (int i = 0; i < N; i++) {
		cin >> num;
		v.push_back(num);
	}
	
	for (int i = 0; i < N; i++) {
		for (int j = i + 1; j < N; j++) {
			if (v[i] + v[j] == M) ret++;
		}
	}
	
	cout << ret << "\n";

	return 0;
}