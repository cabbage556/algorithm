function solution(babbling) {
    const babblingArray = ['aya', 'ye', 'woo', 'ma'];
    let answer = 0;
    
    for (let i = 0; i < babbling.length; i++) {
        let el = babbling[i];
        for (let j = 0; j < babblingArray.length; j++) {
            if (el.includes(babblingArray[j] + babblingArray[j])) {
                break;
            }
            
            el = el.split(babblingArray[j]).join(' ');
        }
        
        if (el === ' '.repeat(el.length)) {
            answer++;
        }
    }
    
    return answer;
}