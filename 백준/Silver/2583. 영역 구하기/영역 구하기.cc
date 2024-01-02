#include <bits/stdc++.h>
using namespace std;

int m, n, k, ly, lx, ry, rx, cnt;
int sq[104][104];
bool visited[104][104];
int dy[] = {-1, 0, 1, 0}, dx[] = {0, 1, 0, -1};
vector<int> area;

void bfs(int y, int x) {
	int cnt = 0;
	visited[y][x] = true;
	queue<pair<int, int>> q;
	q.push({y, x});
	
	while (q.size()) {
		tie(y, x) = q.front();
		q.pop();
		cnt++;

		for (int i = 0; i < 4; i++) {
			int ny = y + dy[i];
			int nx = x + dx[i];
			if (ny < 0 || nx < 0 || ny >= m || nx >= n || sq[ny][nx] == 0) continue;
			if (visited[ny][nx]) continue;

			visited[ny][nx] = true;
			q.push({ny, nx});
		}
	}

	area.push_back(cnt);
}

int main() {
	fill(&sq[0][0], &sq[0][0] + 104 * 104, 1);
	cin >> m >> n >> k;
	for (int i = 0; i < k; i++) {
		cin >> lx >> ly >> rx >> ry;
		
		for (int j = ly; j < ry; j++) {
			for (int l = lx; l < rx; l++) {
				sq[j][l] = 0;
			}
		}
	}
	
	for (int i = 0; i < m; i++) {
		for (int j = 0; j < n; j++) {
			if (sq[i][j] == 1 && !visited[i][j]) {
				bfs(i, j);
				cnt++;
			}
		}
	}
	cout << cnt << "\n";
	
	sort(area.begin(), area.end());
	for (int i : area) cout << i << ' ';
}