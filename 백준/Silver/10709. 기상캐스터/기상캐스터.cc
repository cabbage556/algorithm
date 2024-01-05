#include <bits/stdc++.h>
using namespace std;

int h, m, k;
int joi[104][104];
string s;

int main() { 
	cin >> h >> m;
	for (int i = 0; i < h; i++) {
		cin >> s;
		for (int j = 0; j < m; j++) {
			if (s[j] == 'c') joi[i][j] = 0;
			else joi[i][j] = -1;
		}
	}
	
	for (int i = 0; i < h; i++) {
		k = -1;
		for (int j = 0; j < m; j++) {
			if (joi[i][j] == 0) {
				k = j;
				continue;
			}
			if (j == 0) {
				joi[i][j] = -1;
				continue;
			}
			
			if (k != -1) joi[i][j] = j - k;
		}
	}

	for (int i = 0; i < h; i++) {
		for (int j = 0; j < m; j++) {
			cout << joi[i][j] << " ";
		}
		cout << "\n";
	}

	return 0;
}