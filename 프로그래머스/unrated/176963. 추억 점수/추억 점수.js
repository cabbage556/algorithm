function solution(name, yearning, photo) {
    const answer = new Array(photo.length);
    const score = {};
    
    name.forEach((el, i) => {
        score[el] = yearning[i];
    });
    
    for (let i = 0; i < photo.length; i++) {
        let sum = 0;
        
        for (let j = 0; j < photo[i].length; j++) {
            if (score[photo[i][j]] === undefined) {
                continue;
            }
            
            sum += score[photo[i][j]];
        }
        
        answer[i] = sum;
    }
    
    return answer;
}