function solution(my_strings, parts) {
    let answer = '';
    
    parts.forEach((part, i) => {
        answer += my_strings[i].slice(part[0], part[1] + 1);
    });
    
    return answer;
}