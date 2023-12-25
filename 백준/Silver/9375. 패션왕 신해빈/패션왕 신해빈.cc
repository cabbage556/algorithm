#include <bits/stdc++.h>
using namespace std;

int t, n;
string c, kind;

int main() {
	cin >> t;
	for (int i = 0; i < t; i++) {
		cin >> n;
		
		map<string, long long> mp;
		for (int j = 0; j < n; j++) {
			cin >> c >> kind;
			mp[kind]++;
		}
		
		long long ret = 1;
		for (auto it : mp) {
			ret *= (it.second + 1); // 옷의 종류 + 1(아무것도 입지 않는 경우)
		}
		ret--; // 아무것도 입지 않는 경우의 수만 제거
		
		cout << ret << "\n";
	}

	return 0;
}