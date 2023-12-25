#include <bits/stdc++.h>
using namespace std;

string name, ret;
int flag;
int cnt[100];
char mid;

int main() {
	cin >> name;
	for (char c : name) cnt[c]++;

	for (int i = 90; i >= 65; i--) {
		if (cnt[i] == 0) continue;

		if (cnt[i] % 2 == 1) {
			mid = char(i);
			flag++;
			cnt[i]--;
		}
		if (flag == 2) {
			cout << "I'm Sorry Hansoo\n";
			return 0;
		}

		for (int j = 0; j < cnt[i]; j += 2) {
			ret = char(i) + ret;
			ret += char(i);
		}
	}

	if (mid) ret.insert(ret.begin() + ret.size() / 2, mid);
	cout << ret << "\n";

	return 0;
}