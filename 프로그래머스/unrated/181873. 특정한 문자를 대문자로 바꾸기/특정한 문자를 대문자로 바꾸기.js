function solution(my_string, alp) {
    let answer = '';
    my_string.split('').forEach(el => {
        el === alp ? answer += el.toUpperCase() : answer += el;
    });
    return answer;
}