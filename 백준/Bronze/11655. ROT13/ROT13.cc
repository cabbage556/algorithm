#include <bits/stdc++.h>
using namespace std;

string s, ret;

int main() {
	getline(cin , s);

	for (int i = 0; i < s.size(); i++) {
		if (s[i] >= 'a' && s[i] <= 'z') {
			if (s[i] + 13 >= 'z' + 1) ret += (s[i] - 13);
			else ret += (s[i] + 13);
		} else if (s[i] >= 'A' && s[i] <= 'Z') {
			if (s[i] + 13 >= 'Z' + 1) ret += (s[i] - 13);
			else ret += (s[i] + 13);
		} else {
			ret += s[i];
		}
	}
	
	cout << ret << "\n";

	return 0;
}