// 수업 풀이 배열
const bonus = ['S', 'D', 'T']; // 보너스 배열
const option = ['*', '#']; // 옵션 배열


function solution(dartResult) {
//     let score = 0;
//     const scores = [];
//     const bonuses = [];

//     for (let i = 0; i < dartResult.length; i++) {
//     if (Number.isInteger(dartResult[i] * 1)) {
//       if (dartResult[i] === '1' && dartResult[i + 1] === '0')
//         score = 10;
//       else if (!(dartResult[i - 1] === '1' && dartResult[i] === '0'))
//         score = dartResult[i] * 1;
//     }
//     else if (dartResult[i] === 'S')
//       scores.push(score);
//     else if (dartResult[i] === 'D')
//       scores.push(Math.pow(score, 2));
//     else if (dartResult[i] === 'T')
//       scores.push(Math.pow(score, 3));
//     else
//       bonuses.push(dartResult[i]);
//     }

//     // console.log(scores, bonuses);

//     for (let i = 0; i < bonuses.length; i++) {
//     if (bonuses[i] === '*') {
//       scores[i] *= 2;
//       if (scores[i - 1])
//         scores[i - 1] *= 2;
//     } else {
//       scores[i] *= -1;
//     }
//     }
//     // console.log(scores, bonuses);

//     return scores.reduce((acc, cur) => { return acc + cur }, 0);
    
    // 수업 풀이
    let answer = [];
    let score = ''; // 점수만 뽑아서 문자열로 저장
    
    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) { // 점수만 골라내기
            score += dartResult[i];
        } else { // 보너스, 옵션 골라내기
            score *= 1; // 숫자로 변환하기
            
            if (bonus.includes(dartResult[i])) { // 보너스 배열 확인
                if (dartResult[i] === 'D') {
                    score **= 2; // 2제곱
                } else if (dartResult[i] === 'T') {
                    score **= 3; // 3제곱
                }
                
                answer.push(score); // 보너스에 따라 계산된 점수를 점수 배열에 넣기
                score = ''; // 점수 배열에 넣고 초기화
            } else if (option.includes(dartResult[i])) { // 옵션 배열 확인
                if (dartResult[i] === '#') { // 아차상
                    answer[answer.length - 1] *= -1; // 해당 점수에 -1 곱하기
                } else { // 스타상
                    answer[answer.length - 1] *= 2; // 해당 점수에 2 곱하기
                    
                    if (answer.length > 1) { // 스타상이 두번째 점수 이후에 존재하는 경우 이전 점수에 2 곱하기
                        answer[answer.length - 2] *= 2;
                    }
                }
            }
        }
    }
    
    return answer.reduce((acc, cur) => acc + cur, 0);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}