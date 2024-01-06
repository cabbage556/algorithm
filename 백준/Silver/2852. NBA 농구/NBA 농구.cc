#include <bits/stdc++.h>
using namespace std;

int n, t, cnt1, cnt2, total_t1, total_t2;
string sc_time, pre;
vector<string> v1, v2;

string getTime(int total) {
	string mm = "00" + to_string(total / 60);
	string ss = "00" + to_string(total % 60);
	return mm.substr(mm.size() - 2, 2) + ":" + ss.substr(ss.size() - 2, 2);
}

int getSeconds(string s) {
	return atoi(s.substr(0, 2).c_str()) * 60 + atoi(s.substr(3).c_str());
}

int getTotal(int sum, string s, string pre) {
	int total = sum;
	total += getSeconds(s) - getSeconds(pre);
	return total;
}

int main() { 
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> t >> sc_time;
		if (cnt1 > cnt2) total_t1 = getTotal(total_t1, sc_time, pre);
		else if (cnt1 < cnt2) total_t2 = getTotal(total_t2, sc_time, pre);
		
		if (t == 1) cnt1++;
		else cnt2++;
		
		pre = sc_time;
	}

	if (cnt1 > cnt2) total_t1 = getTotal(total_t1, "48:00", pre);
	else if (cnt1 < cnt2) total_t2 = getTotal(total_t2, "48:00", pre);
	
	cout << getTime(total_t1) << "\n";
	cout << getTime(total_t2) << "\n";

	return 0;
}