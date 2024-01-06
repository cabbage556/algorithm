#include <bits/stdc++.h>
using namespace std;

int n, cnt;

int main() { 
	cin >> n;
	for (int i = 666; i <= INT_MAX; i++) {
		string s = to_string(i);
		if (s.find("666") != string::npos) {
			cnt++;
		}
		
		if (cnt == n) {
			cout << s << "\n";
			break;
		}
	}

	return 0;
}