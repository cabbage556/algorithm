#include <bits/stdc++.h>
using namespace std;

int N, M;
map<string, int> mp1;
map<int, string> mp2;
string s;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	cin >> N >> M;
	
	for (int i = 1; i <= N; i++) {
		cin >> s;

		mp1.insert({s, i});
		mp2.insert({i, s});
	}
	
	for (int i = 0; i < M; i++) {
		cin >> s;

		int pk = atoi(s.c_str());
		if (pk == 0) {
			cout << mp1[s] << "\n";
		} else {
			cout << mp2[pk] << "\n";
		}
	}

	return 0;
}