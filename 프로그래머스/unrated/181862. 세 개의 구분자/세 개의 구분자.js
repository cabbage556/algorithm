function solution(myStr) {
    const answer = [];
    let str = '';
    
    for (let i = 0; i < myStr.length; i++) {
        if (myStr[i] === 'a' || myStr[i] === 'b' || myStr[i] === 'c') {
            if (str !== '') {
                answer.push(str);
            }
            str = '';
            continue;
        }
        
        str += myStr[i];
        
        if (i === myStr.length - 1) {
            answer.push(str);
        }
    }
    
    return answer.length > 0 ? answer : ['EMPTY'];
}