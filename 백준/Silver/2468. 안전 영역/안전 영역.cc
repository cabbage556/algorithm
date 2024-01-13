#include <bits/stdc++.h>
using namespace std;

int n, min_height, max_height;
int area[104][104];
bool visited[104][104];
int dy[] = {-1, 0, 1, 0}, dx[] = {0, 1, 0, -1};

void dfs(int y, int x, int height) {
	visited[y][x] = true;

	for (int i = 0; i < 4; i++) {
		int ny = y + dy[i];
		int nx = x + dx[i];
		if (ny < 0 || ny >= n || nx < 0 || nx >= n || visited[ny][nx] || area[ny][nx] <= height) continue;
		
		dfs(ny, nx, height);
	}
}

int solve() {
	int cnt = 0;
	for (int height = min_height; height <= max_height; height++) {
		int cnt2 = 0;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (!visited[i][j] && area[i][j] > height) {
					dfs(i, j, height);
					cnt2++;
				}
			}
		}
		cnt = max(cnt, cnt2);
		fill(&visited[0][0], &visited[0][0] + 104 * 104, false);
	}
	return cnt;
}

int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cin >> area[i][j];
			min_height = min(area[i][j], min_height);
			max_height = max(area[i][j], max_height);
		}
	}
	
	cout << solve() << "\n";

	return 0;
}