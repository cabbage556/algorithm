function solution(n) {
    let pizza = 0;
    
    while (n > 0) {
        pizza++;
        n -= 7;
    }
    
    return pizza;
}