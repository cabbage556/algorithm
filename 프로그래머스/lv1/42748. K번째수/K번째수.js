function solution(array, commands) {
    const answer = new Array(commands.length);
    
    for (let idx = 0; idx < commands.length; idx++) {
        const [i, j, k] = commands[idx];
        
        answer[idx] = array
                        .slice(i - 1, j)
                        .sort((a, b) => a - b)[k - 1];
    }
    
    return answer;
    
    // 수업 풀이 반복문 방식
//     const answer = [];
    
//     for (let idx = 0; idx < commands.length; idx++) {
//         console.log(commands[idx]);
//         const [i, j, k] = commands[idx];
//         // const i = commands[idx][0];
//         // const j = commands[idx][1];
//         // const k = commands[idx][2];
//         const result = array.slice(i - 1, j).sort((a, b) => a - b);
//         answer.push(result[k - 1]);
//     }
//     return answer;
    
    // 수업 풀이 메서드 방식
    // const answer = commands.map((el) => {
    //     const result = array.slice(el[0] - 1, el[1]).sort((a, b) => a - b);
    //     return result[el[2] - 1];
    // })
    // return answer;
}