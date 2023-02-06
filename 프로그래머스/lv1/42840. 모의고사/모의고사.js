function solution(answers) {
//     const supo1 = [1, 2, 3, 4, 5];
//     const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
//     const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//     const answer = [0, 0, 0];
    
//     for (let i = 0; i < answers.length; i++) {
//         // i를 각 배열의 길이로 나눈 나머지 값으로 인덱스에 접근하기
//         // => i가 5인 경우(6번 문제의 답) 0번 인덱스에 접근한다.
//         // => 1번 수포자는 5개 주기로 찍기를 반복하기 때문이다.
//         if (supo1[i % supo1.length] === answers[i])
//             answer[0] += 1;
        
//         if (supo2[i % supo2.length] === answers[i])
//             answer[1] += 1;
        
//         if (supo3[i % supo3.length] === answers[i])
//             answer[2] += 1;
//     }
    
//     console.log(answer);
    
//     return answer
//             .map((el, idx) => {
//                 return el === Math.max(...answer)
//                             ? idx + 1
//                             : 0;
//             })
//             .filter(el => el !== 0);
    
    // 수업 풀이 1
    // const answerTable = [
    //     [1, 2, 3, 4, 5],  // 1번 수포자 찍는 순서
    //     [2, 1, 2, 3, 2, 4, 2, 5],  // 2번 수포자 찍는 순서
    //     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],  // 3번 수포자 찍는 순서
    // ];
//     const score = [0, 0, 0]; // 1번, 2번, 3번 수포자 점수
    
//     for (let i = 0; i < answers.length; i++) {
//         for (let j = 0; j < answerTable.length; j++) {
//             const supoAnswer = answerTable[j][i % answerTable[j].length];
            
//             if (supoAnswer === answers[i])
//                 score[j]++;
//             // console.log(score, supoAnswer, answers[i]);
//         }
//     }
    
//     // 제일 많이 맞춘 학생의 점수를 구한다.
//     const biggest = Math.max(...score);
//     const answer = [];
    
//     for (let i = 0; i < score.length; i++) {
//         if (biggest === score[i])
//             answer.push(i + 1);
//     }
    
//     return answer;
    
    // 수업 풀이 2
    const answerTable = [
        [1, 2, 3, 4, 5],  // 1번 수포자 찍는 순서
        [2, 1, 2, 3, 2, 4, 2, 5],  // 2번 수포자 찍는 순서
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],  // 3번 수포자 찍는 순서
    ];
    const scoreList = answerTable.map((el, i) => {
        const score = answers.reduce((acc, cur, j) => {
            return acc + ( el[j % el.length] === cur ? 1 : 0);
        }, 0);
        return { student: i + 1, score } // score: score(shorthand-property)
    });
    // console.log(scoreList);
    
    // 제일 많이 맞춘 학생의 점수를 구한다.
    const biggest = Math.max(...scoreList.map((el) => {
        return el.score;
    }))
    // console.log(biggest);
    const answer = scoreList.filter((el, i) => {
        return el.score === biggest;
    }).map((el) => {
        return el.student;
    });
    
    return answer;
}