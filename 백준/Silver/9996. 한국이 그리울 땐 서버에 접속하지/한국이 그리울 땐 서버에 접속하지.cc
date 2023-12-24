#include <bits/stdc++.h>
using namespace std;

int n;
string pt, s, pre, suf;

int main() {
	cin >> n >> pt;
	
	int pos = pt.find("*");
	pre = pt.substr(0, pos);
	suf = pt.substr(pos + 1);
	
	for (int i = 0; i < n; i++) {
		cin >> s;
		
		if (pre.size() + suf.size() > s.size()) {
			cout << "NE\n";
			continue;
		}
		
		if (pre == s.substr(0, pre.size()) && suf == s.substr(s.size() - suf.size())) {
			cout << "DA\n";
		} else {
			cout << "NE\n";
		}
	}

	return 0;
}