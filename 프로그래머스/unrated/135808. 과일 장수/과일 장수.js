function solution(k, m, score) {
    // 내림차순 정렬
    score.sort((a, b) => a > b ? -1 : 1);
    
    let answer = 0;
    let minScoreIdx = m - 1; // 최저 사과 점수 인덱스(내림차순 정렬 시)
    
    // Math.floor(score.length / m)만큼 반복
    for (let i = 0; i < Math.floor(score.length / m); i++) {
        answer += score[minScoreIdx] * m;
        minScoreIdx += m;
    }
    
    return answer;
}