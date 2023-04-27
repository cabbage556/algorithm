function solution(myString) {
    const lCode = 'l'.charCodeAt(0);
    let answer = '';
    
    for (let i = 0; i < myString.length; i++) {
        if (myString[i].charCodeAt(0) < lCode) {
            answer += 'l';
        } else {
            answer += myString[i];
        }
    }
    
    return answer;
}