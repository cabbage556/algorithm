function solution(n) {
    const fibo = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        // 1234567로 나눈 나머지로 저장
        fibo.push((fibo[i - 2] + fibo[i - 1]) % 1234567);
    }

    return fibo[fibo.length - 1];
}