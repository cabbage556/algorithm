#include <bits/stdc++.h>
using namespace std;

const int max_nk = 500000; 
int n, k, turn = 1;
bool visited[2][max_nk + 1];

int bfs(int here) {
	visited[0][n] = true;
    queue<int> q;
    q.push(here);    

    while (!q.empty()) {
        k += turn;

        if (k > max_nk) {
			break;
		}
        if (visited[turn % 2][k]) {
			return turn;
		}
        
        int q_size = q.size();
        for (int i = 0; i < q_size; i++) {
            here = q.front();
            q.pop();

            for (int there : {here + 1, here - 1, here * 2}) {
				if (there == k) {
					return turn;
				}
                if (there < 0 || there > max_nk) continue;
                if (visited[turn % 2][there]) continue;
                
                visited[turn % 2][there] = true;
                q.push(there);
            }
        }
        turn++;
    }
	
	return -1;
}

int main() {
    cin >> n >> k;
    if (n == k) {
        cout << 0 << "\n";
        return 0;
    }

	cout << bfs(n) << "\n";

    return 0;
}
