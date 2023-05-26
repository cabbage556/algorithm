function solution(survey, choices) {
    let answer = '';
    const score = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0
    };
    
    for (let i = 0; i < choices.length; i++) {
        const choice = choices[i];
        const surveyStr = survey[i];
        
        if (choice === 1) {
            score[surveyStr[0]] += 3;
        } else if (choice === 2) {
            score[surveyStr[0]] += 2;
        } else if (choice === 3) {
            score[surveyStr[0]] += 1;
        } else if (choice === 5) {
            score[surveyStr[1]] += 1;
        } else if (choice === 6) {
            score[surveyStr[1]] += 2;
        } else if (choice === 7) {
            score[surveyStr[1]] += 3;
        }
    }
    
    for (let i = 0; i < 4; i++) {
        let temp = '';
        let first = '';
        let second = '';
        
        if (i === 0) { // RT
            first = 'R';
            second = 'T';
        } else if (i === 1) { // CF
            first = 'C';
            second = 'F';
        } else if (i === 2) { // JM
            first = 'J';
            second = 'M';
        } else { // AN
            first = 'A';
            second = 'N';
        }
        
        if (score[first] >= score[second]) {
            answer += first;
        } else {
            answer += second;
        }
    }
    
    return answer;
}