function solution(n) {
    let pizza = 0;
    const people = n;

    while (n > 0) {
        pizza++;
        n -= 6;
        
        if (pizza * 6 % people !== 0)
            n += 6;
        else
            break;
    }

    return pizza;
}