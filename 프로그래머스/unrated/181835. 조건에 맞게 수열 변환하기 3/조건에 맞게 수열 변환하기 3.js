function solution(arr, k) {
    return arr.map((num) => {
        return k % 2 === 0 ? num += k : num *= k;
    });
}