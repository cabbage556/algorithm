#include <bits/stdc++.h> 
using namespace std;

typedef pair<int, int> pii;

const int max_rc = 1004, INF = 10000000;
int r, c, ret;
char miro[max_rc][max_rc];
int fire[max_rc][max_rc], person[max_rc][max_rc];
int dy[] = {-1, 0, 1, 0}, dx[] = {0, 1, 0, -1};
pii jh;
queue<pii> q;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);

	fill(&fire[0][0], &fire[0][0] + max_rc * max_rc, INF);

	cin >> r >> c;
	for (int i = 0; i < r; i++) {
		for (int j = 0; j < c; j++) {
			cin >> miro[i][j];
			if (miro[i][j] == 'J') {
				jh.first = i;
				jh.second = j;
			} else if (miro[i][j] == 'F') {
				fire[i][j] = 1;
				q.push({i, j});
			}
		}
	}
	
	int y = 0, x = 0;
	while (!q.empty()) {
		tie(y, x) = q.front();
		q.pop();

		for (int i = 0; i < 4; i++) {
			int ny = y + dy[i];
			int nx = x + dx[i];
			if (ny < 0 || ny >= r || nx < 0 || nx >= c) continue;
			if (miro[ny][nx] == '#' || fire[ny][nx] != INF) continue;
			
			// 불의 최단거리 계산
			fire[ny][nx] = fire[y][x] + 1;
			q.push({ny, nx});
		}
	}
	
	person[jh.first][jh.second] = 1;
	q.push({jh.first, jh.second});
	while (!q.empty()) {
		tie(y, x) = q.front();
		q.pop();
		
		// 가장자리에 도달했다면 탈출
		if (y == r - 1 || y == 0 || x == c - 1 || x == 0) {
			ret = person[y][x];
			break;
		}
		
		for (int i = 0; i < 4; i++) {
			int ny = y + dy[i];
			int nx = x + dx[i];
			if (ny < 0 || ny >= r || nx < 0 || nx >= c) continue;
			if (miro[ny][nx] == '#' || person[ny][nx]) continue;
			
			// 불의 최단거리, 지훈이의 최단거리 비교
			//     지훈이가 y, x에 도달하기까지의 최단거리가 더 크다면 이동 불가능
			if (fire[ny][nx] <= person[y][x] + 1) continue;
			
			person[ny][nx] = person[y][x] + 1;
			q.push({ny, nx});
		}
	}
	
	if (ret) cout << ret << "\n";
	else cout << "IMPOSSIBLE\n";

	return 0;
}