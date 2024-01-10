#include <bits/stdc++.h>
using namespace std;

int n, m, lab[10][10], ret;
bool visited[10][10];
int dy[] = {-1, 0, 1, 0}, dx[] = {0, 1, 0, -1};
vector<pair<int, int>> v_list, e_list;

void dfs(int y, int x) {
	visited[y][x] = true;
	for (int i = 0; i < 4; i++) {
		int ny = y + dy[i];
		int nx = x + dx[i];
		if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
		if (visited[ny][nx] || lab[ny][nx] == 1) continue;

		visited[ny][nx] = true;
		dfs(ny, nx);
	}
	return;
}

int get_cnt() {
	fill(&visited[0][0], &visited[9][10], false);
	for (auto it : v_list) {
		dfs(it.first, it.second);
	}
	
	int cnt = 0;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			if (lab[i][j] == 0 && !visited[i][j]) cnt++;
		}
	}
	return cnt;
}

int main() {
	cin >> n >> m;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			cin >> lab[i][j];

			if (lab[i][j] == 0) e_list.push_back({i, j});
			else if (lab[i][j] == 2) v_list.push_back({i, j});
		}
	}

	// 세 가지 경우의 수
	for (int i = 0; i < e_list.size(); i++) {
		for (int j = i + 1; j < e_list.size(); j++) {
			for (int k = j + 1; k < e_list.size(); k++) {
				auto e1 = e_list[i];
				auto e2 = e_list[j];
				auto e3 = e_list[k];
				lab[e1.first][e1.second] = 1;
				lab[e2.first][e2.second] = 1;
				lab[e3.first][e3.second] = 1;

				ret = max(ret, get_cnt());

				lab[e1.first][e1.second] = 0;
				lab[e2.first][e2.second] = 0;
				lab[e3.first][e3.second] = 0;
			}
		}
	}
	cout << ret << "\n";
	return 0;
}