function solution(arr) {
    const answer = [];
    
    arr.forEach(el => {
        answer.push(new Array(el).fill(el));
    })
    
    return answer.flat();
}