#include <bits/stdc++.h>
using namespace std;

int n, c, m;
map<int, int> mp_cnt, mp_first;
vector<pair<int, int>> v;

bool cmp(pair<int, int> a, pair<int, int> b) {
	// 등장횟수가 같은 경우 등장순서 빠른 순서로 정렬
	if (a.second == b.second) {
		return mp_first[a.first] < mp_first[b.first];
	}
	
	// 등장횟수 많은 순서로 정렬
	return a.second > b.second;
}


int main() {
	cin >> n >> c;
	for (int i = 0; i < n; i++) {
		cin >> m;
		
		mp_cnt[m]++; // 값 : 등장횟수
		if (mp_first[m] == 0) mp_first[m] = i + 1; // 값 : 등장순서
	}
	// it.first : 값
	// it.second : 등장횟수
	for (auto it : mp_cnt) v.push_back({it.first, it.second});
	
	sort(v.begin(), v.end(), cmp);
	for (auto it : v) {
		for (int i = 0; i < it.second; i++) cout << it.first << " ";
	}
	
	return 0;
}