#include <bits/stdc++.h> 
using namespace std;

const int max_n = 100004;
int n, k, visited[max_n], cnt[max_n];

int bfs(int here) {
	visited[here] = 1;
	queue<int> q;
	q.push(here);
	
	while (q.size()) {
		here = q.front();
		q.pop();
		
		int mv[3] = {here - 1, here + 1, here * 2};
		for (int there : mv) {
			if (there < 0 || there > 100000) continue;
			
			if (visited[there] == visited[here] + 1) cnt[there] += cnt[here];
			if (visited[there]) continue;
			
			visited[there] = visited[here] + 1;
			cnt[there] += cnt[here];
			q.push(there);
		}
	}

	return visited[k] - 1;
}

int main(){
	cin >> n >> k;
	if (n == k) {
		cout << 0 << "\n";
		cout << 1 << "\n";
		return 0;
	}
	cnt[n] = 1;
	cout << bfs(n) << "\n";
	cout << cnt[k] << "\n";

	return 0;
}