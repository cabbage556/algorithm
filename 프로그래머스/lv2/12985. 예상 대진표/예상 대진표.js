function solution(n, a, b) {
    // n: 게임 참가자 수
    // a: 참가자 번호
    // b: 경쟁자 번호
    let answer = 0;
    
    while (a !== b) {
        // 라운드마다 a, b 번호 구하기
        a = Math.round(a / 2);
        b = Math.round(b / 2);
        answer++;
    }
    
    return answer;
}
