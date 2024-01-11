#include <bits/stdc++.h>
using namespace std;

int n, m, bd[104][104], total_hour, left_cheeze;
bool visited[104][104];
int dy[] = {-1, 0, 1, 0}, dx[] = {0, 1, 0, -1};
vector<pair<int, int>> v;

void bfs(int y, int x) {
	visited[y][x] = true;
	queue<pair<int, int>> q;
	q.push({y, x});

	while (q.size()) {
		tie(y, x) = q.front();
		q.pop();

		if (bd[y][x] == 1) {
			v.push_back({y, x});
			continue;
		}
		
		for (int i = 0; i < 4; i++) {
			int ny = y + dy[i];
			int nx = x + dx[i];
			if (ny < 0 || nx < 0 || ny >= n || nx >= m || visited[ny][nx]) continue;

			visited[ny][nx] = true;
			q.push({ny, nx});
		}
	}
	return;
}

int main() {
	cin >> n >> m;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			cin >> bd[i][j];
		}
	}
	
	while (true) {
		fill(&visited[0][0], &visited[0][0] + 104 * 104, false);
		v.clear();

		bfs(0, 0);
		left_cheeze = v.size();
		for (auto it : v) {
			bd[it.first][it.second] = 0;
		}
		
		bool cheeze_exists = false;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				if (bd[i][j] != 0) cheeze_exists = true;
			}
		}
		total_hour++;
		if (!cheeze_exists) break;
	}
	cout << total_hour << "\n" << left_cheeze << "\n";

	return 0;
}