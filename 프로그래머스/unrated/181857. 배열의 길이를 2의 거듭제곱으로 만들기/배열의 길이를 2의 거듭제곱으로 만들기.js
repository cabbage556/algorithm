function solution(arr) {
    let times = 0;
    
    while (true) {
        if (2 ** times >= arr.length) {
            break;
        }
        
        times++;
    }
    
    if (2 ** times === arr.length) {
        return arr;
    }
    
    times = 2 ** times - arr.length;
    
    for (let i = 0; i < times; i++) {
        arr.push(0);
    }
    
    return arr;
}