function solution(arr, flag) {
    const answer = [];
    
    flag.forEach((el, i) => {
        const times = el ? arr[i] * 2 : arr[i];
        
        for (let j = 0; j < times; j++) {
            if (el) {
                answer.push(arr[i]);
            } else {
                answer.pop();
            }
        }
    });
    
    return answer;
}