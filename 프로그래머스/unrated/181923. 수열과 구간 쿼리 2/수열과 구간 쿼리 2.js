function solution(arr, queries) {
    const answer = [];
    
    queries.forEach((query) => {
        const [s, e, k] = query;
        const mins = arr.slice(s, e + 1).filter(el => el > k);
        mins.length === 0 ?
            answer.push(-1) :
            answer.push(Math.min(...mins));
    });
    
    return answer;
}