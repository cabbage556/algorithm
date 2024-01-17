#include <bits/stdc++.h>
using namespace std;

typedef pair<int, int> pii;

int n, l, r, pop_sum;
int pop[54][54];
bool visited[54][54];
int dy[] = {-1, 0, 1, 0}, dx[] = {0, 1, 0, -1};
vector<pii> v;

void dfs(int y, int x) {
	for (int i = 0; i < 4; i++) {
		int ny = y + dy[i];
		int nx = x + dx[i];
		if (ny < 0 || nx < 0 || ny >= n || nx >= n || visited[ny][nx]) continue;
		
		int diff = abs(pop[ny][nx] - pop[y][x]);
		if (diff < l || diff > r) continue;
		
		visited[ny][nx] = true;
		v.push_back({ny, nx});
		pop_sum += pop[ny][nx];
		dfs(ny, nx);
	}
}

int solve() {
	int cnt = 0;
	while (true) {
		
		fill(&visited[0][0], &visited[0][0] + 54 * 54, false);

		bool flag = false;
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if(!visited[i][j]) {
					v.clear();
					visited[i][j] = true;
					v.push_back({i, j});
					pop_sum = pop[i][j];
					dfs(i, j);					
					
					if (v.size() == 1) continue;
					else flag = true;
					for (pii pos : v) {
						pop[pos.first][pos.second] = pop_sum / v.size();
					}
				}
			}
		}
		if (!flag) break;

		cnt++;
	}
	
	return cnt;
}

int main() {
	cin >> n >> l >> r;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cin >> pop[i][j];
		}
	}
	
	cout << solve() << "\n";

	return 0;
}