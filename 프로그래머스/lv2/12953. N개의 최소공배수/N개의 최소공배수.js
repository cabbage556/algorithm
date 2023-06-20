function solution(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    
    for (let i = 0; i < arr.length - 1; i++) {
        let greater = arr[i] > arr[i + 1] ? arr[i] : arr[i + 1];
        let smaller = arr[i] > arr[i + 1] ? arr[i + 1] : arr[i];
        let remainder = greater % smaller;
        
        while (smaller !== 0) {
            remainder = greater % smaller;
            greater = smaller;
            smaller = remainder;
        }
        
        // 두 수의 최소공배수를 구해서 다음 원소에 할당
        arr[i + 1] = arr[i] * arr[i + 1] / greater;
    }
    
    return arr[arr.length - 1];
}