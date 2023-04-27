function solution(myString, pat) {
    const arr = [];
    
    for (let i = 0; i < myString.length - pat.length + 1; i++) {
        arr.push(myString.slice(i, pat.length + i));
    }
    
    return arr.filter(el => el === pat).length;
}