function solution(participant, completion) {
//     participant = participant.sort();
//     completion = completion.sort();
//     let answer = '';
    
//     for (let i = 0; i < participant.length; i++) {
//         if (participant[i] !== completion[i]) {
//             answer = participant[i];
//             break;
//         }
//     }
    
//     return answer;
    
    // 수업 풀이 (잘못된 방법 => 데이터가 많아지는 경우 효율성 테스트 통과 못함)
    // for (let i = 0; i < completion.length; i++) {
    //     if (participant.includes(completion[i])) {
    //         // participant에 completion 요소가 포함되므로 바로 배열에서 제거 가능
    //         participant.splice( participant.indexOf(completion[i]), 1);
    //     }
    // }
    // return participant[0];
    
    // 수업 풀이 (해싱)
    const answer = {}; // "참가자 이름": 찾은 횟수
    
    for (let i = 0; i < participant.length; i++) {
        answer[ participant[i] ] === undefined
            ? answer[ participant[i] ] = 1
            : answer[ participant[i] ] += 1;
    }
    
    for (let i = 0; i < completion.length; i++) {
        answer[ completion[i] ] -= 1;
    }
    
    for (const key in answer) {
        if (answer[key])
            return key;
    }
}