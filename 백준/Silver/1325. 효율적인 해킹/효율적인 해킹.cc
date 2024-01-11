#include <bits/stdc++.h>
using namespace std;

int n, m, com1, com2, mx;
vector<int> coms[10004];
vector<int> ret;
bool visited[10004];

int dfs(int node) {
	visited[node] = true;
	int cnt = 1;

	for (int there : coms[node]) {
		if (visited[there]) continue;
		cnt += dfs(there);
	}
	
	return cnt;
}

int main() {
	cin >> n >> m;
	for (int i = 0; i < m; i++) {
		cin >> com1 >> com2;
		coms[com2].push_back(com1);
	}
	
	for (int i = 1; i <= n; i++) {
		fill(visited, visited + 10004, false);
		int cnt = dfs(i);
		ret.push_back(cnt);
		mx = max(mx, cnt);
	}
	
	for (int i = 0; i < ret.size(); i++) {
		if (ret[i] == mx) cout << i + 1 << " ";
	}
	
	return 0;
}