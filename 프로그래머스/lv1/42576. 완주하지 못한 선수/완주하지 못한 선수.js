function solution(participant, completion) {
    participant = participant.sort();
    completion = completion.sort();
    completion[completion.length] = "";
    let answer = "";
    
    for (let i = 0; i < completion.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            break;
        }
    }
    
    return answer;
}