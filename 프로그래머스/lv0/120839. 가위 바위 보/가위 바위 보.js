function solution(rsp) {
    // 가위 - 2, 바위 - 0, 보 - 5
    let answer = '';
    
    rsp.split('').forEach((el) => {
        if (el === '2')
            answer += '0';
        else if (el === '0')
            answer += '5';
        else if (el === '5')
            answer += '2';
    })
    
    return answer;
}