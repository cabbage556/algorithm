#include <bits/stdc++.h>
using namespace std;

int A, B, C;
int cnt[104];
int a, b;

int main() {
	cin >> A >> B >> C;
	
	for (int i = 0; i < 3; i++) {
		cin >> a >> b;
		for (int j = a; j < b; j++) {
			cnt[j]++;
		}
	}
	
	int sum = 0;
	for (int i = 1; i < 100; i++) {
		if (cnt[i] == 1) sum += A;
		else if (cnt[i] == 2) sum += 2 * B;
		else if (cnt[i] == 3) sum += 3 * C;
	}

	cout << sum << "\n";

	return 0;
}