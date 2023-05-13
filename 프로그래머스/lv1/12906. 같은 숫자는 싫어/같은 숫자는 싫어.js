function solution(arr) {
    const answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            answer.push(arr[i]);
            continue;
        }
        
        if (arr[i - 1] !== arr[i]) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
    
    // 수업 풀이
//     const answer = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         // if (arr[i] !== arr[i + 1]) answer.push(arr[i]);  // 1
//         if (answer[answer.length - 1] !== arr[i]) answer.push(arr[i]);
//     }
    
//     return answer;
    
}