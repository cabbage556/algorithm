function solution(n) {
    // K칸 앞으로 점프: K만큼 건전지 사용
    // (현재까지 온 거리) * 2로 순간이동
    
    let answer = 0;
    
    while (n !== 0) {
        if (n % 2 === 0) { // 짝수면 2로 나누기
            n /= 2;
        } else { // 홀수면 1만큼 빼고 한 칸 점프하기
            n -= 1;
            answer++;
        }
    }
    
    return answer;
}