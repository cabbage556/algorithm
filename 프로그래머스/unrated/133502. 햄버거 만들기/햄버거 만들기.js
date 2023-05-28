function solution(ingredient) {
    let answer = 0;
    const hamburger = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        hamburger.push(ingredient[i]);
        
        if (hamburger.length >= 4) {
            const temp = hamburger.slice(-4).join(''); // 마지막 4개 잘라내기
            
            if (temp === '1231') { // 햄버거 확인
                for (let j = 0; j < 4; j++) { // 햄버거인 경우 마지막 4개 없애기
                    hamburger.pop();
                }
                answer++;
            }
        }
    }
    
    return answer;
}