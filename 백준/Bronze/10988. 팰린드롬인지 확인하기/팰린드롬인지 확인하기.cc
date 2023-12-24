#include <bits/stdc++.h>
using namespace std;

string s;

int main() {
	cin >> s;
	
	int left = 0;
	int right = s.size() - 1;
	
	while (left < right) {
		if (s[left++] != s[right--]) {
			cout << 0;
			return 0;
		}
	}
	
	cout << 1;

	return 0;
}