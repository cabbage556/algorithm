function solution(s) {
    s = s.split(' ').map(Number);
    let max = s[0];
    let min = s[0];
    
    for (const value of s) {
        if (value > max) {
            max = value;
        }
        
        if (value < min) {
            min = value;
        }
    }
    
    return `${min} ${max}`;
}
