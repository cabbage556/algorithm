/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    // arr: multi-dimensional array
    // n: depth
    // return: a flattened version of that array

    if (n === 0) {
        return arr;
    }

    const flattendArray = [];

    for (let i = 0; i < arr.length; i++) {
        // 현재 원소가 배열이 아닌 경우 푸쉬하고 다음 원소 확인
        if (!Array.isArray(arr[i])) {
            flattendArray.push(arr[i]);
            continue;
        }

        // 현재 원소가 배열인 경우
        // 현재 원소에 대해 flat 함수 재귀 호출, n의 값은 1 감소시켜 전달
        flattendArray.push(...flat(arr[i], n - 1));
    }

    return flattendArray;
};

// console.log(
//     flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)
// );

console.log(
    flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
);

// console.log(
//     flat(
//         [
//             [1, 2, 3],
//             [4, 5, 6],
//             [7, 8, [9, 10, 11], 12],
//             [13, 14, 15],
//         ],
//         3
//     )
// );
