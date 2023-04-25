function solution(myString, pat) {
    let str = '';
    
    myString
        .split('')
        .forEach(el => el === 'A' ? str += 'B' : str += 'A');
    
    return str.includes(pat) ? 1 : 0;
}