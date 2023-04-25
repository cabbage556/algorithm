function solution(n, control) {
    control
        .split('')
        .forEach(el => {
            if (el === 'w') {
                n++;
            } else if (el === 's') {
                n--;
            } else if (el === 'd') {
                n += 10;
            } else {
                n -= 10;
            }
        });
    return n;
}