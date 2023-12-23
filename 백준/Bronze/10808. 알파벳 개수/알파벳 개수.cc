#include <bits/stdc++.h>
using namespace std;

map<char, int> mp;
string abc = "abcdefghijklmnopqrstuvwxyz";
string s;

int main() {
	cin >> s;
	
	for (int i = 0; i < s.size(); i++) {
		if (mp.find(s[i]) == mp.end()) mp.insert({s[i], 1});
		else mp[s[i]]++;
	}
	
	for (int i = 0; i < abc.size(); i++) {
		if (i == abc.size() - 1) cout << mp[abc[i]] << "\n";
		else cout << mp[abc[i]] << " ";
	}

	return 0;
}