#include <bits/stdc++.h>
using namespace std;

string s; 
int v_cnt, nv_cnt; 

bool isVowel(char c) {
	return (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u');
}

int main() { 
	while (cin >> s) {
		if (s == "end") break;
		
		v_cnt = 0;
		nv_cnt = 0;
		bool v_included = false;
		bool flag = false;
		char prev = '~';
		
		for (int i = 0; i < s.size(); i++) {
			char c = s[i];
			if (isVowel(c)) {
				v_cnt++;
				nv_cnt = 0;
				v_included = true;
			} else {
				v_cnt = 0;
				nv_cnt++;
			}
			
			if (v_cnt == 3 || nv_cnt == 3) flag = true;
			if (i >= 1 && prev == c && (c != 'e' && c != 'o')) flag = true;

			prev = c;
		}
		if (!v_included) flag = true;

		if (flag) cout << "<" << s << ">" << " is not acceptable.\n";
		else cout << "<" << s << ">" << " is acceptable.\n";
	}

	return 0;
}