#include <bits/stdc++.h> 
using namespace std;

int n, ret = INT_MIN;
string s;
vector<int> nums;
vector<char> ops;

int getMathRet(char op, int num1, int num2) {
	if (op == '+') return num1 + num2;
	else if (op == '-') return num1 - num2;
	else return num1 * num2;
}

void recur(int here, int num) {
	if (here == nums.size() - 1) {
		ret = max(ret, num);
		return;
	}
	
	recur(here + 1, getMathRet(ops[here], num, nums[here + 1]));
	
	if (here + 2 <= nums.size() - 1) {
		int temp = getMathRet(ops[here + 1], nums[here + 1], nums[here + 2]);
		recur(here + 2, getMathRet(ops[here], num, temp));
	}
	return;
}

int main(){
	cin >> n;
	cin >> s;
	for (int i = 0; i < n; i++) {
		if (i % 2 == 0) nums.push_back(s[i] - '0');
		else ops.push_back(s[i]);
	}
	recur(0, nums[0]);
	cout << ret << "\n";

	return 0;
}