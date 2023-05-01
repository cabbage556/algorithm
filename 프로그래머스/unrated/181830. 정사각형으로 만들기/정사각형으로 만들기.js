function solution(arr) {
    if (arr.length === arr[0].length) {
        return arr;
    } else if (arr.length > arr[0].length) {
        const count = arr.length - arr[0].length;
        
        arr.forEach(el => {
            for (let i = 0; i < count; i++) {
                el.push(0);
            }
        });
        
        return arr;
    } else {
        const count = arr[0].length - arr.length;
        
        for (let i = 0; i < count; i++) {
            arr.push(new Array(arr[0].length).fill(0));
        }
        
        return arr;
    }
}