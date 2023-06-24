function solution(arr1, arr2) {
    const answer = [];
    
    for (let i = 0; i < arr1.length; i++) { // arr1 행 루프
        answer.push([]);
        for (let j = 0; j < arr2[0].length; j++) { // arr2 열 루프
            let sum = 0;
            for (let k = 0; k < arr2.length; k++) { // arr2 행 루프
                sum += arr1[i][k] * arr2[k][j];
            }
            answer[i].push(sum);
        }
    }
    
    return answer;
}