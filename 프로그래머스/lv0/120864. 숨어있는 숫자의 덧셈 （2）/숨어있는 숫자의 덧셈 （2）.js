function solution(my_string) {
    const answer = [];
    let temp = '';
    
    for (let i = 0; i < my_string.length; i++) {
        if (!Number.isInteger(my_string[i] * 1)) {
            answer.push(temp);
            temp = '';
            continue;
        }
        
        temp += my_string[i];
        
        if (i === my_string.length - 1)
            answer.push(temp);
    }
    
    return answer.filter(el => typeof (el * 1) === 'number')
                    .reduce((acc, cur) => acc + cur * 1, 0);
}