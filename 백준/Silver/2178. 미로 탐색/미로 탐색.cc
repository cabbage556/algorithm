#include <bits/stdc++.h>
using namespace std;

int n, m;
int miro[104][104], visited[104][104];

int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};

void bfs(int y, int x) {
	queue<pair<int, int>> q;
	q.push({y, x});
	visited[y][x] = 1;
	
	while (q.size()) {
		tie(y, x) = q.front();
		q.pop();

		for (int i = 0; i < 4; i++) {
			int ny = y + dy[i];
			int nx = x + dx[i];
			
			if (ny < 0 || nx < 0 || ny > n || nx > m) continue;
			if (miro[ny][nx] == 0) continue;
			if (visited[ny][nx] > 0) continue;

			visited[ny][nx] = visited[y][x] + 1;
			q.push({ny, nx});
		}
	}
}

int main() {
	scanf("%d %d", &n, &m);
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= m; j++) {
			scanf("%1d", &miro[i][j]);
		}
	}
	
	bfs(1, 1);
	cout << visited[n][m] << "\n";
	
	return 0;
}