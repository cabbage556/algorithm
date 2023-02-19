function solution(my_string) {
    my_string = my_string.split(' ');
    let answer = my_string[0] * 1;
    
    for (let i = 1; i < my_string.length; i+=2) {
        if (my_string[i] === '+')
            answer += my_string[i + 1] * 1;
        else
            answer -= my_string[i + 1] * 1;
    }

    return answer;
}