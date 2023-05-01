function solution(picture, k) {
    const answer = [];
    
    for (let i = 0; i < picture.length; i++) {
        let temp = '';
        for (let j = 0; j < picture[i].length; j++) {
            temp += picture[i][j].repeat(k);
        }
        
        for (let l = 0; l < k; l++) {
            answer.push(temp);
        }
    }
    
    return answer;
}