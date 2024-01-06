#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

int n, cnt;

int main() { 
	cin >> n;
	for (ll i = 666; i <= LLONG_MAX; i++) {
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