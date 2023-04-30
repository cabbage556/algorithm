function solution(arr, k) {
    arr = new Set(arr);
    arr = Array.from(arr);
    
    if (arr.length < k) {
        for (let i = arr.length; i <= k; i++) {
            arr.push(-1);
        }
    }
    
    return arr.slice(0, k);
}