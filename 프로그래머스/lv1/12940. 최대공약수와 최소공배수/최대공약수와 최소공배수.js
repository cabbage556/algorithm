function solution(n, m) {
//     let gcd = 1;
//     let lcm = 1;
    
//     for (let i = 2; i <= Math.min(n, m); i++) {
//         if (n % i === 0 && m % i === 0) gcd = i;
//     }
    
//     lcm = n * m / gcd;
    
//     return [gcd, lcm];
    
    // 수업 풀이
    // 최대공약수: 두 개 이상의 수가 공통으로 가지는 약수 중에서 최댓값
    // 최소공배수: 두 개 이상의 수가 공통으로 가지는 배수 중에서 최솟값
    
    let max = 0;  // 최대공약수
    for (let i = 1; i <= m; i++) {
        if (n % i === 0 && m % i === 0)
            max = i;
    }
    
    let min = 0;  // 최소공배수
    // m 값으로 시작, m 값만큼 더함 => m의 배수
    for (let i = m; i <= n * m; i += m) {
        if (i % n === 0) {
            min = i;
            break;
        }
    }
    
    return [max, min];
}