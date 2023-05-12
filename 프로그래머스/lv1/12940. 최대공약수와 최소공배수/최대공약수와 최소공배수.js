function solution(n, m) {
    // 유클리드 호제법: 최대공약수를 구하기 위한 알고리즘
    // 1. a를 b로 나누었을 때 (a > b, 큰 수를 작은 수로 나누었을 때)
    // 2. 나머지 값은 c
    // 3. c가 0이라면, b가 최대공약수
    // 4. c가 0이 아니라면, b를 c로 나눈다. (1번 과정)
    
    let greater = Math.max(n, m);
    let less = Math.min(n, m);
    let remain = 0;
    
    while (greater % less > 0) { // 큰 수와 작은 수의 나머지가 0일 때까지 반복
        remain = greater % less; // 나머지
        greater = less; // 큰 수에 작은 수를 할당
        less = remain; // 작은 수에 나머지를 할당
        console.log(greater, less, remain);
    }
    
    return [less, n * m / less];
    
    // 수업 풀이
    // 최대공약수: 두 개 이상의 수가 공통으로 가지는 약수 중에서 최댓값
    // 최소공배수: 두 개 이상의 수가 공통으로 가지는 배수 중에서 최솟값
    
//     let max = 0;  // 최대공약수
//     for (let i = 1; i <= m; i++) {
//         if (n % i === 0 && m % i === 0)
//             max = i;
//     }
    
//     let min = 0;  // 최소공배수
//     // m 값으로 시작, m 값만큼 더함 => m의 배수
//     for (let i = m; i <= n * m; i += m) {
//         if (i % n === 0) {
//             min = i;
//             break;
//         }
//     }
    
//     return [max, min];
}