function solution(n) {
    let x = 2;
    
    while (true) {
        if (n % x === 1) {
            break;
        }
        
        x++;
    }
    
    return x;
}