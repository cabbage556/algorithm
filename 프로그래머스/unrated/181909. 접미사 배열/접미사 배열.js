function solution(my_string) {
    const answer = [];
    
    for (let i = 0; i < my_string.length; i++) {
        answer.push(my_string.slice(0 - i));
    }
    
    return answer.sort();
}