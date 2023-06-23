const hash = {}; // 해시

function solution(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    
    if (!hash[n]) {
        hash[n] = solution(n - 1) % 1234567 + solution(n - 2) % 1234567;
    }
    
    return hash[n] % 1234567;
}
