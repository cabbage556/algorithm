#include <bits/stdc++.h>
using namespace std;

int t, m, n, k, y, x;
int ret;
int field[54][54], visited[54][54];

int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};

void dfs(int y, int x) {
	visited[y][x] = 1;

	for (int i = 0; i < 4; i++) {
		int ny = y + dy[i];
		int nx = x + dx[i];
		if (ny < 0 || nx < 0 || ny >= n || nx >= m || field[ny][nx] == 0) continue;
		if (visited[ny][nx]) continue;
		
		dfs(ny, nx);
	}
}

int main() {
	cin >> t;

	for (int i = 0; i < t; i++) {
		cin >> m >> n >> k;

		for (int j = 0; j < k; j++) {
			cin >> x >> y;
			field[y][x] = 1;
		}
		
		for (int j = 0; j < n; j++) {
			for (int l = 0; l < m; l++) {
				if (field[j][l] == 1 && visited[j][l] == 0) {
					dfs(j, l);
					ret++;
				}
			}
		}
		cout << ret << "\n";
		memset(field, 0, sizeof(field));
		memset(visited, 0, sizeof(visited));
		ret = 0;
	}
	
	return 0;
}