#include <bits/stdc++.h>
using namespace std;

vector<int> v;
vector<int> v2;
int h;

void print(vector<int> vec) {
	for (int i : vec) cout << i << "\n";
}

void combi(int start, vector<int> vec) {
	if (vec.size() == 7) {
		int sum = accumulate(vec.begin(), vec.end(), 0);
		if (sum == 100) {
			print(vec);
			exit(0);
		}
	}
	
	for (int i = start + 1; i < 9; i++) {
		vec.push_back(v[i]);
		combi(i, vec);
		vec.pop_back();
	}

	return;
}

int main() {
	for (int i = 0; i < 9; i++) {
		cin >> h;
		v.push_back(h);
	}
	sort(v.begin(), v.end());
	combi(-1, v2);

	return 0;
}