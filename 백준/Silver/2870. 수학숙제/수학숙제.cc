#include <bits/stdc++.h>
using namespace std;

int n;
string s;
vector<string> v;

void push(string str) {
    while (true) {
        if (str.size() && str[0] == '0') str.erase(str.begin());
        else break;
    }
    if (str.size() == 0) str = "0";
    v.push_back(str);
}

bool cmp(string a, string b) {
    if (a.size() == b.size()) return a < b;
    return a.size() < b.size();
}

int main() {
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> s;
        
        string str = "";
        for (int j = 0; j < s.size(); j++) {
            char c = s[j];
            if (c < 65) str += c;
            else if (str != "") {
                push(str);
                str = "";
            }
        }
        if (str != "") push(str);
    }
    
    sort(v.begin(), v.end(), cmp);
    for (string i : v) cout << i << "\n";

    return 0;
}