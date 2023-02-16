function solution(sides) {
    const max = Math.max(...sides);
    let sum = 0;
    
    for (const side of sides)
        sum += side;
    sum -= max;
    
    return max < sum ? 1 : 2;
}