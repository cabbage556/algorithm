/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    // 콜백 함수 결과로 배열 오름차순 정렬
    return arr.sort((a, b) => fn(a) - fn(b));
};

const array1 = [5, 4, 1, 2, 3];
console.log(sortBy(array1, (x) => x));

const array2 = [{ x: 1 }, { x: 0 }, { x: -1 }];
console.log(sortBy(array2, (d) => d.x));

const array3 = [
    [3, 4],
    [5, 2],
    [10, 1],
];
console.log(sortBy(array3, (x) => x[1]));
