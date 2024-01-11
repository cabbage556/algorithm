#include <bits/stdc++.h>
using namespace std;

int n, node, root, delete_node;
vector<int> tree[54];

int dfs(int node) {
	int ret = 0;
	int child = 0;

	for (int there : tree[node]) {
		if (there == delete_node) continue;

		ret += dfs(there);
		child++;
	}
	if (child == 0) return 1;

	return ret;
}

int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> node;
		if (node == -1) root = i;
		else tree[node].push_back(i);
	}
	cin >> delete_node;
	
	if (root == delete_node) cout << "0\n";
	else cout << dfs(root) << "\n";

	return 0;
}