function solution(food) {
    let beforeZero = '';
    let afterZero = '';
    
    for (let i = 0; i < food.length; i++) {
        if (food[i] === 1) {
            continue;
        }
        
        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            beforeZero += i;
        }
    }
    
    for (let i = beforeZero.length - 1; i >= 0; i--) {
        afterZero += beforeZero[i];
    }
    
    return beforeZero + '0' + afterZero;
}