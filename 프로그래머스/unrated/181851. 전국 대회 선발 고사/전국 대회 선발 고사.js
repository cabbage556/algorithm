function solution(rank, attendance) {
    let answer = 0;
    const participants = rank.filter((el, i) => attendance[i])
                            .sort((a, b) => a - b)
                            .slice(0, 3);
    let score = 10000;
    participants.forEach(participant => {
        answer += rank.indexOf(participant) * score;
        score /= 100;
    })
    
    return answer;
}