function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    let answer = true;
    
    for (let i = 0; i < s.length; i++) {
        if (Number.isNaN(Number(s[i]))) {
            answer = false;
            break;
        }
    }
    
    return answer;
    
    // 수업 풀이 2
//     if (s.length !== 4 && s.length !== 6) return false;
    
//     const arr = s.split("")
//                  .filter(element => Number.isNaN(Number(element)));
    
//     return arr.length > 0 ? false : true;
}