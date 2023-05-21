function solution(k, score) {
    const answer = [];
    const hallOfFame = [];
    
    for (let i = 0; i < score.length; i++) {
        // 초기 k일까지 모든 출연 가수의 점수를 명예의 전당에 올리기
        if (i < k) {
            hallOfFame.push(score[i]);
            hallOfFame.sort((a, b) => a > b ? 1 : -1);
            answer.push(hallOfFame[0]);
            continue;
        }
        
        // 명예의 전당 점수를 교체하는 경우
        const firstIndex = hallOfFame.findIndex(el => el < score[i]);
        if (firstIndex !== -1) {
            hallOfFame[firstIndex] = score[i];
            hallOfFame.sort((a, b) => a > b ? 1 : -1);
        }
        
        answer.push(hallOfFame[0]);
    }
    
    return answer;
}