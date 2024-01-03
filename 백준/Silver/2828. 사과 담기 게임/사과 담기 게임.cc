#include <bits/stdc++.h>
using namespace std;

int n, m, j, apple, ret;
int l = 1, r;

int main() {
	cin >> n >> m >> j;
	for (int i = 0; i < j; i++) {
		cin >> apple;
		r = l + m - 1;

		if (apple >= l && apple <= r) continue; // 현재 바구니가 위치한 곳에 떨어지는 경우
		if (apple < l) {
			ret += (l - apple);
			l = apple;
		} else {
			l += (apple - r);
			ret += (apple - r);
		}
	}
	cout << ret << "\n";
	
	return 0;
}