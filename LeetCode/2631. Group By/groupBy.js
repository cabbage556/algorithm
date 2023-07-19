/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    /*
    A grouped array is an object where each key is the output of fn(arr[i])
    and each value is an array containing all items in the original array with that key.
    */
    const groupedArray = {};

    this.forEach((n) => {
        if (!groupedArray[fn(n)]) {
            groupedArray[fn(n)] = [n];
        } else {
            groupedArray[fn(n)].push(n);
        }
    });

    return groupedArray;
};

const array1 = [{ id: "1" }, { id: "1" }, { id: "2" }];
console.log(
    array1.groupBy(function (item) {
        return item.id;
    })
);

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
    array2.groupBy(function (n) {
        return String(n > 5);
    })
);

const array3 = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9],
];
console.log(
    array3.groupBy(function (list) {
        return String(list[0]);
    })
);
