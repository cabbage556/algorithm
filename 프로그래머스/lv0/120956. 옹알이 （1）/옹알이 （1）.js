function solution(babbling) {
    const babblingArray = ['aya', 'ye', 'woo', 'ma'];
    let answer = 0;
    
    for (let i = 0; i < babbling.length; i++) {
        let el = babbling[i];
        
        for (let j = 0; j < babblingArray.length; j++) {
            if (el.includes(babblingArray[j])) {
                el = el.replace(babblingArray[j], '1');
            }
        }
        
        el = el.replaceAll('1', '');
        
        if (el.length === 0) {
            answer++;
        }
    }
    
    return answer;
}