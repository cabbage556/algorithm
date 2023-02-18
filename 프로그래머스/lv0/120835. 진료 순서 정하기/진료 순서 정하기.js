function solution(emergency) {
    const answer = new Array(emergency.length);
    let order = 1;
    
    for (let i = 0; i < answer.length; i++) {
        const max = Math.max(...emergency);
        const maxIndex = emergency.indexOf(max);
        answer[maxIndex] = order++;
        emergency[maxIndex] = 0;
    }
    return answer;
}