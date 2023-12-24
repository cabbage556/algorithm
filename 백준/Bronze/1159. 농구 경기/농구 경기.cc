#include <bits/stdc++.h>
using namespace std;

int cnt[26];
int N;
string s, s2;

int main() {
	cin >> N;
	for (int i = 0; i < N; i++) {
		cin >> s;
		cnt[s[0] - 'a']++;
	}
	
	for (int i = 0; i < 26; i++) {
		if (cnt[i] >= 5) s2 += (i + 'a');
	}

	if (s2.size()) cout << s2 << "\n";
	else cout << "PREDAJA" << "\n";

	return 0;
}