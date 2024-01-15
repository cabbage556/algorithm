#include <bits/stdc++.h>
using namespace std;

int n, m;
char mp[54][54];
int visited[54][54];
int dy[] = {-1, 0, 1, 0}, dx[] = {0, 1, 0, -1};

int bfs(int y, int x) {
	int dist = 0;
	queue<pair<int, int>> q;
	q.push({y, x});
	visited[y][x] = true;
	
	while (!q.empty()) {
		auto pos = q.front();
		q.pop();

		for (int i = 0; i < 4; i++) {
			int ny = pos.first + dy[i];
			int nx = pos.second + dx[i];
			if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
			if (visited[ny][nx] || mp[ny][nx] == 'W') continue;

			visited[ny][nx] = visited[pos.first][pos.second] + 1;
			dist = max(dist, visited[ny][nx]);
			q.push({ny, nx});
		}
	}
	return dist;
}

int solve() {
	int hour = -1;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			if (mp[i][j] == 'L') hour = max(hour, bfs(i, j));
			fill(&visited[0][0], &visited[0][0] + 54 * 54, false);
		}
	}
	return hour;
}

int main() {
	cin >> n >> m;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			// 육지: L, 바다: W
			scanf(" %c", &mp[i][j]);
		}
	}
	
	cout << solve() - 1 << "\n";

	return 0;
}