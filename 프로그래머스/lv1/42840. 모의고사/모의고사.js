function solution(answers) {
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const answer = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (supo1[i % supo1.length] === answers[i]) answer[0] += 1;
        
        if (supo2[i % supo2.length] === answers[i]) answer[1] += 1;
        
        if (supo3[i % supo3.length] === answers[i]) answer[2] += 1;
    }
    
    return answer
                .map((el, idx) => {
                    if (el === Math.max(...answer)) return idx + 1;
                })
                .filter(el => el !== undefined);
}