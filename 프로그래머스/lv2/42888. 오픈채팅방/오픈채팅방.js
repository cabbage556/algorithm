function solution(record) {
//     const idObj = {};
//     const answer = [];
    
//     for (let i = 0; i < record.length; i++) {
//         const temp = record[i].split(' ');
//         idObj[temp[1]] = temp[2] || idObj[temp[1]];
//     }
    
//     for (let i = 0; i < record.length; i++) {
//         const temp = record[i].split(' ');
        
//         if (temp[0] === 'Enter') {
//             answer.push(`${idObj[temp[1]]}님이 들어왔습니다.`);
//         } else if (temp[0] === 'Leave') {
//             answer.push(`${idObj[temp[1]]}님이 나갔습니다.`);
//         }
//     }
    
//     return answer;
    
    // 수업 풀이
//     const answer = [];
//     const user = {};  // 유저들의 최종 닉네임 저장
    
//     for (let i = 0; i < record.length; i++) {
//         const [action, uid, nickname] = record[i].split(' ');
        
//         if (nickname) {
//             user[uid] = nickname;
//         }
        
//         if (action !== 'Change') { // 'Enter' 또는 'Leave'인 경우에만
//             answer.push({ action, uid })
//         }
//     }
    
//     for (const idx in answer) { // for-in을 배열에 사용하면 인덱스 값을 가져온다.
//         answer[idx] = user[answer[idx].uid] + (
//             answer[idx].action === 'Enter'
//                     ? '님이 들어왔습니다.'
//                     : '님이 나갔습니다.'
//         );
//     }
    
    // 수업 풀이
    record = record.map(el => el.split(' '));
    const user = record.reduce((acc, cur, i) => {  // 유저들의 최종 닉네임 값 저장
        const [action, uid, nickname] = cur;
        
        if (nickname) {
            acc[uid] = nickname;
        }
        
        return acc;
    }, {});
    
    const answer = record.reduce((acc, cur) => {
        const [action, uid] = cur;
        if (action !== 'Change') {
            acc.push(`${user[uid]}님이 ` + (action === 'Leave' ? '나갔습니다.' : '들어왔습니다.'));
        }
        return acc;
    }, []);
    
    return answer;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}