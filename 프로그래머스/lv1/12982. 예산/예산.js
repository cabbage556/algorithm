function solution(d, budget) {
    let answer = 0;
    
    d = d.sort((a, b) => a - b);
    
    for (let i = 0; i < d.length; i++) {
        if (budget >= d[i]) {
            budget -= d[i];
            answer++;
        } else {
            break;
        }
    }
    
    return answer;
    
//     // 수업 풀이1
//     let answer = 0;
//     d.sort((a, b) => a - b);  // 오름차순 정렬
    
//     let sum = 0;
//     for (let i = 0; i < d.length; i++) {
//         sum += d[i];
//         if (sum <= budget)
//             answer++;
//     }
    
//     return answer;
    
//     // 수업 풀이2
//     let answer = 0;
//     d.sort((a, b) => a - b);
    
//     while (budget - d[answer] >= 0) {
//         budget -= d[answer];
//         answer++;
//     }
    
//     return answer;
    
    // 수업 풀이3
    // const answer = d.sort((a, b) => a - b)
    //                 .filter(money => {
    //                     // 총 예산에서 지원금 차감
    //                     budget -= money;
    //                     return budget >= 0;
    //                 });
    // return answer.length;
}