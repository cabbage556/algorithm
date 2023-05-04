function solution(arr, query) {
    query.forEach((el, i) => {
        i % 2 === 0
            ? arr = arr.slice(0, el + 1)
            : arr = arr.slice(el);
    });
    
    return arr;
}