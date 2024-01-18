#include <bits/stdc++.h> 
using namespace std;

int n, scv[3];
int visited[64][64][64]; // 최대체력 60 + 4
int dmg[6][3] = { 
	// 데미지 9, 3, 1 경우의 수 6가지
	{9, 3, 1},
	{9, 1, 3},
	{3, 9, 1},
	{3, 1, 9},
	{1, 3, 9},
	{1, 9, 3}
};
struct Pos {
	int scv1, scv2, scv3;
};
queue<Pos> q;

int bfs(Pos pos) {
	visited[pos.scv1][pos.scv2][pos.scv3] = 1;
	q.push(pos);

	while (!q.empty()) {
		int scv1 = q.front().scv1;
		int scv2 = q.front().scv2;
		int scv3 = q.front().scv3;
		q.pop();
		
		for (int i = 0; i < 6; i++) {
			// 음수 인덱스 방지
			int nscv1 = max(0, scv1 - dmg[i][0]);
			int nscv2 = max(0, scv2 - dmg[i][1]);
			int nscv3 = max(0, scv3 - dmg[i][2]);
			if (visited[nscv1][nscv2][nscv3]) continue;

			visited[nscv1][nscv2][nscv3] = visited[scv1][scv2][scv3] + 1;
			q.push({nscv1, nscv2, nscv3});
		}
	}
	
	return visited[0][0][0] - 1;
}

int main(){
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> scv[i];
	}
	
	// scv의 체력: 좌표
	// 입력 좌표가 좌표 (0, 0, 0)까지 도달하는 데 최단거리 계산
	cout << bfs({scv[0], scv[1], scv[2]}) << "\n";

	return 0;
}