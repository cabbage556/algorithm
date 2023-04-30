function solution(arr) {
    let x = 0;
    let temp = [];
    
    while (true) {
        temp = [...arr];
        
        arr.forEach((el, i) => {
            if (el % 2 === 0 && el >= 50) {
                arr[i] /= 2;
            } else if (el % 2 === 1 && el < 50) {
                arr[i] *= 2;
                arr[i] += 1;
            }
        });
        
        if (JSON.stringify(temp) === JSON.stringify(arr)) {
            break;
        }
        
        x++;
    }
    
    return x;
}