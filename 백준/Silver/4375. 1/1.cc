#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

int n;

int main() {
	while (cin >> n) {
		ll num = 1, ret = 1;

		while (true) {
			if (num % n == 0) {
				cout << ret << "\n";
				break;
			} else {
				// 1 -> 11 -> 111 -> 1111
				num = num * 10 + 1;
				num %= n;
				ret++;
			}
		}
	}

	return 0;
}