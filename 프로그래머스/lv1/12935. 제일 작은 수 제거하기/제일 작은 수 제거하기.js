function solution(arr) {
    const min = Math.min(...arr);
    const minIdx = arr.indexOf(min);
    arr.splice(minIdx, 1);
    return arr.length === 0 ? [-1] : arr;
}