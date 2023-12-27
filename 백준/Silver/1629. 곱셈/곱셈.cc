#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

ll a, b, c;

ll solve(ll a, ll b) {
	if (b == 1) return a % c;

	// 2^4 = 2^2 * 2^2
	ll ret = solve(a, b / 2);
	ret = (ret * ret) % c;
	
	// 2^5 = 2^2 * 2^2 * 2
	if (b % 2 == 1) ret = (ret * a) % c;
	return ret;
}

int main() {
	cin >> a >> b >> c;
	cout << solve(a, b) << "\n";

	return 0;
}