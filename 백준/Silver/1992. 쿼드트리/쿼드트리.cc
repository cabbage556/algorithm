#include <bits/stdc++.h>
using namespace std;

int n;
char img[70][70];

string quad(int y, int x, int size) {
	string ret = "";
	char first = img[y][x];
	for (int i = y; i < y + size; i++) {
		for (int j = x; j < x + size; j++) {
			if (first != img[i][j]) {
				ret += "(";
				ret += quad(y, x, size / 2); // 왼쪽 위 절반씩
				ret += quad(y, x + size / 2, size / 2); // 오른쪽 위 절반씩
				ret += quad(y + size / 2, x, size / 2); // 왼쪽 아래 절반씩
				ret += quad(y + size / 2, x + size / 2, size / 2); // 오른쪽 아래 절반씩
				ret += ")";
				return ret;
			}
		}
	}

	return string(1, first);
}

int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			scanf(" %c", &img[i][j]);
		}
	}
	cout << quad(0, 0, n) << "\n";
	return 0;
}