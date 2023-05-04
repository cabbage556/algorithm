function solution(arr) {
    let i = 0;
    const stk = [];
    
    arr.forEach(el => {
        if (stk.length === 0) {
            stk.push(el);
        } else if (stk[stk.length - 1] === arr[i]) {
            stk.pop();
        } else {
            stk.push(arr[i]);
        }
        i++;
    });
    
    return stk.length >= 1 ? stk : [-1];
}

solution([0, 1, 1, 1, 0]);
solution([0, 1, 0, 1, 0]);
solution([0, 1, 1, 0]);