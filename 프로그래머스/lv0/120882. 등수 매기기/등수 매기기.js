function solution(score) {
    score = score.map(mathEngScore => mathEngScore.at(0) + mathEngScore.at(-1)); // 점수 합 구하기
    
    // 등수를 구하기 위한 배열
    const rankingScore = Array.from(new Set([...score]))  // 중복 제거
                                .sort((a, b) => b - a);  // 정렬
    const tempScore = [...score];
    
    score.sort((a, b) => b - a);
    for (let i = 0; i < score.length; i++) {
        if (score[i] === score[i + 1]) {
            rankingScore.splice(rankingScore.indexOf(score[i]) + 1, 0, -1);  // 중복된 평균 점수의 인덱스 뒤에 -1을 넣어서 등수를 1씩 더하게 한다.
        }
    }
    
    return tempScore.map(avg => rankingScore.indexOf(avg) + 1);
}