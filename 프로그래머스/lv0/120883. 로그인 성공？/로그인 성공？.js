function solution(id_pw, db) {
    let answer = '';
    
    for (let i = 0; i < db.length; i++) {
        if (db[i][0] === id_pw[0]) { // 아이디가 같은 경우
            if (db[i][1] === id_pw[1]) { // 비밀번호가 같음 -> 로그인
                answer = 'login';
                break;
            } else {
                answer = 'wrong pw';     // 비밀번호가 같지 않음 -> 잘못된 비밀번호
                break;
            }
        } else {
            answer = 'fail';         // 아이디가 다름
        }
    }
    
    return answer;
}