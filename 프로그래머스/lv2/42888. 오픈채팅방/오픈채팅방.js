function solution(record) {
    const idObj = {};
    const answer = [];
    
    for (let i = 0; i < record.length; i++) {
        const temp = record[i].split(' ');
        idObj[temp[1]] = temp[2] || idObj[temp[1]];
    }
    
    for (let i = 0; i < record.length; i++) {
        const temp = record[i].split(' ');
        
        if (temp[0] === 'Enter') {
            answer.push(`${idObj[temp[1]]}님이 들어왔습니다.`);
        } else if (temp[0] === 'Leave') {
            answer.push(`${idObj[temp[1]]}님이 나갔습니다.`);
        }
    }
    
    return answer;
}