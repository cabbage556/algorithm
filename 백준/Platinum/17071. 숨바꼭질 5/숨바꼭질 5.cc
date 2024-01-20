#include <bits/stdc++.h>
using namespace std;

const int max_nk = 500000; 
int n, k, turn = 1, ret = -1;
int visited[2][max_nk + 1];

void bfs(int here) {
	visited[0][n] = 1;
    queue<int> q;
    q.push(here);
    
    while (!q.empty()) {
        k += turn;

        if (k > max_nk) {
			return;
		}
        if (visited[turn % 2][k]) {
			ret = turn;
			return;
		}
        
        int q_size = q.size();
        for (int i = 0; i < q_size; i++) {
            here = q.front();
            q.pop();

            for (int there : {here + 1, here - 1, here * 2}) {
                if (there < 0 || there > max_nk) continue;
                if (visited[turn % 2][there]) continue;
                
                visited[turn % 2][there] = visited[(turn + 1) % 2][here] + 1;
				if (there == k) {
					ret = turn;
					return;
				}
                q.push(there);
            }
        }
        turn++;
    }
}

int main() {
    cin >> n >> k;
    if (n == k) {
        cout << 0 << "\n";
        return 0;
    }

	bfs(n);
	cout << ret << "\n";

    return 0;
}
