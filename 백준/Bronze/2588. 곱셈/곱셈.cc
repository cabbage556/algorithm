#include <bits/stdc++.h>
using namespace std;

int a, b[3];
string s;

int main() {
	cin >> a >> s;
	for (int i = 0;i < 3; i++) {
		b[i] = s[i] - '0';
	}

	int pw = 0, sum = 0;
	for (int i = 2; i >= 0; i--) {
		cout << a * b[i] << "\n";
		sum += a * (b[i] * (int) pow(10, pw++));
	}
	cout << sum << "\n";

	return 0;
}