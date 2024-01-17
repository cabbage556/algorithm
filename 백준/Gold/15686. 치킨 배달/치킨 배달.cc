#include <bits/stdc++.h>
using namespace std;

typedef pair<int, int> pii;

int n, m;
int city[54][54];
vector<pii> c, h;

int getDistance(pii home, pii chicken) {
	return abs(home.first - chicken.first) + abs(home.second - chicken.second);
}

int solve(vector<int> v) {
	int dist_sum = 0;
	for (pii pos : h) {
		int dist = 100;
		for (int i : v) {
			dist = min(dist, getDistance(pos, c[i]));
			if (dist == 1) break;
		}
		dist_sum += dist;
	}
	return dist_sum;
}

int combi(int start, vector<int> v) {
	int min_dist = INT_MAX;
	if (v.size() == m) {
		return solve(v);
	}
	
	for (int i = start + 1; i < c.size(); i++) {
		v.push_back(i);
		min_dist = min(min_dist, combi(i, v));
		v.pop_back();
	}
	return min_dist;
}

int main() {
	cin >> n >> m;
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= n; j++) {
			cin >> city[i][j];
			if (city[i][j] == 1) h.push_back({i, j});
			else if (city[i][j] == 2) c.push_back({i, j});
		}
	}
	
	vector<int> v;
	cout << combi(-1, v) << "\n";

	return 0;
}