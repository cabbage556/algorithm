function solution(l, r) {
    const answer = [];
    
    for (let i = l; i <= r; i++) {
        if (i % 5 !== 0) {
            continue;
        }
        
        let count = 0;
        const temp = (i + '').split('');
        temp.forEach(el => {
            if (el === '5' || el === '0') {
                count++;
            }
        })
        
        if (count === temp.length) {
            answer.push(i);
        }
    }
    
    return answer.length > 0 ? answer : [-1];
}