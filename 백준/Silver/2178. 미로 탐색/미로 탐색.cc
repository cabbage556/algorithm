#include <bits/stdc++.h>
using namespace std;

int n, m;
int miro[104][104], cnt[104][104];
int dy[] = {-1, 0, 1, 0}, dx[] = {0, 1, 0, -1};

void bfs(int y, int x) {
	cnt[y][x] = 1;
	queue<pair<int, int>> q;
	q.push({y, x});
	
	while (!q.empty()) {
		tie(y, x) = q.front();
		q.pop();

		for (int i = 0; i < 4; i++) {
			int ny = y + dy[i];
			int nx = x + dx[i];
			if (ny < 0 || ny > n || nx < 0 || nx > m || cnt[ny][nx] > 0 || miro[ny][nx] == 0) continue;

			cnt[ny][nx] = cnt[y][x] + 1;
			q.push({ny, nx});
		}
	}
}

int main() {
	cin >> n >> m;
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= m; j++) {
			scanf("%1d", &miro[i][j]);
		}
	}
	
	bfs(1, 1);
	cout << cnt[n][m] << "\n";

	return 0;
}