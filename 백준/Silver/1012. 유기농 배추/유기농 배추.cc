#include <bits/stdc++.h>
using namespace std;

int t, m, n, k, x, y;
int farm[54][54];
bool visited[54][54];
int dy[] = {-1, 0, 1, 0}, dx[] = {0, 1, 0, -1};

void dfs(int y, int x) {
	visited[y][x] = true;

	for (int i = 0; i < 4; i++) {
		int ny = y + dy[i];
		int nx = x + dx[i];
		if (ny < 0 || ny > n || nx < 0 || nx > m || visited[ny][nx] || farm[ny][nx] == 0) continue;

		dfs(ny, nx);
	}
}
	
int solve() {
	int cnt = 0;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			if (!visited[i][j] && farm[i][j] == 1) {
				dfs(i, j);
				cnt++;
			}
		}
	}
	return cnt;
}

int main() {
	cin >> t;
	for (int i = 0; i < t; i++) {
		cin >> m >> n >> k;
		
		for (int j = 0; j < k; j++) {
			cin >> x >> y;
			farm[y][x] = 1;
		}
		
		cout << solve() << "\n";
		fill(&visited[0][0], &visited[0][0] + 54 * 54, false);
		fill(&farm[0][0], &farm[0][0] + 54 * 54, 0);
	}

	return 0;
}