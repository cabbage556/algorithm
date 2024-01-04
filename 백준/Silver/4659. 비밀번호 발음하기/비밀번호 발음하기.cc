#include <bits/stdc++.h>
using namespace std;

string s;
string s2 = "aeiou";
string s3 = "abcdefghijklmnopqrstuvwxyz";

int main() {
	while (cin >> s) {
		if (s == "end") break;
		
		bool zeromo = true;
		for (int i = 0; i < s.size(); i++) {
			char c = s[i];
			if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
				zeromo = false;
				break;
			}
		}
		if (zeromo) {
			cout << '<' << s << '>' << " is not acceptable.\n";
			continue;
		}

		bool con = false;
		if (s.size() >= 3) {
			for (int i = 0; i < s.size() - 2; i++) {
				char c1 = s[i], c2 = s[i + 1], c3 = s[i + 2];
				auto it1 = s2.find(c1), it2 = s2.find(c2), it3 = s2.find(c3);

				if (it1 != string::npos && it2 != string::npos && it3 != string::npos) {
					con = true;
					break;
				} else if (it1 == string::npos && it2 == string::npos && it3 == string::npos) {
					con = true;
					break;
				}
			}
		}
		if (con) {
			cout << '<' << s << '>' << " is not acceptable.\n";
			continue;
		}
		
		if (s.size() >= 2) {
			for (int i = 0; i < s.size() - 1; i++) {
				char c1 = s[i], c2 = s[i + 1];
				auto it1 = s3.find(c1), it2 = s3.find(c2);
				if (it1 == it2) {
					if (c1 == 'e' && c2 == 'e') continue;
					else if (c1 == 'o' && c2 == 'o') continue;
					
					con = true;
					break;
				}
			}
		}
		if (con) {
			cout << '<' << s << '>' << " is not acceptable.\n";
			continue;
		}

		cout << '<' << s << '>' << " is acceptable.\n";
	}
	
	return 0;
}