function solution(n, m, section) {
    let answer = 0;
    let position = 0; // 페인트를 칠한 구역
    
    for (let i = 0; i < section.length; i++) {
        if (section[i] > position) { // 페인트를 칠할 구역이 지금까지 페인트를 칠한 구역 보다 큰 경우
            answer++; // 페인트 칠하기
            position = section[i] + m - 1; // 페인트를 칠한 구역 업데이트
        }
    }
    
    return answer;
}