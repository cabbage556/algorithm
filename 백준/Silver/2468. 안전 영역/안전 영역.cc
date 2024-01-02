#include <bits/stdc++.h>
using namespace std;

int n, max_height, min_height, ret;
int area[104][104];
bool visited[104][104];
int dy[] = {-1, 0, 1, 0};
int dx[] = {0, 1, 0, -1};

void dfs(int y, int x, int height) {
	visited[y][x] = true;

	for (int i = 0; i < 4; i++) {
		int ny = y + dy[i];
		int nx = x + dx[i];
		if (ny < 0 || nx < 0 || ny >= n || nx >= n || area[ny][nx] <= height) continue;
		if (visited[ny][nx]) continue;

		visited[ny][nx] = true;
		dfs(ny, nx, height);
	}
}

int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cin >> area[i][j];
			max_height = max(max_height, area[i][j]);
			min_height = min(min_height, area[i][j]);
		}
	}
	
	for (int height = min_height; height <= max_height; height++) {
		int safe = 0;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (area[i][j] > height && !visited[i][j]) {
					dfs(i, j, height);
					safe++;
				}
			}
		}
		ret = max(ret, safe);
		memset(visited, 0, sizeof(visited));
	}
	cout << ret << "\n";
	
	return 0;
}