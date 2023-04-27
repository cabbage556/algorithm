function solution(my_string, indices) {
    indices.sort((a, b) => a - b);
    
    let answer = '';
    
    for (let i = 0; i < my_string.length; i++) {
        if (indices.includes(i)) {
            continue;
        }
        
        answer += my_string[i];
    }
    
    return answer;
}