function solution(numbers, k) {
    let ball = 0;  // 공이 위치한 인덱스
    
    for (let i = k; i > 1; i--) { // k-1번 반복
        ball += 2;  // 두칸씩 던지기
        
        
        if (ball >= numbers.length) {       // 공이 배열 밖으로 나갈 때
            if (numbers.length % 2 === 0) { // 짝수 길이의 배열의 경우 항상 첫 번째 사람에게 공이 위치한다.
                ball = 0;
            } else {                               // 홀수 길이의 배열일 때
                if (ball === numbers.length + 1) { // 공이 배열에서 두칸 나가는 경우
                    ball = 1;                      // 배열의 인덱스 1에 위치한 사람에게 공이 위치한다.
                } else {                           // 공이 배열에서 한칸 나가는 경우
                    ball = 0;                      // 배열의 인덱스 0에 위치한 사람에게 공이 위치한다.
                }
            }
        }
    }
    
    return numbers[ball];
}