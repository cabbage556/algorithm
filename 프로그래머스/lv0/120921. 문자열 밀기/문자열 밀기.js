function solution(A, B) {
    if (A === B) return 0;
    
    let count = 0;
    
    while (A !== B) {
        const arr = A.split("");
        arr.unshift(arr.pop());
        A = arr.join("");
        count++;
        
        if (count > 100) return -1;
    }
    
    return count;
}