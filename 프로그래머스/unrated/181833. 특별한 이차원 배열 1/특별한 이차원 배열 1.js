function solution(n) {
    const arr = [];
    
    for (let i = 0; i < n; i++) {
        const arr2 = new Array(n).fill(0);
        arr.push(arr2);
    }
    
    for (let i = 0; i < n; i++) {
        arr[i][i] = 1;
    }
    
    return arr;
}