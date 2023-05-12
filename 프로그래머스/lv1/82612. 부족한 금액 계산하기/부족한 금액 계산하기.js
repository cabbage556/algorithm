function solution(price, money, count) {
    let total = 0;
    
    for (let i = 0; i < count; i++) {
        total += price * (i + 1);
    }
    
    return money - total > 0 ? 0 : total - money;
}