#include <bits/stdc++.h> 
using namespace std;

const int max_nk = 200004;
int n, k, visited[max_nk], pre[max_nk];
vector<int> v;

int bfs(int here) {
	visited[here] = 1;
	queue<int> q;
	q.push(here);
	
	while (!q.empty()) {
		here = q.front();
		q.pop();
		
		if (here == k) break;
		
		int mv[3] = {here - 1, here + 1, here * 2};
		for (int there : mv) {
			if (there < 0 || there >= max_nk) continue;
			if (visited[there]) continue;
			
			pre[there] = here;
			visited[there] = visited[here] + 1;
			q.push(there);
		}
	}
	
	return visited[k] - 1;
}

int main(){
	cin >> n >> k;
	if (n == k) {
		cout << 0 << "\n";
		cout << k << "\n";
		return 0;
	}

	cout << bfs(n) << "\n";

	for (int i = k; i != n; i = pre[i]) v.push_back(i);
	v.push_back(n);
	reverse(v.begin(), v.end());
	for (int i : v) cout << i << " ";

	return 0;
}