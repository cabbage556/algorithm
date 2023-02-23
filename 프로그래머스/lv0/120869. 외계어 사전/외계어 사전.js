function solution(spell, dic) {
    let answer = 2;
    const sortedDic = [];
    
    for (let i = 0; i < dic.length; i++) {
        if (spell.length !== dic[i].length)
            continue;
        
        sortedDic.push(dic[i].split('').sort().join(''));
    }
    
    for (const dic of sortedDic) {
        if (dic === spell.sort().join('')) {
            answer = 1;
            break;
        }
    }
    
    return answer;
}