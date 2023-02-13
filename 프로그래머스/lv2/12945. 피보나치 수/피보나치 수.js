// 피보나치수: 0, 1, 1, 2, 3, ...
// f(3) = f(2) + f(1)
// f(2) = f(1) + f(0)

function solution(n) {
//     const answer = [0, 1];
    
//     for (let i = 0; i < n - 1; i++) {
//         answer.push((answer[i] + answer[i + 1]) % 1234567);  // n이 커지면 오버플로우가 발생하므로 1234567로 나눠서 저장하기
//     }
    
//     return answer[n];
    
    // 수업 풀이1
    const answer = [];
    
    let prev = 0; // 0번째 숫자
    let next = 1; // 1번째 숫자
    let sum = 1;
    
    for (let i = 2; i <= n; i++) {
        sum = (prev + next) % 1234567;
        prev = next;
        next = sum;
        answer.push(sum);
    }
    
    return answer[n - 2];
    
    
}