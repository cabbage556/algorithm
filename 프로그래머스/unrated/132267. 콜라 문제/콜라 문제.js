function solution(a, b, n) {
    let answer = 0;
    
    // 빈 병 개수가 a개 보다 많거나 같을 때까지 반복
    while (n >= a) {
        const cola = Math.floor(n / a) * b;
        
        answer += cola;
        n = n - cola * a / b + cola;
    }
    
    return answer;
}